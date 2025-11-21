import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ConfigProvider,
    Layout,
    Card,
    Avatar,
    Badge,
    Tag,
    Button,
    Space,
    Tabs,
    Timeline,
    Row,
    Col,
    Typography,
    Statistic,
    Dropdown,
    Modal,
    Input,
    Form,
    Divider,
    List,
    Progress,
    Empty,
} from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    WhatsAppOutlined,
    ArrowLeftOutlined,
    EnvironmentOutlined,
    DollarOutlined,
    CheckCircleOutlined,
    StarOutlined,
    MoreOutlined,
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
    SendOutlined,
    ClockCircleOutlined,
    BankOutlined,
    CalendarOutlined,
    UserOutlined,
    TrophyOutlined,
    RiseOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

export default function AntDesignCRM() {
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [smsModalOpen, setSmsModalOpen] = useState(false);
    const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
    const [form] = Form.useForm();

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
        {
            title: 'Total Deals',
            value: '$145,000',
            prefix: <DollarOutlined style={{ color: '#52c41a' }} />,
        },
        {
            title: 'Open Tasks',
            value: 8,
            prefix: <CheckCircleOutlined style={{ color: '#1890ff' }} />,
        },
        {
            title: 'Meetings',
            value: 12,
            prefix: <CalendarOutlined style={{ color: '#722ed1' }} />,
        },
        {
            title: 'Last Contact',
            value: '2 days ago',
            prefix: <ClockCircleOutlined style={{ color: '#fa8c16' }} />,
        },
    ];

    const activities = [
        {
            color: 'blue',
            dot: <MailOutlined />,
            children: (
                <>
                    <Text strong>Email sent: Q4 Product Demo</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        2 hours ago
                    </Text>
                    <br />
                    <Tag color="blue" style={{ marginTop: 4 }}>
                        opened
                    </Tag>
                </>
            ),
        },
        {
            color: 'green',
            dot: <PhoneOutlined />,
            children: (
                <>
                    <Text strong>Phone call: 25 minutes</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        1 day ago
                    </Text>
                    <br />
                    <Tag color="green" style={{ marginTop: 4 }}>
                        completed
                    </Tag>
                </>
            ),
        },
        {
            color: 'cyan',
            dot: <WhatsAppOutlined />,
            children: (
                <>
                    <Text strong>WhatsApp message sent</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        2 days ago
                    </Text>
                    <br />
                    <Tag color="cyan" style={{ marginTop: 4 }}>
                        replied
                    </Tag>
                </>
            ),
        },
        {
            color: 'purple',
            dot: <CalendarOutlined />,
            children: (
                <>
                    <Text strong>Meeting: Product Roadmap Discussion</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        3 days ago
                    </Text>
                    <br />
                    <Tag color="purple" style={{ marginTop: 4 }}>
                        completed
                    </Tag>
                </>
            ),
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

    const menuItems = [
        {
            key: 'edit',
            label: 'Edit Contact',
            icon: <EditOutlined />,
        },
        {
            key: 'delete',
            label: 'Delete Contact',
            icon: <DeleteOutlined />,
            danger: true,
        },
    ];

    const tabItems = [
        {
            key: 'activity',
            label: (
                <span>
                    <ClockCircleOutlined /> Activity
                </span>
            ),
            children: (
                <div style={{ padding: '16px 0' }}>
                    <Timeline items={activities} />
                </div>
            ),
        },
        {
            key: 'emails',
            label: (
                <span>
                    <MailOutlined /> Emails
                </span>
            ),
            children: (
                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    {communications.emails.map((email, index) => (
                        <Card key={index} size="small">
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                                    <Text strong>{email.subject}</Text>
                                    <Badge
                                        status={email.status === 'opened' ? 'processing' : 'success'}
                                        text={email.status}
                                    />
                                </Space>
                                <Text type="secondary" ellipsis>
                                    {email.preview}
                                </Text>
                                <Text type="secondary" style={{ fontSize: '12px' }}>
                                    {email.time}
                                </Text>
                            </Space>
                        </Card>
                    ))}
                </Space>
            ),
        },
        {
            key: 'sms',
            label: (
                <span>
                    <PhoneOutlined /> SMS
                </span>
            ),
            children: (
                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    {communications.sms.map((sms, index) => (
                        <Card
                            key={index}
                            size="small"
                            style={{
                                marginLeft: sms.direction === 'sent' ? 'auto' : 0,
                                marginRight: sms.direction === 'received' ? 'auto' : 0,
                                maxWidth: '70%',
                                backgroundColor: sms.direction === 'sent' ? '#e6f7ff' : '#f5f5f5',
                            }}
                        >
                            <Text>{sms.message}</Text>
                            <br />
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                {sms.time}
                            </Text>
                        </Card>
                    ))}
                </Space>
            ),
        },
        {
            key: 'whatsapp',
            label: (
                <span>
                    <WhatsAppOutlined /> WhatsApp
                </span>
            ),
            children: (
                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    {communications.whatsapp.map((msg, index) => (
                        <Card
                            key={index}
                            size="small"
                            style={{
                                marginLeft: msg.direction === 'sent' ? 'auto' : 0,
                                marginRight: msg.direction === 'received' ? 'auto' : 0,
                                maxWidth: '70%',
                                backgroundColor: msg.direction === 'sent' ? '#d9f7be' : '#f5f5f5',
                            }}
                        >
                            <Text>{msg.message}</Text>
                            <br />
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                {msg.time}
                            </Text>
                        </Card>
                    ))}
                </Space>
            ),
        },
        {
            key: 'notes',
            label: (
                <span>
                    <EditOutlined /> Notes
                </span>
            ),
            children: (
                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    <Input.Group compact>
                        <TextArea rows={3} placeholder="Add a note..." style={{ width: 'calc(100% - 40px)' }} />
                        <Button type="primary" icon={<PlusOutlined />} style={{ height: '76px' }} />
                    </Input.Group>
                    <Card size="small">
                        <Text>
                            Contact is very interested in Enterprise plan. Mentioned need for custom integrations
                            with their existing systems. Follow up next week.
                        </Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: '12px', marginTop: 8 }}>
                            Added 5 days ago by John Doe
                        </Text>
                    </Card>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Head title="Contact Detail - Ant Design CRM" />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1890ff',
                        borderRadius: 8,
                    },
                }}
            >
                <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
                    <Content style={{ padding: '24px 16px' }}>
                        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                            {/* Navigation */}
                            <div style={{ marginBottom: 16 }}>
                                <Link href="/" style={{ textDecoration: 'none' }}>
                                    <Button type="text" icon={<ArrowLeftOutlined />}>
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>

                            <Card style={{ marginBottom: 16 }}>
                                <Row justify="space-between" align="middle">
                                    <Col>
                                        <Space size="large">
                                            <Avatar size={80} style={{ backgroundColor: '#1890ff' }}>
                                                {contact.avatar}
                                            </Avatar>
                                            <div>
                                                <Space>
                                                    <Title level={2} style={{ margin: 0 }}>
                                                        {contact.name}
                                                    </Title>
                                                    <Badge status="success" text={contact.status} />
                                                    <Tag icon={<StarOutlined />} color="gold">
                                                        Score: {contact.score}
                                                    </Tag>
                                                </Space>
                                                <Text type="secondary" style={{ fontSize: '16px' }}>
                                                    {contact.position} at {contact.company}
                                                </Text>
                                                <br />
                                                <Space style={{ marginTop: 8 }}>
                                                    {contact.tags.map((tag, i) => (
                                                        <Tag key={i}>{tag}</Tag>
                                                    ))}
                                                </Space>
                                            </div>
                                        </Space>
                                    </Col>
                                    <Col>
                                        <Space>
                                            <Button
                                                type="primary"
                                                icon={<MailOutlined />}
                                                onClick={() => setEmailModalOpen(true)}
                                            >
                                                Email
                                            </Button>
                                            <Button
                                                icon={<PhoneOutlined />}
                                                style={{ borderColor: '#52c41a', color: '#52c41a' }}
                                                onClick={() => setSmsModalOpen(true)}
                                            >
                                                SMS
                                            </Button>
                                            <Button
                                                icon={<WhatsAppOutlined />}
                                                style={{ borderColor: '#13c2c2', color: '#13c2c2' }}
                                                onClick={() => setWhatsappModalOpen(true)}
                                            >
                                                WhatsApp
                                            </Button>
                                            <Dropdown menu={{ items: menuItems }}>
                                                <Button icon={<MoreOutlined />} />
                                            </Dropdown>
                                        </Space>
                                    </Col>
                                </Row>

                                <Divider />

                                <Row gutter={16}>
                                    <Col span={6}>
                                        <Text type="secondary">Email</Text>
                                        <br />
                                        <Text>{contact.email}</Text>
                                    </Col>
                                    <Col span={6}>
                                        <Text type="secondary">Phone</Text>
                                        <br />
                                        <Text>{contact.phone}</Text>
                                    </Col>
                                    <Col span={6}>
                                        <Text type="secondary">Company</Text>
                                        <br />
                                        <Text>{contact.company}</Text>
                                    </Col>
                                    <Col span={6}>
                                        <Text type="secondary">Location</Text>
                                        <br />
                                        <Text>{contact.location}</Text>
                                    </Col>
                                </Row>
                            </Card>

                            <Row gutter={16} style={{ marginBottom: 16 }}>
                                {stats.map((stat, index) => (
                                    <Col key={index} span={6}>
                                        <Card>
                                            <Statistic
                                                title={stat.title}
                                                value={stat.value}
                                                prefix={stat.prefix}
                                                valueStyle={{ fontSize: '24px' }}
                                            />
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                            <Row gutter={16}>
                                <Col span={16}>
                                    <Card>
                                        <Tabs items={tabItems} />
                                    </Card>
                                </Col>

                                <Col span={8}>
                                    <Space direction="vertical" style={{ width: '100%' }} size="middle">
                                        <Card
                                            title="Deals & Opportunities"
                                            extra={<Button type="link" icon={<PlusOutlined />} size="small" />}
                                        >
                                            <Space direction="vertical" style={{ width: '100%' }} size="middle">
                                                {deals.map((deal, index) => (
                                                    <Card key={index} size="small" type="inner">
                                                        <Text strong style={{ fontSize: '14px' }}>
                                                            {deal.name}
                                                        </Text>
                                                        <br />
                                                        <Space style={{ width: '100%', justifyContent: 'space-between', marginTop: 8 }}>
                                                            <Text strong style={{ fontSize: '18px', color: '#52c41a' }}>
                                                                {deal.value}
                                                            </Text>
                                                            <Tag color="blue">{deal.probability}%</Tag>
                                                        </Space>
                                                        <Progress
                                                            percent={deal.probability}
                                                            size="small"
                                                            showInfo={false}
                                                            style={{ marginTop: 8 }}
                                                        />
                                                        <Space style={{ width: '100%', justifyContent: 'space-between', marginTop: 8 }}>
                                                            <Tag color="processing">{deal.stage}</Tag>
                                                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                                                Close: {deal.closeDate}
                                                            </Text>
                                                        </Space>
                                                    </Card>
                                                ))}
                                            </Space>
                                        </Card>

                                        <Card
                                            title="Tasks"
                                            extra={<Button type="link" icon={<PlusOutlined />} size="small" />}
                                        >
                                            <List
                                                size="small"
                                                dataSource={tasks}
                                                renderItem={(task) => (
                                                    <List.Item>
                                                        <Space direction="vertical" style={{ width: '100%' }}>
                                                            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                                                                <Text>{task.title}</Text>
                                                                <Tag
                                                                    color={
                                                                        task.priority === 'high'
                                                                            ? 'red'
                                                                            : task.priority === 'medium'
                                                                              ? 'orange'
                                                                              : 'default'
                                                                    }
                                                                >
                                                                    {task.priority}
                                                                </Tag>
                                                            </Space>
                                                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                                                Due: {task.due}
                                                            </Text>
                                                        </Space>
                                                    </List.Item>
                                                )}
                                            />
                                        </Card>
                                    </Space>
                                </Col>
                            </Row>

                            <Card style={{ marginTop: 16 }}>
                                <Text style={{ textAlign: 'center', display: 'block' }}>
                                    Built with <strong>Ant Design v5</strong>
                                </Text>
                            </Card>
                        </div>
                    </Content>
                </Layout>
            </ConfigProvider>

            <Modal
                title="Compose Email"
                open={emailModalOpen}
                onCancel={() => setEmailModalOpen(false)}
                footer={[
                    <Button key="cancel" onClick={() => setEmailModalOpen(false)}>
                        Cancel
                    </Button>,
                    <Button key="send" type="primary" icon={<SendOutlined />}>
                        Send Email
                    </Button>,
                ]}
                width={600}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="To" name="to">
                        <Input value={contact.email} disabled />
                    </Form.Item>
                    <Form.Item label="Subject" name="subject">
                        <Input placeholder="Enter email subject" />
                    </Form.Item>
                    <Form.Item label="Message" name="message">
                        <TextArea rows={6} placeholder="Type your message here..." />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Send SMS"
                open={smsModalOpen}
                onCancel={() => setSmsModalOpen(false)}
                footer={[
                    <Button key="cancel" onClick={() => setSmsModalOpen(false)}>
                        Cancel
                    </Button>,
                    <Button key="send" type="primary" icon={<SendOutlined />}>
                        Send SMS
                    </Button>,
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="To" name="to">
                        <Input value={contact.phone} disabled />
                    </Form.Item>
                    <Form.Item label="Message" name="message">
                        <TextArea rows={4} placeholder="Type your SMS message..." maxLength={160} showCount />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Send WhatsApp Message"
                open={whatsappModalOpen}
                onCancel={() => setWhatsappModalOpen(false)}
                footer={[
                    <Button key="cancel" onClick={() => setWhatsappModalOpen(false)}>
                        Cancel
                    </Button>,
                    <Button key="send" type="primary" icon={<SendOutlined />}>
                        Send WhatsApp
                    </Button>,
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="To" name="to">
                        <Input value={contact.phone} disabled />
                    </Form.Item>
                    <Form.Item label="Message" name="message">
                        <TextArea rows={4} placeholder="Type your WhatsApp message..." />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
