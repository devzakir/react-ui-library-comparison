import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
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
import { Clock, User, ArrowLeft } from 'lucide-react';

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
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-orange-100 text-orange-800 border-orange-200',
    low: 'bg-blue-100 text-blue-800 border-blue-200',
};

const columnConfig = {
    todo: { title: 'To Do', color: 'border-red-500' },
    inProgress: { title: 'In Progress', color: 'border-blue-500' },
    done: { title: 'Done', color: 'border-green-500' },
};

function TaskCard({ task, isDragging }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{task.title}</h3>
                    <span
                        className={cn(
                            'text-xs px-2 py-0.5 rounded-full border',
                            priorityColors[task.priority]
                        )}
                    >
                        {task.priority}
                    </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {task.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md border border-blue-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium">
                            {task.avatar}
                        </div>
                        <span className="text-xs">{task.assignee}</span>
                    </div>
                    <Clock className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}

function Column({ column, tasks }) {
    const { setNodeRef } = useSortable({
        id: column,
        data: { type: 'column' },
    });

    return (
        <div ref={setNodeRef} className="flex-1 min-w-[300px]">
            <div
                className={cn(
                    'bg-gray-50 border-2 rounded-lg p-4 h-full',
                    columnConfig[column].color
                )}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div
                            className={cn(
                                'w-2 h-2 rounded-full',
                                column === 'todo' && 'bg-red-500',
                                column === 'inProgress' && 'bg-blue-500',
                                column === 'done' && 'bg-green-500'
                            )}
                        />
                        <h2 className="font-bold text-lg">{columnConfig[column].title}</h2>
                    </div>
                    <span className="text-sm font-medium bg-white px-2 py-1 rounded-full border border-gray-300">
                        {tasks.length}
                    </span>
                </div>
                <div className="min-h-[500px]">
                    <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                        {tasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </SortableContext>
                </div>
            </div>
        </div>
    );
}

export default function ShadcnKanban() {
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
            const activeIndex = tasks[activeContainer].findIndex((task) => task.id === active.id);
            const overIndex = tasks[overContainer].findIndex((task) => task.id === over.id);

            if (activeIndex !== overIndex) {
                setTasks((prev) => ({
                    ...prev,
                    [overContainer]: arrayMove(prev[overContainer], activeIndex, overIndex),
                }));
            }
        } else {
            const activeIndex = tasks[activeContainer].findIndex((task) => task.id === active.id);
            const overIndex =
                over.id in tasks
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
        return Object.keys(tasks).find((key) => tasks[key].some((task) => task.id === id));
    };

    const activeTask = activeId ? Object.values(tasks).flat().find((task) => task.id === activeId) : null;

    return (
        <>
            <Head title="Kanban Board - shadcn/ui" />
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Navigation */}
                    <div className="mb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">Project Board</h1>
                                <p className="text-gray-600">
                                    Drag and drop tasks between columns to update their status
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5 text-gray-500" />
                                    <span className="text-sm text-gray-700">7 Tasks</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCorners}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        <div className="flex gap-4">
                            {Object.keys(tasks).map((column) => (
                                <Column key={column} column={column} tasks={tasks[column]} />
                            ))}
                        </div>

                        <DragOverlay>
                            {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
                        </DragOverlay>
                    </DndContext>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mt-6">
                        <p className="text-sm text-center text-gray-600">
                            Built with <strong>shadcn/ui</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
