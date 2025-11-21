import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { Box, Container, Heading, Text, Input, Select as ChakraSelect, Button, VStack, HStack, Stack, Textarea, Flex, Badge, Fieldset, Tabs, RadioGroup, Field, CloseButton } from '@chakra-ui/react';

const system = createSystem(defaultConfig);

const skillsData = [
    'Cold Calling',
    'Communication',
    'Customer Relationship Management',
    'Lead Generation',
    'Sales Strategies',
    'Negotiation',
    'Presentation',
];

export default function ChakraUIJobForm() {
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

    const handleRemoveSkill = (skillToRemove) => {
        setFormData({
            ...formData,
            skills: formData.skills.filter((skill) => skill !== skillToRemove),
        });
    };

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
            <Head title="Update Job - Chakra UI" />
            <ChakraProvider value={system}>
                <Box minH="100vh" bg="gray.50" py={8}>
                    <Container maxW="1000px">
                        <Box bg="white" shadow="md" rounded="lg" p={8} mb={4}>
                            <Heading size="lg" mb={6} textAlign="center">
                                Update Job
                            </Heading>

                            {/* Stepper using Tabs */}
                            <Tabs.Root value={activeStep.toString()} variant="enclosed" mb={8}>
                                <Tabs.List>
                                    {steps.map((step, index) => (
                                        <Tabs.Trigger
                                            key={index}
                                            value={index.toString()}
                                            onClick={() => setActiveStep(index)}
                                            flex={1}
                                        >
                                            <VStack gap={1}>
                                                <Flex
                                                    w="40px"
                                                    h="40px"
                                                    rounded="full"
                                                    bg={activeStep >= index ? 'blue.500' : 'gray.200'}
                                                    color={activeStep >= index ? 'white' : 'gray.600'}
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    fontWeight="bold"
                                                >
                                                    {step.number}
                                                </Flex>
                                                <Text fontSize="xs" fontWeight="medium">
                                                    {step.title}
                                                </Text>
                                            </VStack>
                                        </Tabs.Trigger>
                                    ))}
                                </Tabs.List>
                            </Tabs.Root>

                            {activeStep === 0 && (
                                <form onSubmit={handleSubmit}>
                                    <VStack gap={6} align="stretch">
                                        <Box>
                                            <Heading size="md" mb={2}>
                                                Job Information
                                            </Heading>
                                            <Text fontSize="sm" color="gray.600">
                                                Craft the role! Provide detailed job specifics to attract the perfect candidate for your organization.
                                            </Text>
                                        </Box>

                                        <Field label="Job Title" required>
                                            <Input
                                                value={formData.jobTitle}
                                                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                                placeholder="Enter job title"
                                                size="md"
                                            />
                                        </Field>

                                        <HStack gap={4} align="flex-start">
                                            <Field label="Workspace Type" required flex={1}>
                                                <ChakraSelect.Root
                                                    value={[formData.workspaceType]}
                                                    onValueChange={(e) => setFormData({ ...formData, workspaceType: e.value[0] })}
                                                    size="md"
                                                >
                                                    <ChakraSelect.Trigger>
                                                        <ChakraSelect.ValueText placeholder="Select workspace type" />
                                                    </ChakraSelect.Trigger>
                                                    <ChakraSelect.Content>
                                                        <ChakraSelect.Item item="remote">Remote</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="onsite">Onsite</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="hybrid">Hybrid</ChakraSelect.Item>
                                                    </ChakraSelect.Content>
                                                </ChakraSelect.Root>
                                            </Field>

                                            <Field label="Job Type" required flex={1}>
                                                <ChakraSelect.Root
                                                    value={[formData.jobType]}
                                                    onValueChange={(e) => setFormData({ ...formData, jobType: e.value[0] })}
                                                    size="md"
                                                >
                                                    <ChakraSelect.Trigger>
                                                        <ChakraSelect.ValueText placeholder="Select job type" />
                                                    </ChakraSelect.Trigger>
                                                    <ChakraSelect.Content>
                                                        <ChakraSelect.Item item="full-time">Full Time</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="part-time">Part Time</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="contract">Contract</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="internship">Internship</ChakraSelect.Item>
                                                    </ChakraSelect.Content>
                                                </ChakraSelect.Root>
                                            </Field>

                                            <Field label="Salary Type" required flex={1}>
                                                <ChakraSelect.Root
                                                    value={[formData.salaryType]}
                                                    onValueChange={(e) => setFormData({ ...formData, salaryType: e.value[0] })}
                                                    size="md"
                                                >
                                                    <ChakraSelect.Trigger>
                                                        <ChakraSelect.ValueText placeholder="Select salary type" />
                                                    </ChakraSelect.Trigger>
                                                    <ChakraSelect.Content>
                                                        <ChakraSelect.Item item="monthly">Monthly</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="yearly">Yearly</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="hourly">Hourly</ChakraSelect.Item>
                                                    </ChakraSelect.Content>
                                                </ChakraSelect.Root>
                                            </Field>
                                        </HStack>

                                        <Box>
                                            <HStack mb={2} justify="space-between">
                                                <Text fontSize="sm" fontWeight="medium">
                                                    Salary <Text as="span" color="red.500">*</Text>
                                                </Text>
                                                <HStack>
                                                    <input
                                                        type="checkbox"
                                                        checked={salaryRange}
                                                        onChange={(e) => setSalaryRange(e.target.checked)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                    <Text fontSize="sm">Salary Range</Text>
                                                </HStack>
                                            </HStack>
                                            <HStack>
                                                <ChakraSelect.Root
                                                    value={[formData.currency]}
                                                    onValueChange={(e) => setFormData({ ...formData, currency: e.value[0] })}
                                                    size="md"
                                                    width="120px"
                                                >
                                                    <ChakraSelect.Trigger>
                                                        <ChakraSelect.ValueText />
                                                    </ChakraSelect.Trigger>
                                                    <ChakraSelect.Content>
                                                        <ChakraSelect.Item item="BDT">BDT</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="USD">USD</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="EUR">EUR</ChakraSelect.Item>
                                                        <ChakraSelect.Item item="GBP">GBP</ChakraSelect.Item>
                                                    </ChakraSelect.Content>
                                                </ChakraSelect.Root>
                                                <Input
                                                    type="number"
                                                    value={formData.salaryMin}
                                                    onChange={(e) => setFormData({ ...formData, salaryMin: Number(e.target.value) })}
                                                    placeholder="Minimum"
                                                    flex={1}
                                                />
                                                {salaryRange && (
                                                    <Input
                                                        type="number"
                                                        value={formData.salaryMax}
                                                        onChange={(e) => setFormData({ ...formData, salaryMax: Number(e.target.value) })}
                                                        placeholder="Maximum"
                                                        flex={1}
                                                    />
                                                )}
                                            </HStack>
                                        </Box>

                                        <Box>
                                            <Text fontSize="sm" fontWeight="medium" mb={2}>
                                                Skills <Text as="span" color="red.500">*</Text>
                                            </Text>
                                            <Text fontSize="xs" color="gray.600" mb={2}>
                                                (Max 10 skills)
                                            </Text>
                                            <Flex wrap="wrap" gap={2} mb={2}>
                                                {formData.skills.map((skill, index) => (
                                                    <Badge key={index} colorPalette="blue" px={3} py={1} rounded="full" fontSize="sm">
                                                        <HStack gap={2}>
                                                            <Text>{skill}</Text>
                                                            <CloseButton
                                                                size="xs"
                                                                onClick={() => handleRemoveSkill(skill)}
                                                            />
                                                        </HStack>
                                                    </Badge>
                                                ))}
                                            </Flex>
                                            <ChakraSelect.Root
                                                size="md"
                                                onValueChange={(e) => {
                                                    const skill = e.value[0];
                                                    if (skill && !formData.skills.includes(skill) && formData.skills.length < 10) {
                                                        setFormData({ ...formData, skills: [...formData.skills, skill] });
                                                    }
                                                }}
                                            >
                                                <ChakraSelect.Trigger>
                                                    <ChakraSelect.ValueText placeholder="Select a skill" />
                                                </ChakraSelect.Trigger>
                                                <ChakraSelect.Content>
                                                    {skillsData
                                                        .filter((skill) => !formData.skills.includes(skill))
                                                        .map((skill) => (
                                                            <ChakraSelect.Item key={skill} item={skill}>
                                                                {skill}
                                                            </ChakraSelect.Item>
                                                        ))}
                                                </ChakraSelect.Content>
                                            </ChakraSelect.Root>
                                        </Box>

                                        <Field label="Description" required>
                                            <Textarea
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                rows={10}
                                                placeholder="Enter job description"
                                                resize="vertical"
                                            />
                                        </Field>

                                        <HStack gap={8} align="flex-start">
                                            <Fieldset.Root flex={1}>
                                                <Fieldset.Legend fontSize="sm" fontWeight="medium" mb={3}>
                                                    Expires in
                                                </Fieldset.Legend>
                                                <RadioGroup.Root
                                                    value={formData.expiresIn}
                                                    onValueChange={(e) => setFormData({ ...formData, expiresIn: e.value })}
                                                >
                                                    <Stack gap={3}>
                                                        {['10', '15', '20', '30'].map((value) => (
                                                            <RadioGroup.Item key={value} value={value}>
                                                                <RadioGroup.ItemControl />
                                                                <RadioGroup.ItemText fontSize="sm">{value} days</RadioGroup.ItemText>
                                                            </RadioGroup.Item>
                                                        ))}
                                                    </Stack>
                                                </RadioGroup.Root>
                                            </Fieldset.Root>

                                            <Field label="Deadline" required flex={1}>
                                                <Input
                                                    type="date"
                                                    value={formData.deadline}
                                                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                                />
                                            </Field>
                                        </HStack>

                                        <HStack justify="space-between" mt={6}>
                                            <Button variant="ghost" colorPalette="gray">
                                                Cancel Job Post
                                            </Button>
                                            <Button type="submit" colorPalette="blue" onClick={() => setActiveStep(1)}>
                                                Update & Next
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </form>
                            )}
                        </Box>

                        <Box bg="white" shadow="md" rounded="lg" p={4}>
                            <Text fontSize="sm" textAlign="center" color="gray.600">
                                Built with <strong>Chakra UI v3</strong>
                            </Text>
                        </Box>
                    </Container>
                </Box>
            </ChakraProvider>
        </>
    );
}
