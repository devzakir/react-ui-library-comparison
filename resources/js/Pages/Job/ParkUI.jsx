import { useState } from 'react';
import { Head } from '@inertiajs/react';
import * as RadioGroup from '@ark-ui/react/radio-group';
import * as TagsInput from '@ark-ui/react/tags-input';
import { css } from '../../../../styled-system/css';
import { container, stack, hstack, vstack } from '../../../../styled-system/patterns';

const skillsData = [
    'Cold Calling',
    'Communication',
    'Customer Relationship Management',
    'Lead Generation',
    'Sales Strategies',
    'Negotiation',
    'Presentation',
];

export default function ParkUIJobForm() {
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
        skills: ['Cold Calling', 'Communication', 'Customer Relationship Management', 'Lead Generation', 'Sales Strategies'],
        expiresIn: '30',
        deadline: '2025-12-20',
        description: `About Lomeyo
Lomeyo LLC is a leading provider of professional services specializing in B2B SaaS solutions. We are dedicated to helping businesses streamline their operations and enhance productivity through innovative technology.

About the Role
We are looking for a motivated and enthusiastic Junior Sales Executive to join our dynamic sales team. This entry-level position is perfect for freshers who are eager to learn and grow in the sales domain. The ideal candidate will be responsible for cold outreach and lead warm-up activities to drive our sales efforts.

Responsibilities`,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const steps = [
        { number: 1, title: 'Describe the Role' },
        { number: 2, title: 'Customize Apply Form' },
        { number: 3, title: 'Filter Spam Applicants' },
    ];

    return (
        <>
            <Head title="Update Job - Park UI (Panda CSS)" />
            <div className={css({ minH: '100vh', bg: 'gray.50', py: 8 })}>
                <div className={container({ maxW: '6xl', px: 4 })}>
                    <div className={css({ bg: 'white', rounded: 'lg', shadow: 'md', p: 8, mb: 4 })}>
                        <h2 className={css({ fontSize: '2xl', fontWeight: 'bold', textAlign: 'center', mb: 8 })}>
                            Update Job
                        </h2>

                        {/* Stepper */}
                        <div className={hstack({ justify: 'space-between', mb: 8, position: 'relative' })}>
                            {steps.map((step, index) => (
                                <div key={index} className={css({ flex: 1, display: 'flex', alignItems: 'center' })}>
                                    <div
                                        className={vstack({ align: 'center', cursor: 'pointer' })}
                                        onClick={() => setActiveStep(index)}
                                    >
                                        <div
                                            className={css({
                                                w: 10,
                                                h: 10,
                                                rounded: 'full',
                                                bg: activeStep >= index ? 'blue.500' : 'gray.200',
                                                color: activeStep >= index ? 'white' : 'gray.600',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                mb: 2,
                                            })}
                                        >
                                            {step.number}
                                        </div>
                                        <div className={css({ fontSize: 'sm', fontWeight: 'medium', textAlign: 'center', maxW: '120px' })}>
                                            {step.title}
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div
                                            className={css({
                                                flex: 1,
                                                h: '2px',
                                                bg: 'gray.200',
                                                position: 'absolute',
                                                left: '50%',
                                                top: 5,
                                                w: '100%',
                                                zIndex: -1,
                                            })}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {activeStep === 0 && (
                            <form onSubmit={handleSubmit}>
                                <div className={stack({ gap: 6 })}>
                                    {/* Section Header */}
                                    <div>
                                        <h3 className={css({ fontSize: 'xl', fontWeight: 'bold', mb: 2 })}>
                                            Job Information
                                        </h3>
                                        <p className={css({ fontSize: 'sm', color: 'gray.600' })}>
                                            Craft the role! Provide detailed job specifics to attract the perfect candidate for your organization.
                                        </p>
                                    </div>

                                    {/* Job Title */}
                                    <div>
                                        <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 2, display: 'block' })}>
                                            Job Title <span className={css({ color: 'red.500' })}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.jobTitle}
                                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                            className={css({
                                                w: 'full',
                                                px: 3,
                                                py: 2,
                                                border: '1px solid',
                                                borderColor: 'gray.300',
                                                rounded: 'md',
                                                fontSize: 'sm',
                                                _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                            })}
                                            required
                                        />
                                    </div>

                                    {/* 3 Column Row */}
                                    <div className={css({ display: 'grid', gridTemplateColumns: 3, gap: 4 })}>
                                        <div>
                                            <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 2, display: 'block' })}>
                                                Workspace Type <span className={css({ color: 'red.500' })}>*</span>
                                            </label>
                                            <select
                                                value={formData.workspaceType}
                                                onChange={(e) => setFormData({ ...formData, workspaceType: e.target.value })}
                                                className={css({
                                                    w: 'full',
                                                    px: 3,
                                                    py: 2,
                                                    border: '1px solid',
                                                    borderColor: 'gray.300',
                                                    rounded: 'md',
                                                    fontSize: 'sm',
                                                    bg: 'white',
                                                    _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                                })}
                                                required
                                            >
                                                <option value="remote">Remote</option>
                                                <option value="onsite">Onsite</option>
                                                <option value="hybrid">Hybrid</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 2, display: 'block' })}>
                                                Job Type <span className={css({ color: 'red.500' })}>*</span>
                                            </label>
                                            <select
                                                value={formData.jobType}
                                                onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                                                className={css({
                                                    w: 'full',
                                                    px: 3,
                                                    py: 2,
                                                    border: '1px solid',
                                                    borderColor: 'gray.300',
                                                    rounded: 'md',
                                                    fontSize: 'sm',
                                                    bg: 'white',
                                                    _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                                })}
                                                required
                                            >
                                                <option value="full-time">Full Time</option>
                                                <option value="part-time">Part Time</option>
                                                <option value="contract">Contract</option>
                                                <option value="internship">Internship</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 2, display: 'block' })}>
                                                Salary Type <span className={css({ color: 'red.500' })}>*</span>
                                            </label>
                                            <select
                                                value={formData.salaryType}
                                                onChange={(e) => setFormData({ ...formData, salaryType: e.target.value })}
                                                className={css({
                                                    w: 'full',
                                                    px: 3,
                                                    py: 2,
                                                    border: '1px solid',
                                                    borderColor: 'gray.300',
                                                    rounded: 'md',
                                                    fontSize: 'sm',
                                                    bg: 'white',
                                                    _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                                })}
                                                required
                                            >
                                                <option value="monthly">Monthly</option>
                                                <option value="yearly">Yearly</option>
                                                <option value="hourly">Hourly</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Salary */}
                                    <div>
                                        <div className={hstack({ justify: 'space-between', mb: 2 })}>
                                            <label className={css({ fontSize: 'sm', fontWeight: 'medium' })}>
                                                Salary <span className={css({ color: 'red.500' })}>*</span>
                                            </label>
                                            <label className={hstack({ gap: 2, fontSize: 'sm', cursor: 'pointer' })}>
                                                <input
                                                    type="checkbox"
                                                    checked={salaryRange}
                                                    onChange={(e) => setSalaryRange(e.target.checked)}
                                                    className={css({ cursor: 'pointer' })}
                                                />
                                                Salary Range
                                            </label>
                                        </div>
                                        <div className={hstack({ gap: 3 })}>
                                            <select
                                                value={formData.currency}
                                                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                                                className={css({
                                                    w: '120px',
                                                    px: 3,
                                                    py: 2,
                                                    border: '1px solid',
                                                    borderColor: 'gray.300',
                                                    rounded: 'md',
                                                    fontSize: 'sm',
                                                    bg: 'white',
                                                    _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                                })}
                                            >
                                                <option value="BDT">BDT</option>
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                                <option value="GBP">GBP</option>
                                            </select>
                                            <input
                                                type="number"
                                                value={formData.salaryMin}
                                                onChange={(e) => setFormData({ ...formData, salaryMin: Number(e.target.value) })}
                                                placeholder="Minimum"
                                                className={css({
                                                    flex: 1,
                                                    px: 3,
                                                    py: 2,
                                                    border: '1px solid',
                                                    borderColor: 'gray.300',
                                                    rounded: 'md',
                                                    fontSize: 'sm',
                                                    _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                                })}
                                            />
                                            {salaryRange && (
                                                <input
                                                    type="number"
                                                    value={formData.salaryMax}
                                                    onChange={(e) => setFormData({ ...formData, salaryMax: Number(e.target.value) })}
                                                    placeholder="Maximum"
                                                    className={css({
                                                        flex: 1,
                                                        px: 3,
                                                        py: 2,
                                                        border: '1px solid',
                                                        borderColor: 'gray.300',
                                                        rounded: 'md',
                                                        fontSize: 'sm',
                                                        _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                                    })}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Skills with TagsInput */}
                                    <div>
                                        <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 2, display: 'block' })}>
                                            Skills <span className={css({ color: 'red.500' })}>*</span>
                                        </label>
                                        <p className={css({ fontSize: 'xs', color: 'gray.600', mb: 2 })}>
                                            (Max 10 skills)
                                        </p>
                                        <TagsInput.Root
                                            value={formData.skills}
                                            onValueChange={(details) => {
                                                if (details.value.length <= 10) {
                                                    setFormData({ ...formData, skills: details.value });
                                                }
                                            }}
                                            max={10}
                                        >
                                            <TagsInput.Control className={css({ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2, border: '1px solid', borderColor: 'gray.300', rounded: 'md' })}>
                                                {formData.skills.map((skill, index) => (
                                                    <TagsInput.Item
                                                        key={index}
                                                        index={index}
                                                        value={skill}
                                                    >
                                                        <TagsInput.ItemPreview
                                                            className={css({
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: 2,
                                                                px: 3,
                                                                py: 1,
                                                                bg: 'blue.500',
                                                                color: 'white',
                                                                rounded: 'full',
                                                                fontSize: 'sm',
                                                            })}
                                                        >
                                                            <TagsInput.ItemText>{skill}</TagsInput.ItemText>
                                                            <TagsInput.ItemDeleteTrigger
                                                                className={css({
                                                                    cursor: 'pointer',
                                                                    fontSize: 'lg',
                                                                    _hover: { opacity: 0.8 },
                                                                })}
                                                            >
                                                                ×
                                                            </TagsInput.ItemDeleteTrigger>
                                                        </TagsInput.ItemPreview>
                                                        <TagsInput.ItemInput />
                                                    </TagsInput.Item>
                                                ))}
                                                <TagsInput.Input
                                                    placeholder={formData.skills.length === 0 ? 'Type or select skills' : ''}
                                                    className={css({
                                                        flex: 1,
                                                        minW: '120px',
                                                        px: 2,
                                                        py: 1,
                                                        outline: 'none',
                                                        fontSize: 'sm',
                                                    })}
                                                />
                                            </TagsInput.Control>
                                        </TagsInput.Root>
                                        <select
                                            onChange={(e) => {
                                                if (e.target.value && !formData.skills.includes(e.target.value) && formData.skills.length < 10) {
                                                    setFormData({ ...formData, skills: [...formData.skills, e.target.value] });
                                                    e.target.value = '';
                                                }
                                            }}
                                            className={css({
                                                w: 'full',
                                                px: 3,
                                                py: 2,
                                                mt: 2,
                                                border: '1px solid',
                                                borderColor: 'gray.300',
                                                rounded: 'md',
                                                fontSize: 'sm',
                                                bg: 'white',
                                                _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                            })}
                                        >
                                            <option value="">Or select from list</option>
                                            {skillsData
                                                .filter((skill) => !formData.skills.includes(skill))
                                                .map((skill) => (
                                                    <option key={skill} value={skill}>
                                                        {skill}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 2, display: 'block' })}>
                                            Description <span className={css({ color: 'red.500' })}>*</span>
                                        </label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows={10}
                                            className={css({
                                                w: 'full',
                                                px: 3,
                                                py: 2,
                                                border: '1px solid',
                                                borderColor: 'gray.300',
                                                rounded: 'md',
                                                fontSize: 'sm',
                                                fontFamily: 'inherit',
                                                resize: 'vertical',
                                                _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                            })}
                                            required
                                        />
                                    </div>

                                    {/* Expires & Deadline */}
                                    <div className={css({ display: 'grid', gridTemplateColumns: 2, gap: 8 })}>
                                        <div>
                                            <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 3, display: 'block' })}>
                                                Expires in
                                            </label>
                                            <RadioGroup.Root
                                                value={formData.expiresIn}
                                                onValueChange={(details) => setFormData({ ...formData, expiresIn: details.value })}
                                            >
                                                <div className={stack({ gap: 3 })}>
                                                    {['10', '15', '20', '30'].map((value) => (
                                                        <RadioGroup.Item key={value} value={value} className={hstack({ gap: 2, cursor: 'pointer' })}>
                                                            <RadioGroup.ItemControl className={css({ cursor: 'pointer' })} />
                                                            <RadioGroup.ItemText className={css({ fontSize: 'sm' })}>
                                                                {value} days
                                                            </RadioGroup.ItemText>
                                                        </RadioGroup.Item>
                                                    ))}
                                                </div>
                                            </RadioGroup.Root>
                                        </div>

                                        <div>
                                            <label className={css({ fontSize: 'sm', fontWeight: 'medium', mb: 2, display: 'block' })}>
                                                Deadline <span className={css({ color: 'red.500' })}>*</span>
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.deadline}
                                                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                                className={css({
                                                    w: 'full',
                                                    px: 3,
                                                    py: 2,
                                                    border: '1px solid',
                                                    borderColor: 'gray.300',
                                                    rounded: 'md',
                                                    fontSize: 'sm',
                                                    _focus: { outline: 'none', borderColor: 'blue.500', ring: 2, ringColor: 'blue.200' },
                                                })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className={hstack({ justify: 'space-between', mt: 6 })}>
                                        <button
                                            type="button"
                                            className={css({
                                                px: 6,
                                                py: 2,
                                                bg: 'transparent',
                                                color: 'gray.600',
                                                border: 'none',
                                                rounded: 'md',
                                                fontSize: 'sm',
                                                fontWeight: 'medium',
                                                cursor: 'pointer',
                                                _hover: { bg: 'gray.100' },
                                            })}
                                        >
                                            Cancel Job Post
                                        </button>
                                        <button
                                            type="submit"
                                            onClick={() => setActiveStep(1)}
                                            className={css({
                                                px: 6,
                                                py: 2,
                                                bg: 'blue.500',
                                                color: 'white',
                                                border: 'none',
                                                rounded: 'md',
                                                fontSize: 'sm',
                                                fontWeight: 'medium',
                                                cursor: 'pointer',
                                                _hover: { bg: 'blue.600' },
                                            })}
                                        >
                                            Update & Next
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className={css({ bg: 'white', rounded: 'lg', shadow: 'md', p: 4 })}>
                        <p className={css({ fontSize: 'sm', textAlign: 'center', color: 'gray.600', m: 0 })}>
                            Built with <strong>Park UI (Ark UI + Panda CSS)</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
