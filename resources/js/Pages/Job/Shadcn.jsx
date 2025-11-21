import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { Check, ArrowLeft } from 'lucide-react';

export default function ShadcnJobForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [salaryRange, setSalaryRange] = useState(true);
    const [formData, setFormData] = useState({
        jobTitle: 'Junior Sales Executive',
        workspaceType: 'remote',
        jobType: 'full-time',
        salaryType: 'monthly',
        currency: 'BDT',
        salaryMin: 15000,
        salaryMax: 15001,
        skills: ['cold-calling', 'communication', 'crm', 'lead-generation', 'sales-strategies'],
        expiresIn: '30',
        deadline: '2025-12-20',
        description: `About Lomeyo
Lomeyo LLC is a leading provider of professional services specializing in B2B SaaS solutions. We are dedicated to helping businesses streamline their operations and enhance productivity through innovative technology.

About the Role
We are looking for a motivated and enthusiastic Junior Sales Executive to join our dynamic sales team. This entry-level position is perfect for freshers who are eager to learn and grow in the sales domain. The ideal candidate will be responsible for cold outreach and lead warm-up activities to drive our sales efforts.

Responsibilities`,
    });

    const skillsData = [
        { value: 'cold-calling', label: 'Cold Calling' },
        { value: 'communication', label: 'Communication' },
        { value: 'crm', label: 'Customer Relationship Management' },
        { value: 'lead-generation', label: 'Lead Generation' },
        { value: 'sales-strategies', label: 'Sales Strategies' },
        { value: 'negotiation', label: 'Negotiation' },
        { value: 'presentation', label: 'Presentation' },
    ];

    const steps = [
        { title: 'Describe the Role', description: 'Step 1' },
        { title: 'Customize Apply Form', description: 'Step 2' },
        { title: 'Filter Spam Applicants', description: 'Step 3' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const toggleSkill = (skill) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter((s) => s !== skill)
                : [...prev.skills, skill],
        }));
    };

    return (
        <>
            <Head title="Update Job - shadcn/ui" />
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-5xl mx-auto">
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

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
                        <h1 className="text-3xl font-bold text-center mb-8">Update Job</h1>

                        {/* Stepper */}
                        <div className="mb-10">
                            <div className="flex items-center justify-between relative">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex-1 flex flex-col items-center relative">
                                        <button
                                            type="button"
                                            onClick={() => setActiveStep(index)}
                                            className={cn(
                                                'w-12 h-12 rounded-full flex items-center justify-center font-semibold mb-3 transition-all z-10 border-2',
                                                index < activeStep
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : index === activeStep
                                                    ? 'bg-blue-600 text-white border-blue-600 ring-4 ring-blue-100'
                                                    : 'bg-white text-gray-400 border-gray-300'
                                            )}
                                        >
                                            {index < activeStep ? <Check className="w-6 h-6" /> : index + 1}
                                        </button>
                                        <div className="text-center">
                                            <p className={cn(
                                                'text-sm font-medium',
                                                index <= activeStep ? 'text-gray-900' : 'text-gray-500'
                                            )}>
                                                {step.title}
                                            </p>
                                            <p className="text-xs text-gray-500">{step.description}</p>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div
                                                className={cn(
                                                    'absolute top-6 h-0.5 w-full',
                                                    index < activeStep ? 'bg-blue-600' : 'bg-gray-300'
                                                )}
                                                style={{
                                                    left: '50%',
                                                    width: '100%',
                                                    zIndex: 0,
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {activeStep === 0 && (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Job Information</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Craft the role! Provide detailed job specifics to attract the perfect candidate
                                        for your organization.
                                    </p>
                                </div>

                                {/* Job Title */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Job Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.jobTitle}
                                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Enter job title"
                                        required
                                    />
                                </div>

                                {/* Workspace, Job, Salary Type */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Workspace Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={formData.workspaceType}
                                            onChange={(e) => setFormData({ ...formData, workspaceType: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                                            required
                                        >
                                            <option value="remote">Remote</option>
                                            <option value="onsite">Onsite</option>
                                            <option value="hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Job Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={formData.jobType}
                                            onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                                            required
                                        >
                                            <option value="full-time">Full Time</option>
                                            <option value="part-time">Part Time</option>
                                            <option value="contract">Contract</option>
                                            <option value="internship">Internship</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Salary Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={formData.salaryType}
                                            onChange={(e) => setFormData({ ...formData, salaryType: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                                            required
                                        >
                                            <option value="monthly">Monthly</option>
                                            <option value="yearly">Yearly</option>
                                            <option value="hourly">Hourly</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Salary */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Salary <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setSalaryRange(!salaryRange)}
                                                className={cn(
                                                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                                                    salaryRange ? 'bg-blue-600' : 'bg-gray-300'
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                                                        salaryRange ? 'translate-x-6' : 'translate-x-1'
                                                    )}
                                                />
                                            </button>
                                            <span className="text-sm text-gray-700">Salary Range</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <select
                                            value={formData.currency}
                                            onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                                            className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                                        >
                                            <option value="BDT">BDT</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                        </select>
                                        <input
                                            type="number"
                                            placeholder="Minimum"
                                            value={formData.salaryMin}
                                            onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            min="0"
                                            required
                                        />
                                        {salaryRange && (
                                            <input
                                                type="number"
                                                placeholder="Maximum"
                                                value={formData.salaryMax}
                                                onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                min="0"
                                                required
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Skills <span className="text-red-500">*</span>
                                    </label>
                                    <p className="text-xs text-gray-500 mb-2">(Max 10 skills)</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skillsData.map((skill) => (
                                            <button
                                                key={skill.value}
                                                type="button"
                                                onClick={() => toggleSkill(skill.value)}
                                                className={cn(
                                                    'px-4 py-2 rounded-lg text-sm font-medium transition-all border',
                                                    formData.skills.includes(skill.value)
                                                        ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                                                )}
                                            >
                                                {skill.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        rows={12}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Enter job description"
                                        required
                                    />
                                    <p className="text-xs text-gray-500">
                                        Provide detailed information about the role, responsibilities, and requirements
                                    </p>
                                </div>

                                {/* Expires In and Deadline */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Expires in
                                        </label>
                                        <div className="space-y-2">
                                            {['10', '15', '20', '30'].map((days) => (
                                                <label
                                                    key={days}
                                                    className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-all"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="expiresIn"
                                                        value={days}
                                                        checked={formData.expiresIn === days}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, expiresIn: e.target.value })
                                                        }
                                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                    />
                                                    <span className="ml-3 text-sm text-gray-700">{days} days</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Deadline <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            value={formData.deadline}
                                            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            required
                                        />
                                        <p className="text-xs text-gray-500 mt-2">
                                            Set the application deadline for this position
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                    <button
                                        type="button"
                                        className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                                    >
                                        Cancel Job Post
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveStep(1)}
                                        className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow"
                                    >
                                        Update & Next
                                    </button>
                                </div>
                            </form>
                        )}

                        {activeStep === 1 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">Step 2: Customize Apply Form</p>
                                <button
                                    type="button"
                                    onClick={() => setActiveStep(0)}
                                    className="mt-4 px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    Back
                                </button>
                            </div>
                        )}

                        {activeStep === 2 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">Step 3: Filter Spam Applicants</p>
                                <button
                                    type="button"
                                    onClick={() => setActiveStep(1)}
                                    className="mt-4 px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    Back
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <p className="text-sm text-center text-gray-600">
                            Built with <strong>shadcn/ui</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
