import { Head, Link } from '@inertiajs/react';

export default function JobIndex() {
    const uiLibraries = [
        {
            name: 'Mantine',
            description: 'Feature-rich React components library with extensive hooks and utilities',
            route: '/job/mantine',
            color: '#339af0',
        },
        {
            name: 'Ant Design',
            description: 'Enterprise-class UI design language and React component library',
            route: '/job/ant-design',
            color: '#1890ff',
        },
        {
            name: 'shadcn/ui',
            description: 'Beautifully designed components built with Radix UI and Tailwind CSS',
            route: '/job/shadcn',
            color: '#000000',
        },
    ];

    return (
        <>
            <Head title="Job Form Comparison" />
            <div style={styles.container}>
                <div style={styles.wrapper}>
                    {/* Navigation */}
                    <div style={styles.backLink}>
                        <Link href="/" style={styles.backLinkAnchor}>
                            ← Back to Home
                        </Link>
                    </div>

                    <div style={styles.header}>
                        <h1 style={styles.title}>Job Form UI Library Comparison</h1>
                        <p style={styles.subtitle}>
                            Compare the same job update form built with three different UI libraries
                        </p>
                    </div>

                    <div style={styles.grid}>
                        {uiLibraries.map((library, index) => (
                            <Link
                                key={index}
                                href={library.route}
                                style={{
                                    ...styles.card,
                                    borderTop: `4px solid ${library.color}`,
                                }}
                            >
                                <div style={styles.cardHeader}>
                                    <div
                                        style={{
                                            ...styles.badge,
                                            backgroundColor: `${library.color}20`,
                                            color: library.color,
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                    <h2 style={styles.cardTitle}>{library.name}</h2>
                                </div>
                                <p style={styles.cardDescription}>{library.description}</p>
                                <div style={styles.cardFooter}>
                                    <span style={{ ...styles.link, color: library.color }}>
                                        View Demo →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={styles.infoCard}>
                        <h3 style={styles.infoTitle}>About This Comparison</h3>
                        <p style={styles.infoText}>
                            This project demonstrates the same job update form implemented using five popular React UI libraries.
                            Each version includes:
                        </p>
                        <ul style={styles.featureList}>
                            <li>Multi-step form with progress indicator</li>
                            <li>Form inputs (text, select, number, date)</li>
                            <li>Toggle switches and radio buttons</li>
                            <li>Tag/multi-select components for skills</li>
                            <li>Rich text editor for job description</li>
                            <li>Responsive design</li>
                        </ul>
                        <p style={styles.infoText}>
                            <strong>Tech Stack:</strong> Laravel 12 + React + Inertia.js + Vite
                        </p>
                    </div>

                    <div style={styles.footer}>
                        <p style={styles.footerText}>
                            Built to compare Mantine, Ant Design, and shadcn/ui
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '3rem 1rem',
    },
    wrapper: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    backLink: {
        marginBottom: '2rem',
    },
    backLinkAnchor: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'opacity 0.3s ease',
        display: 'inline-block',
    },
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '800',
        color: 'white',
        marginBottom: '1rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: 'rgba(255,255,255,0.9)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textDecoration: 'none',
        display: 'block',
        cursor: 'pointer',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
    },
    badge: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '1.125rem',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1f2937',
        margin: 0,
    },
    cardDescription: {
        fontSize: '0.95rem',
        color: '#6b7280',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
    },
    cardFooter: {
        paddingTop: '1rem',
        borderTop: '1px solid #e5e7eb',
    },
    link: {
        fontWeight: '600',
        fontSize: '0.95rem',
        textDecoration: 'none',
    },
    infoCard: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        marginBottom: '2rem',
    },
    infoTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: '1rem',
    },
    infoText: {
        fontSize: '1rem',
        color: '#4b5563',
        lineHeight: '1.7',
        marginBottom: '1rem',
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        margin: '1rem 0',
        color: '#4b5563',
    },
    footer: {
        textAlign: 'center',
        padding: '2rem 0',
    },
    footerText: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: '0.95rem',
    },
};
