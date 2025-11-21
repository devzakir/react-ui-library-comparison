import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import {
    Mail,
    MessageSquare,
    Phone,
    Video,
    MapPin,
    Briefcase,
    ArrowLeft,
    DollarSign,
    CheckSquare,
    Calendar,
    Clock,
    TrendingUp,
    X,
    Star,
    Building,
    Send,
    Check,
    AlertCircle,
    Users,
} from 'lucide-react';

export default function ShadcnCRM() {
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [smsModalOpen, setSmsModalOpen] = useState(false);
    const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('activity');

    const contact = {
        name: 'Sarah Chen',
        email: 'sarah.chen@techcorp.com',
        phone: '+1 (555) 123-4567',
        company: 'TechCorp Solutions',
        position: 'VP of Engineering',
        location: 'San Francisco, CA',
        avatar: 'SC',
        status: 'active',
        tags: ['Enterprise', 'Decision Maker', 'Technical'],
        score: 85,
    };

    const stats = [
        { label: 'Total Deals', value: '$145,000', icon: DollarSign, color: 'text-green-600 bg-green-100' },
        { label: 'Open Tasks', value: '8', icon: CheckSquare, color: 'text-blue-600 bg-blue-100' },
        { label: 'Meetings', value: '12', icon: Calendar, color: 'text-purple-600 bg-purple-100' },
        { label: 'Last Contact', value: '2 days ago', icon: Clock, color: 'text-orange-600 bg-orange-100' },
    ];

    const activities = [
        {
            type: 'email',
            title: 'Email sent: Q4 Product Demo',
            time: '2 hours ago',
            status: 'opened',
            color: 'blue',
        },
        {
            type: 'call',
            title: 'Phone call: 25 minutes',
            time: '1 day ago',
            status: 'completed',
            color: 'green',
        },
        {
            type: 'whatsapp',
            title: 'WhatsApp message sent',
            time: '2 days ago',
            status: 'replied',
            color: 'teal',
        },
        {
            type: 'meeting',
            title: 'Product demo completed',
            time: '3 days ago',
            status: 'completed',
            color: 'violet',
        },
        {
            type: 'email',
            title: 'Proposal sent',
            time: '5 days ago',
            status: 'opened',
            color: 'blue',
        },
    ];

    const deals = [
        {
            name: 'Enterprise License Q1',
            value: '$85,000',
            stage: 'Negotiation',
            probability: 75,
            closeDate: '2024-02-15',
        },
        {
            name: 'Support Package',
            value: '$35,000',
            stage: 'Proposal',
            probability: 60,
            closeDate: '2024-02-28',
        },
        {
            name: 'Training Program',
            value: '$25,000',
            stage: 'Qualified',
            probability: 40,
            closeDate: '2024-03-10',
        },
    ];

    const tasks = [
        { title: 'Send contract for review', due: '2024-01-25', priority: 'high', completed: false },
        { title: 'Schedule follow-up call', due: '2024-01-26', priority: 'medium', completed: false },
        { title: 'Prepare presentation', due: '2024-01-28', priority: 'high', completed: false },
        { title: 'Update CRM notes', due: '2024-01-30', priority: 'low', completed: false },
    ];

    return (
        <>
            <Head title="CRM Contact Detail - shadcn/ui" />
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

                    {/* Header Card */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                                    {contact.avatar}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h1 className="text-2xl font-bold">{contact.name}</h1>
                                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200">
                                            Active
                                        </span>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-1">{contact.position}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                                        <Building className="w-4 h-4" />
                                        {contact.company}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        {contact.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1 mb-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm text-gray-500">Lead Score</span>
                                </div>
                                <p className="text-3xl font-bold text-blue-600">{contact.score}</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{contact.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">{contact.location}</span>
                            </div>
                        </div>

                        {/* Communication Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setEmailModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Email
                            </button>
                            <button
                                onClick={() => setSmsModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                            >
                                <MessageSquare className="w-4 h-4" />
                                SMS
                            </button>
                            <button
                                onClick={() => setWhatsappModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                            >
                                <MessageSquare className="w-4 h-4" />
                                WhatsApp
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                                <Phone className="w-4 h-4" />
                                Call
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', stat.color)}>
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Tabs */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="border-b border-gray-200">
                                    <div className="flex">
                                        {['activity', 'emails', 'sms', 'whatsapp', 'notes'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={cn(
                                                    'px-6 py-3 text-sm font-medium border-b-2 transition-colors capitalize',
                                                    activeTab === tab
                                                        ? 'border-blue-600 text-blue-600'
                                                        : 'border-transparent text-gray-600 hover:text-blue-600'
                                                )}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6">
                                    {activeTab === 'activity' && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                                            <div className="space-y-4">
                                                {activities.map((activity, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                                    >
                                                        <div
                                                            className={cn(
                                                                'w-10 h-10 rounded-full flex items-center justify-center',
                                                                activity.color === 'blue' && 'bg-blue-100 text-blue-600',
                                                                activity.color === 'green' && 'bg-green-100 text-green-600',
                                                                activity.color === 'teal' && 'bg-teal-100 text-teal-600',
                                                                activity.color === 'violet' && 'bg-purple-100 text-purple-600'
                                                            )}
                                                        >
                                                            {activity.type === 'email' && <Mail className="w-5 h-5" />}
                                                            {activity.type === 'call' && <Phone className="w-5 h-5" />}
                                                            {activity.type === 'whatsapp' && <MessageSquare className="w-5 h-5" />}
                                                            {activity.type === 'meeting' && <Video className="w-5 h-5" />}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between mb-1">
                                                                <p className="font-medium">{activity.title}</p>
                                                                {activity.status === 'completed' && (
                                                                    <span className="flex items-center gap-1 text-xs text-green-600">
                                                                        <Check className="w-3 h-3" /> Completed
                                                                    </span>
                                                                )}
                                                                {activity.status === 'opened' && (
                                                                    <span className="flex items-center gap-1 text-xs text-blue-600">
                                                                        <AlertCircle className="w-3 h-3" /> Opened
                                                                    </span>
                                                                )}
                                                                {activity.status === 'replied' && (
                                                                    <span className="flex items-center gap-1 text-xs text-teal-600">
                                                                        <Check className="w-3 h-3" /> Replied
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-gray-500">{activity.time}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'emails' && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Email History</h3>
                                            <p className="text-gray-600 mb-4">
                                                Email conversations and history will appear here.
                                            </p>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                                <Mail className="w-4 h-4" />
                                                Compose Email
                                            </button>
                                        </div>
                                    )}

                                    {activeTab === 'sms' && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">SMS Messages</h3>
                                            <p className="text-gray-600 mb-4">SMS conversations will appear here.</p>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                                <MessageSquare className="w-4 h-4" />
                                                Send SMS
                                            </button>
                                        </div>
                                    )}

                                    {activeTab === 'whatsapp' && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">WhatsApp Messages</h3>
                                            <p className="text-gray-600 mb-4">
                                                WhatsApp conversations will appear here.
                                            </p>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                                                <MessageSquare className="w-4 h-4" />
                                                Send WhatsApp
                                            </button>
                                        </div>
                                    )}

                                    {activeTab === 'notes' && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Notes</h3>
                                            <textarea
                                                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                                placeholder="Add a note..."
                                            />
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                                Save Note
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Deals & Tasks */}
                        <div className="space-y-6">
                            {/* Deals */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold">Deals & Opportunities</h3>
                                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                        + Add Deal
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {deals.map((deal, index) => (
                                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <p className="font-medium text-sm mb-1">{deal.name}</p>
                                                    <p className="text-xs text-gray-500">{deal.stage}</p>
                                                </div>
                                                <p className="font-bold text-sm text-green-600">{deal.value}</p>
                                            </div>
                                            <div className="mb-2">
                                                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                                                    <span>Probability</span>
                                                    <span>{deal.probability}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-blue-600 rounded-full"
                                                        style={{ width: `${deal.probability}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                Close: {deal.closeDate}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tasks */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold">Tasks</h3>
                                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                        + Add Task
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {tasks.map((task, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={task.completed}
                                                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">{task.title}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {task.due}
                                                    </span>
                                                    <span
                                                        className={cn(
                                                            'text-xs px-2 py-0.5 rounded-full font-medium',
                                                            task.priority === 'high' &&
                                                                'bg-red-100 text-red-800 border border-red-200',
                                                            task.priority === 'medium' &&
                                                                'bg-orange-100 text-orange-800 border border-orange-200',
                                                            task.priority === 'low' &&
                                                                'bg-blue-100 text-blue-800 border border-blue-200'
                                                        )}
                                                    >
                                                        {task.priority}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modals */}
                    {emailModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold">Compose Email</h3>
                                    <button
                                        onClick={() => setEmailModalOpen(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">To</label>
                                        <input
                                            type="email"
                                            value={contact.email}
                                            readOnly
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter subject"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Message</label>
                                        <textarea
                                            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Write your message..."
                                        />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => setEmailModalOpen(false)}
                                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center gap-2">
                                            <Send className="w-4 h-4" />
                                            Send Email
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {smsModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold">Send SMS</h3>
                                    <button
                                        onClick={() => setSmsModalOpen(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">To</label>
                                        <input
                                            type="tel"
                                            value={contact.phone}
                                            readOnly
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Message</label>
                                        <textarea
                                            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Write your message..."
                                            maxLength={160}
                                        />
                                        <p className="text-xs text-gray-500 mt-1">160 characters max</p>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => setSmsModalOpen(false)}
                                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center gap-2">
                                            <Send className="w-4 h-4" />
                                            Send SMS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {whatsappModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold">Send WhatsApp Message</h3>
                                    <button
                                        onClick={() => setWhatsappModalOpen(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">To</label>
                                        <input
                                            type="tel"
                                            value={contact.phone}
                                            readOnly
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Message</label>
                                        <textarea
                                            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Write your message..."
                                        />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => setWhatsappModalOpen(false)}
                                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 flex items-center gap-2">
                                            <Send className="w-4 h-4" />
                                            Send WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
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
