import { useState } from 'react';
import { Head } from '@inertiajs/react';
import '@mantine/core/styles.css';
import {
    MantineProvider,
    Container,
    Title,
    Text,
    Card,
    Badge,
    Group,
    Stack,
    Avatar,
    ActionIcon,
    Paper,
    Flex,
    Box,
} from '@mantine/core';
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
        cursor: 'grab',
    };

    return (
        <Card
            ref={setNodeRef}
            style={{
                ...style,
                cursor: 'grab',
                transition: 'all 0.2s ease',
                marginBottom: '1rem',
            }}
            {...attributes}
            {...listeners}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#4dabf7';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = '';
            }}
        >
            <Group position="apart" mb="xs">
                <Text weight={600} size="md" lineClamp={1}>
                    {task.title}
                </Text>
                <Badge color={priorityColors[task.priority]} size="sm" variant="light">
                    {task.priority}
                </Badge>
            </Group>

            <Text size="sm" color="dimmed" mb="md" lineClamp={2}>
                {task.description}
            </Text>

            <Group spacing="xs" mb="md">
                {task.tags.map((tag) => (
                    <Badge key={tag} size="sm" variant="filled" color="blue">
                        {tag}
                    </Badge>
                ))}
            </Group>

            <Group spacing="xs">
                <Avatar
                    size="sm"
                    radius="xl"
                    color="blue"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'grape', deg: 45 }}
                >
                    {task.avatar}
                </Avatar>
                <Text size="xs" weight={500} color="dimmed">
                    {task.assignee}
                </Text>
            </Group>
        </Card>
    );
}

function Column({ id, title, tasks, count }) {
    const { setNodeRef } = useSortable({ id });

    const columnColors = {
        todo: { color: 'gray', gradient: { from: 'gray.1', to: 'gray.0' } },
        inProgress: { color: 'blue', gradient: { from: 'blue.1', to: 'blue.0' } },
        done: { color: 'green', gradient: { from: 'green.1', to: 'green.0' } },
    };

    const bgColors = {
        todo: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
        inProgress: 'linear-gradient(135deg, #e7f5ff 0%, #d0ebff 100%)',
        done: 'linear-gradient(135deg, #ebfbee 0%, #d3f9d8 100%)',
    };

    const borderColors = {
        todo: '#adb5bd',
        inProgress: '#74c0fc',
        done: '#8ce99a',
    };

    return (
        <Paper
            ref={setNodeRef}
            p="md"
            radius="lg"
            withBorder
            style={{
                minHeight: '500px',
                minWidth: '320px',
                flex: 1,
                borderWidth: '2px',
                borderStyle: 'dashed',
                borderColor: borderColors[id],
                background: bgColors[id],
            }}
        >
            <Group position="apart" mb="md" pb="md" style={{
                borderBottom: `2px solid ${borderColors[id]}`,
            }}>
                <Text weight={700} size="lg" color={columnColors[id].color}>
                    {title}
                </Text>
                <Badge
                    size="lg"
                    variant="filled"
                    color={columnColors[id].color}
                    sx={{ fontWeight: 700 }}
                >
                    {count}
                </Badge>
            </Group>

            <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                <Stack spacing="md">
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </Stack>
            </SortableContext>
        </Paper>
    );
}

export default function MantineKanban() {
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
            <Head title="Kanban Board - Mantine UI" />
            <MantineProvider>
                <Box
                    style={{
                        minHeight: '100vh',
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                    }}
                >
                    <Container size="xl">
                        <Stack spacing="xl" mb="xl">
                            <div>
                                <Title order={1} size="h1" mb="xs">
                                    Project Kanban Board
                                </Title>
                                <Text size="lg" color="dimmed">
                                    Drag and drop tasks to organize your workflow
                                </Text>
                            </div>
                        </Stack>

                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCorners}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDragEnd={handleDragEnd}
                        >
                            <Flex
                                gap="md"
                                align="flex-start"
                                style={{ overflowX: 'auto', paddingBottom: '1rem' }}
                            >
                                <Column id="todo" title="To Do" tasks={tasks.todo} count={tasks.todo.length} />
                                <Column id="inProgress" title="In Progress" tasks={tasks.inProgress} count={tasks.inProgress.length} />
                                <Column id="done" title="Done" tasks={tasks.done} count={tasks.done.length} />
                            </Flex>

                            <DragOverlay>
                                {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
                            </DragOverlay>
                        </DndContext>

                        <Paper shadow="sm" radius="md" p="md" mt="xl">
                            <Text size="sm" align="center" color="dimmed">
                                Built with <strong>Mantine UI v8</strong> + dnd-kit
                            </Text>
                        </Paper>
                    </Container>
                </Box>
            </MantineProvider>
        </>
    );
}
