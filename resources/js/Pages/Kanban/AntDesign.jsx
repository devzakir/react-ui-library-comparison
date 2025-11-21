import { useState } from 'react';
import { Head } from '@inertiajs/react';
import {
    ConfigProvider,
    Card,
    Badge,
    Tag,
    Avatar,
    Typography,
    Space,
    Flex,
} from 'antd';
import {
    ClockCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';
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
import 'antd/dist/reset.css';

const { Title, Text } = Typography;

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
            assignee: 'Chris Park',
            avatar: 'CP',
            priority: 'medium',
            tags: ['frontend', 'bugfix'],
        },
    ],
};

const priorityColors = {
    high: 'red',
    medium: 'orange',
    low: 'blue',
};

const columnConfig = {
    todo: { title: 'To Do', color: '#ff4d4f', count: 0 },
    inProgress: { title: 'In Progress', color: '#1890ff', count: 0 },
    done: { title: 'Done', color: '#52c41a', count: 0 },
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
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card
                size="small"
                style={{
                    marginBottom: '12px',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
                    borderRadius: '8px',
                }}
                hoverable
            >
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Flex justify="space-between" align="center">
                        <Text strong style={{ fontSize: '14px' }}>{task.title}</Text>
                        <Badge
                            color={priorityColors[task.priority]}
                            text={task.priority}
                            style={{ fontSize: '12px' }}
                        />
                    </Flex>
                    <Text type="secondary" style={{ fontSize: '13px', display: 'block' }}>
                        {task.description}
                    </Text>
                    <Space size={[0, 4]} wrap>
                        {task.tags.map((tag, index) => (
                            <Tag key={index} color="blue" style={{ fontSize: '11px', margin: '2px' }}>
                                {tag}
                            </Tag>
                        ))}
                    </Space>
                    <Flex justify="space-between" align="center">
                        <Flex align="center" gap={8}>
                            <Avatar size="small" style={{ backgroundColor: '#1890ff' }}>
                                {task.avatar}
                            </Avatar>
                            <Text style={{ fontSize: '12px' }}>{task.assignee}</Text>
                        </Flex>
                        <ClockCircleOutlined style={{ color: '#8c8c8c' }} />
                    </Flex>
                </Space>
            </Card>
        </div>
    );
}

function Column({ column, tasks }) {
    const { setNodeRef } = useSortable({
        id: column,
        data: { type: 'column' },
    });

    return (
        <div ref={setNodeRef} style={{ flex: 1, minWidth: '300px' }}>
            <Card
                title={
                    <Flex justify="space-between" align="center">
                        <Space>
                            <div
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: columnConfig[column].color,
                                }}
                            />
                            <Text strong>{columnConfig[column].title}</Text>
                        </Space>
                        <Badge
                            count={tasks.length}
                            style={{
                                backgroundColor: columnConfig[column].color,
                            }}
                        />
                    </Flex>
                }
                style={{
                    height: '100%',
                    borderRadius: '12px',
                    backgroundColor: '#fafafa',
                }}
                bodyStyle={{
                    padding: '16px',
                    minHeight: '500px',
                }}
            >
                <SortableContext
                    items={tasks.map((t) => t.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </SortableContext>
            </Card>
        </div>
    );
}

export default function AntDesignKanban() {
    const [tasks, setTasks] = useState(initialTasks);
    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) {
            setActiveId(null);
            return;
        }

        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id) || over.id;

        if (!activeContainer || !overContainer) {
            setActiveId(null);
            return;
        }

        if (activeContainer === overContainer) {
            const activeIndex = tasks[activeContainer].findIndex(
                (task) => task.id === active.id
            );
            const overIndex = tasks[overContainer].findIndex(
                (task) => task.id === over.id
            );

            if (activeIndex !== overIndex) {
                setTasks((prev) => ({
                    ...prev,
                    [overContainer]: arrayMove(
                        prev[overContainer],
                        activeIndex,
                        overIndex
                    ),
                }));
            }
        } else {
            const activeIndex = tasks[activeContainer].findIndex(
                (task) => task.id === active.id
            );
            const overIndex = over.id in tasks
                ? tasks[overContainer].length
                : tasks[overContainer].findIndex((task) => task.id === over.id);

            setTasks((prev) => {
                const activeItems = [...prev[activeContainer]];
                const overItems = [...prev[overContainer]];
                const [movedItem] = activeItems.splice(activeIndex, 1);
                overItems.splice(overIndex, 0, movedItem);

                return {
                    ...prev,
                    [activeContainer]: activeItems,
                    [overContainer]: overItems,
                };
            });
        }

        setActiveId(null);
    };

    const findContainer = (id) => {
        if (id in tasks) {
            return id;
        }
        return Object.keys(tasks).find((key) =>
            tasks[key].some((task) => task.id === id)
        );
    };

    const activeTask = activeId
        ? Object.values(tasks)
              .flat()
              .find((task) => task.id === activeId)
        : null;

    return (
        <>
            <Head title="Kanban Board - Ant Design" />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1890ff',
                        borderRadius: 8,
                    },
                }}
            >
                <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '2rem 1rem' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <Card style={{ marginBottom: '1.5rem', borderRadius: '12px' }}>
                            <Flex justify="space-between" align="center">
                                <div>
                                    <Title level={2} style={{ margin: 0, marginBottom: '0.5rem' }}>
                                        Project Board
                                    </Title>
                                    <Text type="secondary">
                                        Drag and drop tasks between columns to update their status
                                    </Text>
                                </div>
                                <Flex gap={16}>
                                    <Flex align="center" gap={8}>
                                        <UserOutlined />
                                        <Text>7 Tasks</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Card>

                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCorners}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                        >
                            <Flex gap={16} style={{ alignItems: 'stretch' }}>
                                {Object.keys(tasks).map((column) => (
                                    <Column
                                        key={column}
                                        column={column}
                                        tasks={tasks[column]}
                                    />
                                ))}
                            </Flex>

                            <DragOverlay>
                                {activeTask ? (
                                    <TaskCard task={activeTask} isDragging />
                                ) : null}
                            </DragOverlay>
                        </DndContext>

                        <Card style={{ marginTop: '1.5rem', borderRadius: '12px' }}>
                            <Text style={{ textAlign: 'center', display: 'block', color: '#666' }}>
                                Built with <strong>Ant Design v5</strong>
                            </Text>
                        </Card>
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
}
