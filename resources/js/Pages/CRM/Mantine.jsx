import { useState } from 'react';
import { Head } from '@inertiajs/react';
import '@mantine/core/styles.css';
import {
    MantineProvider,
    Container,
    Paper,
    Title,
    Text,
    Group,
    Stack,
    Avatar,
    Badge,
    Button,
    Tabs,
    Timeline,
    Card,
    Grid,
    TextInput,
    Textarea,
    Select,
    Modal,
    ActionIcon,
    Divider,
    ThemeIcon,
    Flex,
    Box,
    Menu,
} from '@mantine/core';
import {
    IconMail,
    IconPhone,
    IconBrandWhatsapp,
    IconBuilding,
    IconMapPin,
    IconCurrencyDollar,
    IconChecklist,
    IconNotes,
    IconStar,
    IconDots,
    IconEdit,
    IconTrash,
    IconPlus,
    IconSend,
    IconClock,
    IconCheck,
    IconAlertCircle,
    IconTrendingUp,
    IconUsers,
    IconCalendar,
} from '@tabler/icons-react';

export default function MantineCRM() {
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
        { label: 'Total Deals', value: '$145,000', icon: IconCurrencyDollar, color: 'green' },
        { label: 'Open Tasks', value: '8', icon: IconChecklist, color: 'blue' },
        { label: 'Meetings', value: '12', icon: IconCalendar, color: 'violet' },
        { label: 'Last Contact', value: '2 days ago', icon: IconClock, color: 'orange' },
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
            title: 'Meeting: Product Roadmap Discussion',
            time: '3 days ago',
            status: 'completed',
            color: 'violet',
        },
        {
            type: 'note',
            title: 'Note added: Interested in Enterprise plan',
            time: '5 days ago',
            status: 'info',
            color: 'gray',
        },
    ];

    const deals = [
        {
            name: 'Enterprise License Q1',
            value: '$85,000',
            stage: 'Negotiation',
            probability: 75,
            closeDate: '2025-12-30',
        },
        {
            name: 'Professional Services Package',
            value: '$45,000',
            stage: 'Proposal',
            probability: 60,
            closeDate: '2026-01-15',
        },
        {
            name: 'Training & Onboarding',
            value: '$15,000',
            stage: 'Closed Won',
            probability: 100,
            closeDate: '2025-11-15',
        },
    ];

    const tasks = [
        { title: 'Send contract for Q1 deal', due: 'Today', priority: 'high' },
        { title: 'Schedule demo for new features', due: 'Tomorrow', priority: 'medium' },
        { title: 'Follow up on proposal feedback', due: 'Dec 25', priority: 'high' },
        { title: 'Prepare quarterly business review', due: 'Dec 28', priority: 'low' },
    ];

    const communications = {
        emails: [
            {
                subject: 'Q4 Product Demo',
                preview: 'Hi Sarah, I wanted to follow up on our last conversation...',
                time: '2 hours ago',
                status: 'opened',
            },
            {
                subject: 'Enterprise Pricing Proposal',
                preview: 'Please find attached our customized pricing for your team...',
                time: '1 week ago',
                status: 'replied',
            },
        ],
        sms: [
            {
                message: 'Looking forward to our call this afternoon!',
                time: '1 day ago',
                direction: 'sent',
            },
            {
                message: 'Thanks! See you at 3pm.',
                time: '1 day ago',
                direction: 'received',
            },
        ],
        whatsapp: [
            {
                message: 'Hi Sarah! Quick question about the implementation timeline',
                time: '2 days ago',
                direction: 'sent',
            },
            {
                message: 'We are targeting end of January. Can we discuss details tomorrow?',
                time: '2 days ago',
                direction: 'received',
            },
        ],
    };

    return (
        <>
            <Head title="Contact Detail - Mantine CRM" />
            <MantineProvider>
                <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '2rem 1rem' }}>
                    <Container size="xl">
                        <Paper shadow="sm" p="xl" radius="md" style={{ marginBottom: '1.5rem' }}>
                            <Group justify="space-between">
                                <Group>
                                    <Avatar size="xl" radius="xl" color="blue">
                                        {contact.avatar}
                                    </Avatar>
                                    <div>
                                        <Group gap="xs">
                                            <Title order={2}>{contact.name}</Title>
                                            <Badge color="green" variant="light">
                                                {contact.status}
                                            </Badge>
                                            <Badge color="yellow" variant="filled" leftSection={<IconStar size={12} />}>
                                                Score: {contact.score}
                                            </Badge>
                                        </Group>
                                        <Text size="md" c="dimmed" mt={4}>
                                            {contact.position} at {contact.company}
                                        </Text>
                                        <Group gap="xs" mt="xs">
                                            {contact.tags.map((tag, i) => (
                                                <Badge key={i} size="sm" variant="outline">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </Group>
                                    </div>
                                </Group>
                                <Group>
                                    <Button
                                        leftSection={<IconMail size={16} />}
                                        variant="light"
                                        onClick={() => setEmailModalOpen(true)}
                                    >
                                        Email
                                    </Button>
                                    <Button
                                        leftSection={<IconPhone size={16} />}
                                        variant="light"
                                        color="green"
                                        onClick={() => setSmsModalOpen(true)}
                                    >
                                        SMS
                                    </Button>
                                    <Button
                                        leftSection={<IconBrandWhatsapp size={16} />}
                                        variant="light"
                                        color="teal"
                                        onClick={() => setWhatsappModalOpen(true)}
                                    >
                                        WhatsApp
                                    </Button>
                                    <Menu>
                                        <Menu.Target>
                                            <ActionIcon variant="light" size="lg">
                                                <IconDots size={20} />
                                            </ActionIcon>
                                        </Menu.Target>
                                        <Menu.Dropdown>
                                            <Menu.Item leftSection={<IconEdit size={16} />}>Edit Contact</Menu.Item>
                                            <Menu.Item leftSection={<IconTrash size={16} />} color="red">
                                                Delete Contact
                                            </Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>
                                </Group>
                            </Group>

                            <Divider my="md" />

                            <Grid>
                                <Grid.Col span={3}>
                                    <Text size="sm" c="dimmed">
                                        Email
                                    </Text>
                                    <Text size="sm">{contact.email}</Text>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Text size="sm" c="dimmed">
                                        Phone
                                    </Text>
                                    <Text size="sm">{contact.phone}</Text>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Text size="sm" c="dimmed">
                                        Company
                                    </Text>
                                    <Text size="sm">{contact.company}</Text>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Text size="sm" c="dimmed">
                                        Location
                                    </Text>
                                    <Text size="sm">{contact.location}</Text>
                                </Grid.Col>
                            </Grid>
                        </Paper>

                        <Grid gutter="md">
                            {stats.map((stat, index) => (
                                <Grid.Col key={index} span={3}>
                                    <Card shadow="sm" padding="lg" radius="md">
                                        <Group justify="space-between">
                                            <div>
                                                <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                                                    {stat.label}
                                                </Text>
                                                <Text size="xl" fw={700} mt="xs">
                                                    {stat.value}
                                                </Text>
                                            </div>
                                            <ThemeIcon size="xl" variant="light" color={stat.color} radius="md">
                                                <stat.icon size={24} />
                                            </ThemeIcon>
                                        </Group>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>

                        <Grid gutter="md" mt="md">
                            <Grid.Col span={8}>
                                <Paper shadow="sm" p="md" radius="md">
                                    <Tabs value={activeTab} onChange={setActiveTab}>
                                        <Tabs.List>
                                            <Tabs.Tab value="activity" leftSection={<IconClock size={16} />}>
                                                Activity
                                            </Tabs.Tab>
                                            <Tabs.Tab value="emails" leftSection={<IconMail size={16} />}>
                                                Emails
                                            </Tabs.Tab>
                                            <Tabs.Tab value="sms" leftSection={<IconPhone size={16} />}>
                                                SMS
                                            </Tabs.Tab>
                                            <Tabs.Tab value="whatsapp" leftSection={<IconBrandWhatsapp size={16} />}>
                                                WhatsApp
                                            </Tabs.Tab>
                                            <Tabs.Tab value="notes" leftSection={<IconNotes size={16} />}>
                                                Notes
                                            </Tabs.Tab>
                                        </Tabs.List>

                                        <Tabs.Panel value="activity" pt="md">
                                            <Timeline active={activities.length} bulletSize={24} lineWidth={2}>
                                                {activities.map((activity, index) => (
                                                    <Timeline.Item
                                                        key={index}
                                                        bullet={<IconCheck size={12} />}
                                                        title={activity.title}
                                                    >
                                                        <Text c="dimmed" size="sm">
                                                            {activity.time}
                                                        </Text>
                                                        <Badge size="xs" variant="light" color={activity.color} mt={4}>
                                                            {activity.status}
                                                        </Badge>
                                                    </Timeline.Item>
                                                ))}
                                            </Timeline>
                                        </Tabs.Panel>

                                        <Tabs.Panel value="emails" pt="md">
                                            <Stack gap="md">
                                                {communications.emails.map((email, index) => (
                                                    <Card key={index} padding="md" radius="md" withBorder>
                                                        <Group justify="space-between" mb="xs">
                                                            <Text fw={600}>{email.subject}</Text>
                                                            <Badge
                                                                size="sm"
                                                                variant="light"
                                                                color={email.status === 'opened' ? 'blue' : 'green'}
                                                            >
                                                                {email.status}
                                                            </Badge>
                                                        </Group>
                                                        <Text size="sm" c="dimmed" lineClamp={2}>
                                                            {email.preview}
                                                        </Text>
                                                        <Text size="xs" c="dimmed" mt="xs">
                                                            {email.time}
                                                        </Text>
                                                    </Card>
                                                ))}
                                            </Stack>
                                        </Tabs.Panel>

                                        <Tabs.Panel value="sms" pt="md">
                                            <Stack gap="md">
                                                {communications.sms.map((sms, index) => (
                                                    <Card
                                                        key={index}
                                                        padding="md"
                                                        radius="md"
                                                        style={{
                                                            marginLeft: sms.direction === 'sent' ? 'auto' : 0,
                                                            marginRight: sms.direction === 'received' ? 'auto' : 0,
                                                            maxWidth: '70%',
                                                            backgroundColor:
                                                                sms.direction === 'sent' ? '#e7f5ff' : '#f8f9fa',
                                                        }}
                                                    >
                                                        <Text size="sm">{sms.message}</Text>
                                                        <Text size="xs" c="dimmed" mt="xs">
                                                            {sms.time}
                                                        </Text>
                                                    </Card>
                                                ))}
                                            </Stack>
                                        </Tabs.Panel>

                                        <Tabs.Panel value="whatsapp" pt="md">
                                            <Stack gap="md">
                                                {communications.whatsapp.map((msg, index) => (
                                                    <Card
                                                        key={index}
                                                        padding="md"
                                                        radius="md"
                                                        style={{
                                                            marginLeft: msg.direction === 'sent' ? 'auto' : 0,
                                                            marginRight: msg.direction === 'received' ? 'auto' : 0,
                                                            maxWidth: '70%',
                                                            backgroundColor:
                                                                msg.direction === 'sent' ? '#d0f4de' : '#f8f9fa',
                                                        }}
                                                    >
                                                        <Text size="sm">{msg.message}</Text>
                                                        <Text size="xs" c="dimmed" mt="xs">
                                                            {msg.time}
                                                        </Text>
                                                    </Card>
                                                ))}
                                            </Stack>
                                        </Tabs.Panel>

                                        <Tabs.Panel value="notes" pt="md">
                                            <Stack gap="md">
                                                <Textarea
                                                    placeholder="Add a note..."
                                                    minRows={3}
                                                    rightSection={
                                                        <ActionIcon variant="filled" color="blue">
                                                            <IconPlus size={16} />
                                                        </ActionIcon>
                                                    }
                                                />
                                                <Card padding="md" radius="md" withBorder>
                                                    <Text size="sm">
                                                        Contact is very interested in Enterprise plan. Mentioned need for custom
                                                        integrations with their existing systems. Follow up next week.
                                                    </Text>
                                                    <Text size="xs" c="dimmed" mt="xs">
                                                        Added 5 days ago by John Doe
                                                    </Text>
                                                </Card>
                                            </Stack>
                                        </Tabs.Panel>
                                    </Tabs>
                                </Paper>
                            </Grid.Col>

                            <Grid.Col span={4}>
                                <Stack gap="md">
                                    <Paper shadow="sm" p="md" radius="md">
                                        <Group justify="space-between" mb="md">
                                            <Text fw={600}>Deals & Opportunities</Text>
                                            <ActionIcon variant="light" size="sm">
                                                <IconPlus size={16} />
                                            </ActionIcon>
                                        </Group>
                                        <Stack gap="md">
                                            {deals.map((deal, index) => (
                                                <Card key={index} padding="sm" radius="md" withBorder>
                                                    <Text size="sm" fw={600}>
                                                        {deal.name}
                                                    </Text>
                                                    <Group justify="space-between" mt="xs">
                                                        <Text size="lg" fw={700} c="green">
                                                            {deal.value}
                                                        </Text>
                                                        <Badge size="sm" variant="light">
                                                            {deal.probability}%
                                                        </Badge>
                                                    </Group>
                                                    <Group justify="space-between" mt="xs">
                                                        <Badge size="xs" variant="filled" color="blue">
                                                            {deal.stage}
                                                        </Badge>
                                                        <Text size="xs" c="dimmed">
                                                            Close: {deal.closeDate}
                                                        </Text>
                                                    </Group>
                                                </Card>
                                            ))}
                                        </Stack>
                                    </Paper>

                                    <Paper shadow="sm" p="md" radius="md">
                                        <Group justify="space-between" mb="md">
                                            <Text fw={600}>Tasks</Text>
                                            <ActionIcon variant="light" size="sm">
                                                <IconPlus size={16} />
                                            </ActionIcon>
                                        </Group>
                                        <Stack gap="xs">
                                            {tasks.map((task, index) => (
                                                <Card key={index} padding="sm" radius="md" withBorder>
                                                    <Group justify="space-between">
                                                        <Text size="sm">{task.title}</Text>
                                                        <Badge
                                                            size="xs"
                                                            color={
                                                                task.priority === 'high'
                                                                    ? 'red'
                                                                    : task.priority === 'medium'
                                                                      ? 'orange'
                                                                      : 'gray'
                                                            }
                                                        >
                                                            {task.priority}
                                                        </Badge>
                                                    </Group>
                                                    <Text size="xs" c="dimmed" mt={4}>
                                                        Due: {task.due}
                                                    </Text>
                                                </Card>
                                            ))}
                                        </Stack>
                                    </Paper>
                                </Stack>
                            </Grid.Col>
                        </Grid>

                        <Paper shadow="sm" p="md" radius="md" mt="md">
                            <Text ta="center" c="dimmed">
                                Built with <strong>Mantine UI</strong>
                            </Text>
                        </Paper>
                    </Container>
                </div>
            </MantineProvider>

            <Modal opened={emailModalOpen} onClose={() => setEmailModalOpen(false)} title="Compose Email" size="lg">
                <Stack>
                    <TextInput label="To" value={contact.email} disabled />
                    <TextInput label="Subject" placeholder="Enter email subject" />
                    <Textarea label="Message" placeholder="Type your message here..." minRows={6} />
                    <Group justify="flex-end">
                        <Button variant="light" onClick={() => setEmailModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button leftSection={<IconSend size={16} />}>Send Email</Button>
                    </Group>
                </Stack>
            </Modal>

            <Modal opened={smsModalOpen} onClose={() => setSmsModalOpen(false)} title="Send SMS" size="md">
                <Stack>
                    <TextInput label="To" value={contact.phone} disabled />
                    <Textarea label="Message" placeholder="Type your SMS message..." minRows={4} maxLength={160} />
                    <Text size="xs" c="dimmed">
                        160 characters remaining
                    </Text>
                    <Group justify="flex-end">
                        <Button variant="light" onClick={() => setSmsModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button leftSection={<IconSend size={16} />} color="green">
                            Send SMS
                        </Button>
                    </Group>
                </Stack>
            </Modal>

            <Modal
                opened={whatsappModalOpen}
                onClose={() => setWhatsappModalOpen(false)}
                title="Send WhatsApp Message"
                size="md"
            >
                <Stack>
                    <TextInput label="To" value={contact.phone} disabled />
                    <Textarea label="Message" placeholder="Type your WhatsApp message..." minRows={4} />
                    <Group justify="flex-end">
                        <Button variant="light" onClick={() => setWhatsappModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button leftSection={<IconSend size={16} />} color="teal">
                            Send WhatsApp
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </>
    );
}
