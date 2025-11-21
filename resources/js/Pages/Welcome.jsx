import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    const comparisons = [
        {
            title: 'Job Form Comparison',
            description: 'Multi-step job posting form with stepper, form validation, and rich text editor',
            route: '/job',
            icon: '📝',
            color: 'from-blue-500 to-indigo-600',
        },
        {
            title: 'Kanban Board Comparison',
            description: 'Drag-and-drop kanban board with task cards, columns, and status management',
            route: '/kanban',
            icon: '📋',
            color: 'from-purple-500 to-pink-600',
        },
        {
            title: 'CRM Contact Detail Comparison',
            description: 'Full-featured CRM with email/SMS/WhatsApp, activity timeline, deals, and tasks',
            route: '/crm',
            icon: '👥',
            color: 'from-green-500 to-teal-600',
        },
    ];

    const libraries = [
        {
            name: 'shadcn/ui',
            rating: 5,
            scores: {
                easyToWork: { score: 4, label: 'Easy to work with' },
                lines: { value: '~450 lines', label: 'Lines of code (avg)' },
                ux: { score: 5, label: 'UX first' },
                modern: { score: 5, label: 'Modern' },
                b2b: { score: 5, label: 'B2B SaaS friendly' },
                ai: { score: 5, label: 'AI friendly' },
                performance: { score: 5, label: 'Performance' },
            },
            pros: ['Zero-runtime overhead', 'Copy-paste components', 'Infinite customization', 'Modern aesthetic'],
            cons: ['More code to write', 'No built-in components', 'Steeper Tailwind learning curve'],
            color: 'bg-black',
        },
        {
            name: 'Mantine',
            rating: 5,
            scores: {
                easyToWork: { score: 5, label: 'Easy to work with' },
                lines: { value: '~350 lines', label: 'Lines of code (avg)' },
                ux: { score: 5, label: 'UX first' },
                modern: { score: 5, label: 'Modern' },
                b2b: { score: 5, label: 'B2B SaaS friendly' },
                ai: { score: 5, label: 'AI friendly' },
                performance: { score: 4, label: 'Performance' },
            },
            pros: ['Amazing DX', 'Batteries included', 'Smooth animations', 'Modern hooks API', 'Form management built-in'],
            cons: ['Larger bundle size', 'Need to import CSS files'],
            color: 'bg-blue-600',
        },
        {
            name: 'Ant Design',
            rating: 4,
            scores: {
                easyToWork: { score: 4, label: 'Easy to work with' },
                lines: { value: '~380 lines', label: 'Lines of code (avg)' },
                ux: { score: 4, label: 'UX first' },
                modern: { score: 3, label: 'Modern' },
                b2b: { score: 5, label: 'B2B SaaS friendly' },
                ai: { score: 4, label: 'AI friendly' },
                performance: { score: 3, label: 'Performance' },
            },
            pros: ['Enterprise-proven', 'Comprehensive components', 'Used by Alibaba/Tencent', 'Excellent for dashboards'],
            cons: ['Larger bundle', 'Less modern aesthetic', 'Harder to customize deeply'],
            color: 'bg-blue-500',
        },
    ];

    const recommendations = [
        {
            category: 'For B2B SaaS startups',
            winner: 'Mantine',
            reason: 'Best balance of DX, modern design, and features',
            runners: [
                { name: 'shadcn/ui', reason: 'Maximum control and performance' },
                { name: 'Ant Design', reason: 'Enterprise credibility and comprehensive components' },
            ],
        },
        {
            category: 'For AI-assisted development',
            winner: 'shadcn/ui',
            reason: 'AI writes Tailwind perfectly',
            runners: [
                { name: 'Mantine', reason: 'Clear, intuitive patterns' },
                { name: 'Ant Design', reason: 'Good but more complex' },
            ],
        },
        {
            category: 'For modern aesthetics',
            winner: 'shadcn/ui',
            reason: 'Cutting-edge Tailwind design',
            runners: [
                { name: 'Mantine', reason: 'Clean, contemporary' },
                { name: 'Ant Design', reason: 'Professional but more corporate' },
            ],
        },
    ];

    const renderStars = (score) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={star <= score ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <>
            <Head title="UI Library Comparison" />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-4">React UI Library Comparison</h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Comparing shadcn/ui, Mantine, and Ant Design across Job Forms, Kanban Boards, and CRM Pages
                        </p>
                        <div className="flex justify-center gap-4 text-sm flex-wrap">
                            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                                <span className="font-semibold">Tech Stack:</span> Laravel 12 + React 18 + Inertia.js + Vite
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparisons Section */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-4">Explore Comparisons</h2>
                    <p className="text-center text-gray-600 mb-8">
                        See the same functionality implemented with different UI libraries
                    </p>

                    {/* Warning Note */}
                    <div className="max-w-3xl mx-auto mb-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 text-2xl">⚠️</div>
                            <div>
                                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Note About Park UI & Chakra UI</h3>
                                <p className="text-yellow-800 mb-2">
                                    We initially attempted to include Park UI and Chakra UI in this comparison, but encountered persistent errors that prevented proper implementation.
                                </p>
                                <p className="text-yellow-800 text-sm">
                                    Despite multiple attempts, we were unable to get these libraries working error-free in this environment. The comparison focuses on the three libraries that worked successfully: <strong>Mantine</strong>, <strong>Ant Design</strong>, and <strong>shadcn/ui</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {comparisons.map((comparison, index) => (
                            <Link
                                key={index}
                                href={comparison.route}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                            >
                                <div className={`bg-gradient-to-r ${comparison.color} p-6 text-center`}>
                                    <div className="text-6xl mb-2">{comparison.icon}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                        {comparison.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {comparison.description}
                                    </p>
                                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                                        View Comparison
                                        <svg
                                            className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Detailed Comparison Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Detailed Library Comparison</h2>

                        <div className="space-y-8">
                            {libraries.map((library, index) => (
                                <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`${library.color} text-white px-4 py-2 rounded-lg font-bold`}>
                                                {library.name}
                                            </div>
                                            {renderStars(library.rating)}
                                        </div>
                                    </div>

                                    {/* Scores Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        {Object.entries(library.scores).map(([key, data]) => (
                                            <div key={key} className="bg-gray-50 rounded-lg p-4">
                                                <p className="text-xs text-gray-600 mb-2">{data.label}</p>
                                                {data.score ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex gap-0.5">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <span
                                                                    key={star}
                                                                    className={`text-sm ${
                                                                        star <= data.score
                                                                            ? 'text-yellow-400'
                                                                            : 'text-gray-300'
                                                                    }`}
                                                                >
                                                                    ★
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <span className="text-sm font-semibold">
                                                            {data.score}/5
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <p className="font-bold text-gray-900">{data.value}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pros and Cons */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                                <span className="text-lg">✓</span> Pros
                                            </h4>
                                            <ul className="space-y-2">
                                                {library.pros.map((pro, i) => (
                                                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                        <span className="text-green-500 mt-0.5">•</span>
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                                                <span className="text-lg">✗</span> Cons
                                            </h4>
                                            <ul className="space-y-2">
                                                {library.cons.map((con, i) => (
                                                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                        <span className="text-red-500 mt-0.5">•</span>
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final Verdict Section */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">🏆 Final Verdict</h2>

                        <div className="space-y-6">
                            {recommendations.map((rec, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{rec.category}</h3>
                                    <div className="mb-4">
                                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-lg font-bold mb-2">
                                            <span className="text-xl">👑</span>
                                            {rec.winner}
                                        </div>
                                        <p className="text-gray-600 ml-2">{rec.reason}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {rec.runners.map((runner, i) => (
                                            <div key={i} className="text-sm">
                                                <span className="font-semibold text-gray-700">{i + 2}.</span>{' '}
                                                <span className="font-semibold text-blue-600">{runner.name}</span> -{' '}
                                                <span className="text-gray-600">{runner.reason}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-white rounded-xl border-2 border-blue-200">
                            <h3 className="text-xl font-bold text-center mb-4">💡 Recommendation</h3>
                            <p className="text-center text-gray-700 leading-relaxed">
                                For <strong className="text-blue-600">B2B SaaS startups</strong>, we recommend{' '}
                                <strong className="text-blue-600">Mantine</strong> for the best developer experience with
                                modern design, or <strong className="text-gray-800">shadcn/ui</strong> if you want maximum
                                performance and control with Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-800 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="text-gray-400 mb-2">
                            Built with Laravel 12, React 18, Inertia.js, and Vite
                        </p>
                        <p className="text-sm text-gray-500">
                            Comparing shadcn/ui, Mantine UI, and Ant Design across real-world use cases
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
