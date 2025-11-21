import { useState } from 'react';
import { Head } from '@inertiajs/react';
import {
    ConfigProvider,
    Form,
    Input,
    Select,
    InputNumber,
    DatePicker,
    Radio,
    Switch,
    Button,
    Steps,
    Card,
    Typography,
    Space,
    Row,
    Col,
} from 'antd';
import dayjs from 'dayjs';
import 'antd/dist/reset.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

const skillsData = [
    { value: 'cold-calling', label: 'Cold Calling' },
    { value: 'communication', label: 'Communication' },
    { value: 'crm', label: 'Customer Relationship Management' },
    { value: 'lead-generation', label: 'Lead Generation' },
    { value: 'sales-strategies', label: 'Sales Strategies' },
    { value: 'negotiation', label: 'Negotiation' },
    { value: 'presentation', label: 'Presentation' },
];

export default function AntDesignJobForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [salaryRange, setSalaryRange] = useState(true);
    const [form] = Form.useForm();

    const initialValues = {
        jobTitle: 'Junior Sales Executive',
        workspaceType: 'remote',
        jobType: 'full-time',
        salaryType: 'monthly',
        currency: 'BDT',
        salaryMin: 15000,
        salaryMax: 15001,
        skills: ['cold-calling', 'communication', 'crm', 'lead-generation', 'sales-strategies'],
        expiresIn: '30',
        deadline: dayjs('2025-12-20'),
        description: `About Lomeyo
Lomeyo LLC is a leading provider of professional services specializing in B2B SaaS solutions. We are dedicated to helping businesses streamline their operations and enhance productivity through innovative technology.

About the Role
We are looking for a motivated and enthusiastic Junior Sales Executive to join our dynamic sales team. This entry-level position is perfect for freshers who are eager to learn and grow in the sales domain. The ideal candidate will be responsible for cold outreach and lead warm-up activities to drive our sales efforts.

Responsibilities`,
    };

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
    };

    const steps = [
        { title: 'Describe the Role', description: 'Step 1' },
        { title: 'Customize Apply Form', description: 'Step 2' },
        { title: 'Filter Spam Applicants', description: 'Step 3' },
    ];

    return (
        <>
            <Head title="Update Job - Ant Design" />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1890ff',
                        borderRadius: 6,
                    },
                }}
            >
                <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem 1rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <Card style={{ marginBottom: '1.5rem' }}>
                            <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                Update Job
                            </Title>

                            <Steps current={activeStep} items={steps} style={{ marginBottom: '2rem' }} />

                            {activeStep === 0 && (
                                <Form
                                    form={form}
                                    layout="vertical"
                                    initialValues={initialValues}
                                    onFinish={handleSubmit}
                                >
                                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                                        <div>
                                            <Title level={4}>Job Information</Title>
                                            <Text type="secondary">
                                                Craft the role! Provide detailed job specifics to attract the perfect candidate for your organization.
                                            </Text>
                                        </div>

                                        <Form.Item
                                            label="Job Title"
                                            name="jobTitle"
                                            rules={[{ required: true, message: 'Please input job title!' }]}
                                        >
                                            <Input placeholder="Enter job title" size="large" />
                                        </Form.Item>

                                        <Row gutter={16}>
                                            <Col xs={24} md={8}>
                                                <Form.Item
                                                    label="Workspace Type"
                                                    name="workspaceType"
                                                    rules={[{ required: true }]}
                                                >
                                                    <Select size="large">
                                                        <Select.Option value="remote">Remote</Select.Option>
                                                        <Select.Option value="onsite">Onsite</Select.Option>
                                                        <Select.Option value="hybrid">Hybrid</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={8}>
                                                <Form.Item
                                                    label="Job Type"
                                                    name="jobType"
                                                    rules={[{ required: true }]}
                                                >
                                                    <Select size="large">
                                                        <Select.Option value="full-time">Full Time</Select.Option>
                                                        <Select.Option value="part-time">Part Time</Select.Option>
                                                        <Select.Option value="contract">Contract</Select.Option>
                                                        <Select.Option value="internship">Internship</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={8}>
                                                <Form.Item
                                                    label="Salary Type"
                                                    name="salaryType"
                                                    rules={[{ required: true }]}
                                                >
                                                    <Select size="large">
                                                        <Select.Option value="monthly">Monthly</Select.Option>
                                                        <Select.Option value="yearly">Yearly</Select.Option>
                                                        <Select.Option value="hourly">Hourly</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                                <label style={{ fontWeight: 500 }}>
                                                    Salary <span style={{ color: '#ff4d4f' }}>*</span>
                                                </label>
                                                <Space>
                                                    <Switch checked={salaryRange} onChange={setSalaryRange} />
                                                    <Text>Salary Range</Text>
                                                </Space>
                                            </div>
                                            <Space.Compact style={{ width: '100%' }}>
                                                <Form.Item name="currency" noStyle>
                                                    <Select style={{ width: '120px' }} size="large">
                                                        <Select.Option value="BDT">BDT</Select.Option>
                                                        <Select.Option value="USD">USD</Select.Option>
                                                        <Select.Option value="EUR">EUR</Select.Option>
                                                        <Select.Option value="GBP">GBP</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item name="salaryMin" noStyle>
                                                    <InputNumber
                                                        placeholder="Minimum"
                                                        style={{ flex: 1 }}
                                                        size="large"
                                                        min={0}
                                                    />
                                                </Form.Item>
                                                {salaryRange && (
                                                    <Form.Item name="salaryMax" noStyle>
                                                        <InputNumber
                                                            placeholder="Maximum"
                                                            style={{ flex: 1 }}
                                                            size="large"
                                                            min={0}
                                                        />
                                                    </Form.Item>
                                                )}
                                            </Space.Compact>
                                        </div>

                                        <div>
                                            <Text>
                                                Skills <span style={{ color: '#ff4d4f' }}>*</span>
                                            </Text>
                                            <Text type="secondary" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '12px' }}>
                                                (Max 10 skills)
                                            </Text>
                                            <Form.Item name="skills" rules={[{ required: true }]}>
                                                <Select
                                                    mode="multiple"
                                                    placeholder="Select skills"
                                                    options={skillsData}
                                                    size="large"
                                                    maxCount={10}
                                                />
                                            </Form.Item>
                                        </div>

                                        <Form.Item
                                            label="Description"
                                            name="description"
                                            rules={[{ required: true }]}
                                        >
                                            <TextArea
                                                rows={10}
                                                placeholder="Enter job description"
                                            />
                                        </Form.Item>

                                        <Row gutter={16}>
                                            <Col xs={24} md={12}>
                                                <Form.Item label="Expires in" name="expiresIn">
                                                    <Radio.Group>
                                                        <Space direction="vertical">
                                                            <Radio value="10">10 days</Radio>
                                                            <Radio value="15">15 days</Radio>
                                                            <Radio value="20">20 days</Radio>
                                                            <Radio value="30">30 days</Radio>
                                                        </Space>
                                                    </Radio.Group>
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <Form.Item
                                                    label="Deadline"
                                                    name="deadline"
                                                    rules={[{ required: true }]}
                                                >
                                                    <DatePicker
                                                        style={{ width: '100%' }}
                                                        size="large"
                                                        format="YYYY-MM-DD"
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                            <Button size="large">
                                                Cancel Job Post
                                            </Button>
                                            <Button
                                                type="primary"
                                                size="large"
                                                htmlType="submit"
                                                onClick={() => setActiveStep(1)}
                                            >
                                                Update & Next
                                            </Button>
                                        </div>
                                    </Space>
                                </Form>
                            )}
                        </Card>

                        <Card>
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
