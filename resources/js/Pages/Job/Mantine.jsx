import { useState } from 'react';
import { Head, Link as InertiaLink } from '@inertiajs/react';
import {
    MantineProvider,
    Container,
    Paper,
    Title,
    Text,
    TextInput,
    Select,
    Group,
    Stack,
    Button,
    Stepper,
    Switch,
    NumberInput,
    MultiSelect,
    Radio,
    Anchor,
    rem
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';

const skillsData = [
    { value: 'cold-calling', label: 'Cold Calling' },
    { value: 'communication', label: 'Communication' },
    { value: 'crm', label: 'Customer Relationship Management' },
    { value: 'lead-generation', label: 'Lead Generation' },
    { value: 'sales-strategies', label: 'Sales Strategies' },
    { value: 'negotiation', label: 'Negotiation' },
    { value: 'presentation', label: 'Presentation' },
];

export default function MantineJobForm() {
    const [active, setActive] = useState(0);
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
        deadline: new Date('2025-12-20'),
    });

    const editor = useEditor({
        extensions: [StarterKit, Link],
        content: `<h3>About Lomeyo</h3>
<p>Lomeyo LLC is a leading provider of professional services specializing in B2B SaaS solutions. We are dedicated to helping businesses streamline their operations and enhance productivity through innovative technology.</p>
<h3>About the Role</h3>
<p>We are looking for a motivated and enthusiastic <strong>Junior Sales Executive</strong> to join our dynamic sales team. This entry-level position is perfect for freshers who are eager to learn and grow in the sales domain. The ideal candidate will be responsible for cold outreach and lead warm-up activities to drive our sales efforts.</p>
<h3>Responsibilities</h3>`,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <Head title="Update Job - Mantine UI" />
            <MantineProvider>
                <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
                    <Container size="lg">
                        {/* Navigation */}
                        <Group mb="lg">
                            <InertiaLink href="/" style={{ textDecoration: 'none' }}>
                                <Anchor component="span" c="dimmed">
                                    ← Back to Home
                                </Anchor>
                            </InertiaLink>
                        </Group>

                        <Paper shadow="sm" p="xl" radius="md" style={{ marginBottom: '2rem' }}>
                            <Title order={2} mb="xl" ta="center">Update Job</Title>

                            <Stepper active={active} onStepClick={setActive} mb="xl">
                                <Stepper.Step label="Describe the Role" description="Step 1">
                                </Stepper.Step>
                                <Stepper.Step label="Customize Apply Form" description="Step 2">
                                </Stepper.Step>
                                <Stepper.Step label="Filter Spam Applicants" description="Step 3">
                                </Stepper.Step>
                            </Stepper>

                            {active === 0 && (
                                <form onSubmit={handleSubmit}>
                                    <Stack gap="lg">
                                        <div>
                                            <Text size="xl" fw={700} mb="xs">Job Information</Text>
                                            <Text size="sm" c="dimmed">
                                                Craft the role! Provide detailed job specifics to attract the perfect candidate for your organization.
                                            </Text>
                                        </div>

                                        <TextInput
                                            label="Job Title"
                                            placeholder="Enter job title"
                                            value={formData.jobTitle}
                                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                            required
                                            withAsterisk
                                        />

                                        <Group grow>
                                            <Select
                                                label="Workspace Type"
                                                placeholder="Select workspace type"
                                                value={formData.workspaceType}
                                                onChange={(value) => setFormData({ ...formData, workspaceType: value })}
                                                data={[
                                                    { value: 'remote', label: 'Remote' },
                                                    { value: 'onsite', label: 'Onsite' },
                                                    { value: 'hybrid', label: 'Hybrid' },
                                                ]}
                                                required
                                                withAsterisk
                                            />

                                            <Select
                                                label="Job Type"
                                                placeholder="Select job type"
                                                value={formData.jobType}
                                                onChange={(value) => setFormData({ ...formData, jobType: value })}
                                                data={[
                                                    { value: 'full-time', label: 'Full Time' },
                                                    { value: 'part-time', label: 'Part Time' },
                                                    { value: 'contract', label: 'Contract' },
                                                    { value: 'internship', label: 'Internship' },
                                                ]}
                                                required
                                                withAsterisk
                                            />

                                            <Select
                                                label="Salary Type"
                                                placeholder="Select salary type"
                                                value={formData.salaryType}
                                                onChange={(value) => setFormData({ ...formData, salaryType: value })}
                                                data={[
                                                    { value: 'monthly', label: 'Monthly' },
                                                    { value: 'yearly', label: 'Yearly' },
                                                    { value: 'hourly', label: 'Hourly' },
                                                ]}
                                                required
                                                withAsterisk
                                            />
                                        </Group>

                                        <div>
                                            <Group mb="xs">
                                                <Text size="sm" fw={500}>Salary <span style={{ color: 'red' }}>*</span></Text>
                                                <Switch
                                                    label="Salary Range"
                                                    checked={salaryRange}
                                                    onChange={(e) => setSalaryRange(e.currentTarget.checked)}
                                                    size="sm"
                                                />
                                            </Group>
                                            <Group>
                                                <Select
                                                    value={formData.currency}
                                                    onChange={(value) => setFormData({ ...formData, currency: value })}
                                                    data={[
                                                        { value: 'BDT', label: 'BDT' },
                                                        { value: 'USD', label: 'USD' },
                                                        { value: 'EUR', label: 'EUR' },
                                                        { value: 'GBP', label: 'GBP' },
                                                    ]}
                                                    style={{ width: '120px' }}
                                                />
                                                <NumberInput
                                                    placeholder="Minimum"
                                                    value={formData.salaryMin}
                                                    onChange={(value) => setFormData({ ...formData, salaryMin: value })}
                                                    min={0}
                                                    flex={1}
                                                />
                                                {salaryRange && (
                                                    <NumberInput
                                                        placeholder="Maximum"
                                                        value={formData.salaryMax}
                                                        onChange={(value) => setFormData({ ...formData, salaryMax: value })}
                                                        min={0}
                                                        flex={1}
                                                    />
                                                )}
                                            </Group>
                                        </div>

                                        <MultiSelect
                                            label="Skills"
                                            placeholder="Type or select skills"
                                            data={skillsData}
                                            value={formData.skills}
                                            onChange={(value) => setFormData({ ...formData, skills: value })}
                                            maxValues={10}
                                            searchable
                                            required
                                            withAsterisk
                                            description="(Max 10 skills)"
                                        />

                                        <div>
                                            <Text size="sm" fw={500} mb="xs">Description <span style={{ color: 'red' }}>*</span></Text>
                                            <RichTextEditor editor={editor}>
                                                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                                                    <RichTextEditor.ControlsGroup>
                                                        <RichTextEditor.Bold />
                                                        <RichTextEditor.Italic />
                                                        <RichTextEditor.Link />
                                                    </RichTextEditor.ControlsGroup>

                                                    <RichTextEditor.ControlsGroup>
                                                        <RichTextEditor.H1 />
                                                        <RichTextEditor.H2 />
                                                        <RichTextEditor.H3 />
                                                    </RichTextEditor.ControlsGroup>

                                                    <RichTextEditor.ControlsGroup>
                                                        <RichTextEditor.BulletList />
                                                        <RichTextEditor.OrderedList />
                                                    </RichTextEditor.ControlsGroup>
                                                </RichTextEditor.Toolbar>

                                                <RichTextEditor.Content />
                                            </RichTextEditor>
                                        </div>

                                        <Group grow align="flex-start">
                                            <div>
                                                <Text size="sm" fw={500} mb="xs">Expires in</Text>
                                                <Radio.Group value={formData.expiresIn} onChange={(value) => setFormData({ ...formData, expiresIn: value })}>
                                                    <Group mt="xs">
                                                        <Radio value="10" label="10 days" />
                                                        <Radio value="15" label="15 days" />
                                                        <Radio value="20" label="20 days" />
                                                        <Radio value="30" label="30 days" />
                                                    </Group>
                                                </Radio.Group>
                                            </div>

                                            <DatePickerInput
                                                label="Deadline"
                                                placeholder="Pick date"
                                                value={formData.deadline}
                                                onChange={(value) => setFormData({ ...formData, deadline: value })}
                                                required
                                                withAsterisk
                                            />
                                        </Group>

                                        <Group justify="space-between" mt="xl">
                                            <Button variant="subtle" color="gray">
                                                Cancel Job Post
                                            </Button>
                                            <Button type="submit" onClick={() => setActive(1)}>
                                                Update & Next
                                            </Button>
                                        </Group>
                                    </Stack>
                                </form>
                            )}
                        </Paper>

                        <Paper shadow="sm" p="md" radius="md">
                            <Text size="sm" ta="center" c="dimmed">
                                Built with <strong>Mantine UI</strong>
                            </Text>
                        </Paper>
                    </Container>
                </div>
            </MantineProvider>
        </>
    );
}
