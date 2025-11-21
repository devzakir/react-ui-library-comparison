import { useState } from 'react';
import { Head } from '@inertiajs/react';
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
import { css } from '../../../../styled-system/css';
import { container, hstack, vstack, stack } from '../../../../styled-system/patterns';

const initialTasks = {
    todo: [
        {
            id: '1',
            title: 'Design new landing page',
            description: 'Create wireframes and mockups for the new homepage',
            assignee: 'Sarah Chen',
            priority: 'high',
            tags: ['design', 'ui/ux'],
        },
        {
            id: '2',
            title: 'Update documentation',
            description: 'Review and update API documentation for v2.0',
            assignee: 'Mike Johnson',
            priority: 'medium',
            tags: ['docs', 'backend'],
        },
        {
            id: '3',
            title: 'Code review for PR #234',
            description: 'Review authentication refactor pull request',
            assignee: 'Lisa Wong',
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
            priority: 'medium',
            tags: ['frontend', 'feature'],
        },
        {
            id: '5',
            title: 'Optimize database queries',
            description: 'Improve performance of slow queries',
            assignee: 'Tom Anderson',
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
            priority: 'high',
            tags: ['devops', 'automation'],
        },
        {
            id: '7',
            title: 'Fix mobile responsiveness',
            description: 'Resolve layout issues on mobile devices',
            assignee: 'David Lee',
            priority: 'medium',
            tags: ['frontend', 'bug'],
        },
    ],
};

const priorityColors = {
    high: { bg: 'red.50', text: 'red.700', border: 'red.200' },
    medium: { bg: 'yellow.50', text: 'yellow.700', border: 'yellow.200' },
    low: { bg: 'green.50', text: 'green.700', border: 'green.200' },
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
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={css({
                bg: 'white',
                rounded: 'lg',
                p: 4,
                mb: 3,
                border: '1px solid',
                borderColor: 'gray.200',
                cursor: 'grab',
                transition: 'all 0.2s',
                _hover: {
                    shadow: 'md',
                    borderColor: 'blue.300',
                    transform: 'translateY(-2px)',
                },
                _active: {
                    cursor: 'grabbing',
                },
            })}
        >
            <div className={hstack({ justify: 'space-between', mb: 2 })}>
                <h3 className={css({ fontWeight: 'semibold', fontSize: 'md', color: 'gray.900' })}>
                    {task.title}
                </h3>
                <span
                    className={css({
                        px: 2,
                        py: 0.5,
                        rounded: 'full',
                        fontSize: 'xs',
                        fontWeight: 'medium',
                        bg: priorityColors[task.priority].bg,
                        color: priorityColors[task.priority].text,
                        border: '1px solid',
                        borderColor: priorityColors[task.priority].border,
                    })}
                >
                    {task.priority}
                </span>
            </div>
            <p className={css({ fontSize: 'sm', color: 'gray.600', mb: 3 })}>
                {task.description}
            </p>
            <div className={vstack({ align: 'start', gap: 2 })}>
                <div className={hstack({ gap: 1.5, flexWrap: 'wrap' })}>
                    {task.tags.map((tag) => (
                        <span
                            key={tag}
                            className={css({
                                px: 2,
                                py: 1,
                                rounded: 'md',
                                fontSize: 'xs',
                                bg: 'blue.50',
                                color: 'blue.700',
                                fontWeight: 'medium',
                            })}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className={hstack({ gap: 2, alignItems: 'center' })}>
                    <div
                        className={css({
                            w: 6,
                            h: 6,
                            rounded: 'full',
                            bgGradient: 'to-r',
                            gradientFrom: 'blue.400',
                            gradientTo: 'purple.500',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: 'xs',
                            fontWeight: 'bold',
                        })}
                    >
                        {task.assignee.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className={css({ fontSize: 'xs', color: 'gray.600', fontWeight: 'medium' })}>
                        {task.assignee}
                    </span>
                </div>
            </div>
        </div>
    );
}

function Column({ id, title, tasks, count }) {
    const { setNodeRef } = useSortable({ id });

    const columnColors = {
        todo: { bg: 'gray.50', border: 'gray.300', accent: 'gray.600' },
        inProgress: { bg: 'blue.50', border: 'blue.300', accent: 'blue.600' },
        done: { bg: 'green.50', border: 'green.300', accent: 'green.600' },
    };

    return (
        <div
            ref={setNodeRef}
            className={css({
                bg: columnColors[id].bg,
                rounded: 'xl',
                p: 4,
                minH: '500px',
                border: '2px dashed',
                borderColor: columnColors[id].border,
                flex: 1,
                minW: '320px',
            })}
        >
            <div className={hstack({ justify: 'space-between', mb: 4, pb: 3, borderBottom: '2px solid', borderColor: columnColors[id].border })}>
                <h2 className={css({ fontWeight: 'bold', fontSize: 'lg', color: columnColors[id].accent })}>
                    {title}
                </h2>
                <span
                    className={css({
                        px: 2.5,
                        py: 1,
                        rounded: 'full',
                        fontSize: 'sm',
                        fontWeight: 'bold',
                        bg: 'white',
                        color: columnColors[id].accent,
                        border: '2px solid',
                        borderColor: columnColors[id].border,
                    })}
                >
                    {count}
                </span>
            </div>
            <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                <div className={vstack({ align: 'stretch' })}>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </SortableContext>
        </div>
    );
}

export default function ParkUIKanban() {
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
            <Head title="Kanban Board - Park UI" />
            <div className={css({ minH: '100vh', bgGradient: 'to-br', gradientFrom: 'gray.50', gradientTo: 'gray.100', py: 8 })}>
                <div className={container({ maxW: '7xl', px: 4 })}>
                    <div className={css({ mb: 8 })}>
                        <h1 className={css({ fontSize: '3xl', fontWeight: 'bold', color: 'gray.900', mb: 2 })}>
                            Project Kanban Board
                        </h1>
                        <p className={css({ fontSize: 'lg', color: 'gray.600' })}>
                            Drag and drop tasks to organize your workflow
                        </p>
                    </div>

                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCorners}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                    >
                        <div className={hstack({ gap: 4, align: 'flex-start', overflowX: 'auto', pb: 4 })}>
                            <Column id="todo" title="To Do" tasks={tasks.todo} count={tasks.todo.length} />
                            <Column id="inProgress" title="In Progress" tasks={tasks.inProgress} count={tasks.inProgress.length} />
                            <Column id="done" title="Done" tasks={tasks.done} count={tasks.done.length} />
                        </div>

                        <DragOverlay>
                            {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
                        </DragOverlay>
                    </DndContext>

                    <div className={css({ bg: 'white', rounded: 'lg', shadow: 'md', p: 4, mt: 6 })}>
                        <p className={css({ fontSize: 'sm', textAlign: 'center', color: 'gray.600', m: 0 })}>
                            Built with <strong>Park UI (Ark UI + Panda CSS)</strong> + dnd-kit
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
