import { useState } from 'react';
import { Head } from '@inertiajs/react';
import {
    ChakraProvider,
    createSystem,
    defaultConfig,
    Box,
    Container,
    Heading,
    Text,
    HStack,
    VStack,
    Stack,
    Badge,
    Avatar,
    Flex,
} from '@chakra-ui/react';
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const system = createSystem(defaultConfig);

const initialTasks = {
    todo: [
        {
            id: '1',
            title: 'Design new landing page',
            description: 'Create wireframes and mockups for the new homepage',
            assignee: 'Sarah Chen',
            avatar: 'SC',
            priority: 'high',
            tags: ['design', 'ui/ux'],
        },
        {
            id: '2',
            title: 'Update documentation',
            description: 'Review and update API documentation for v2.0',
            assignee: 'Mike Johnson',
            avatar: 'MJ',
            priority: 'medium',
            tags: ['docs', 'backend'],
        },
        {
            id: '3',
            title: 'Code review for PR #234',
            description: 'Review authentication refactor pull request',
            assignee: 'Lisa Wong',
            avatar: 'LW',
            priority: 'high',
            tags: ['code-review', 'security'],
        },
    ],
    inProgress: [
        {
            id: '4',
            title: 'Implement dark mode',
            description: 'Add dark mode toggle and theme switching',
            assignee: 'Alex Kumar',
            avatar: 'AK',
            priority: 'medium',
            tags: ['frontend', 'feature'],
        },
        {
            id: '5',
            title: 'Optimize database queries',
            description: 'Improve performance of slow queries',
            assignee: 'Tom Anderson',
            avatar: 'TA',
            priority: 'high',
            tags: ['backend', 'performance'],
        },
    ],
    done: [
        {
            id: '6',
            title: 'Setup CI/CD pipeline',
            description: 'Configure automated testing and deployment',
            assignee: 'Emma Davis',
            avatar: 'ED',
            priority: 'high',
            tags: ['devops', 'automation'],
        },
        {
            id: '7',
            title: 'Fix mobile responsiveness',
            description: 'Resolve layout issues on mobile devices',
            assignee: 'David Lee',
            avatar: 'DL',
            priority: 'medium',
            tags: ['frontend', 'bug'],
        },
    ],
};

const priorityColors = {
    high: 'red',
    medium: 'yellow',
    low: 'green',
};

function TaskCard({ task, isDragging }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <Box
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            bg="white"
            p={4}
            borderRadius="lg"
            borderWidth="1px"
            borderColor="gray.200"
            mb={3}
            cursor="grab"
            _hover={{
                shadow: 'md',
                borderColor: 'blue.300',
                transform: 'translateY(-2px)',
            }}
            _active={{
                cursor: 'grabbing',
            }}
            transition="all 0.2s"
        >
            <HStack justify="space-between" mb={2}>
                <Heading size="sm" fontWeight="semibold" noOfLines={1}>
                    {task.title}
                </Heading>
                <Badge colorPalette={priorityColors[task.priority]} variant="subtle" size="sm">
                    {task.priority}
                </Badge>
            </HStack>

            <Text fontSize="sm" color="gray.600" mb={3} noOfLines={2}>
                {task.description}
            </Text>

            <HStack gap={1.5} mb={3} flexWrap="wrap">
                {task.tags.map((tag) => (
                    <Badge key={tag} colorPalette="blue" variant="solid" size="sm">
                        {tag}
                    </Badge>
                ))}
            </HStack>

            <HStack gap={2}>
                <Avatar
                    size="sm"
                    name={task.assignee}
                    bgGradient="to-r"
                    gradientFrom="blue.400"
                    gradientTo="purple.500"
                    color="white"
                >
                    {task.avatar}
                </Avatar>
                <Text fontSize="xs" fontWeight="medium" color="gray.600">
                    {task.assignee}
                </Text>
            </HStack>
        </Box>
    );
}

function Column({ id, title, tasks, count }) {
    const { setNodeRef } = useSortable({ id });

    const columnStyles = {
        todo: {
            bg: 'gray.50',
            borderColor: 'gray.300',
            accentColor: 'gray.600',
            badgeBg: 'gray.600',
        },
        inProgress: {
            bg: 'blue.50',
            borderColor: 'blue.300',
            accentColor: 'blue.600',
            badgeBg: 'blue.600',
        },
        done: {
            bg: 'green.50',
            borderColor: 'green.300',
            accentColor: 'green.600',
            badgeBg: 'green.600',
        },
    };

    return (
        <Box
            ref={setNodeRef}
            bg={columnStyles[id].bg}
            p={4}
            borderRadius="xl"
            borderWidth="2px"
            borderStyle="dashed"
            borderColor={columnStyles[id].borderColor}
            minH="500px"
            minW="320px"
            flex={1}
        >
            <HStack
                justify="space-between"
                mb={4}
                pb={3}
                borderBottom="2px solid"
                borderColor={columnStyles[id].borderColor}
            >
                <Heading size="md" color={columnStyles[id].accentColor} fontWeight="bold">
                    {title}
                </Heading>
                <Badge
                    colorPalette={columnStyles[id].accentColor}
                    variant="solid"
                    size="lg"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontWeight="bold"
                >
                    {count}
                </Badge>
            </HStack>

            <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                <VStack align="stretch" gap={0}>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </VStack>
            </SortableContext>
        </Box>
    );
}

export default function ChakraUIKanban() {
    const [tasks, setTasks] = useState(initialTasks);
    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const findContainer = (id) => {
        if (id in tasks) {
            return id;
        }
        return Object.keys(tasks).find((key) =>
            tasks[key].some((task) => task.id === id)
        );
    };

    const handleDragStart = (event) => {
        const { active } = event;
        setActiveId(active.id);
    };

    const handleDragOver = (event) => {
        const { active, over } = event;

        if (!over) return;

        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id);

        if (!activeContainer || !overContainer || activeContainer === overContainer) {
            return;
        }

        setTasks((prev) => {
            const activeItems = prev[activeContainer];
            const overItems = prev[overContainer];

            const activeIndex = activeItems.findIndex((item) => item.id === active.id);
            const overIndex = overItems.findIndex((item) => item.id === over.id);

            let newIndex;
            if (over.id in prev) {
                newIndex = overItems.length;
            } else {
                const isBelowLastItem = over && overIndex === overItems.length - 1;
                const modifier = isBelowLastItem ? 1 : 0;
                newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
            }

            return {
                ...prev,
                [activeContainer]: prev[activeContainer].filter((item) => item.id !== active.id),
                [overContainer]: [
                    ...prev[overContainer].slice(0, newIndex),
                    activeItems[activeIndex],
                    ...prev[overContainer].slice(newIndex),
                ],
            };
        });
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) {
            setActiveId(null);
            return;
        }

        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id);

        if (!activeContainer || !overContainer) {
            setActiveId(null);
            return;
        }

        const activeIndex = tasks[activeContainer].findIndex((item) => item.id === active.id);
        const overIndex = tasks[overContainer].findIndex((item) => item.id === over.id);

        if (activeIndex !== overIndex && activeContainer === overContainer) {
            setTasks((items) => ({
                ...items,
                [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
            }));
        }

        setActiveId(null);
    };

    const activeTask = activeId
        ? Object.values(tasks).flat().find((task) => task.id === activeId)
        : null;

    return (
        <>
            <Head title="Kanban Board - Chakra UI" />
            <ChakraProvider value={system}>
                <Box
                    minH="100vh"
                    bgGradient="to-br"
                    gradientFrom="gray.50"
                    gradientTo="gray.100"
                    py={8}
                >
                    <Container maxW="1400px">
                        <VStack align="stretch" gap={8} mb={8}>
                            <Box>
                                <Heading size="3xl" mb={2}>
                                    Project Kanban Board
                                </Heading>
                                <Text fontSize="lg" color="gray.600">
                                    Drag and drop tasks to organize your workflow
                                </Text>
                            </Box>
                        </VStack>

                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCorners}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDragEnd={handleDragEnd}
                        >
                            <Flex gap={4} align="flex-start" overflowX="auto" pb={4}>
                                <Column id="todo" title="To Do" tasks={tasks.todo} count={tasks.todo.length} />
                                <Column id="inProgress" title="In Progress" tasks={tasks.inProgress} count={tasks.inProgress.length} />
                                <Column id="done" title="Done" tasks={tasks.done} count={tasks.done.length} />
                            </Flex>

                            <DragOverlay>
                                {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
                            </DragOverlay>
                        </DndContext>

                        <Box bg="white" shadow="md" borderRadius="lg" p={4} mt={6}>
                            <Text fontSize="sm" textAlign="center" color="gray.600">
                                Built with <strong>Chakra UI v3</strong> + dnd-kit
                            </Text>
                        </Box>
                    </Container>
                </Box>
            </ChakraProvider>
        </>
    );
}
