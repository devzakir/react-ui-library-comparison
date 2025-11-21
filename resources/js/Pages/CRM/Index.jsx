import { Head, Link } from '@inertiajs/react';

export default function CRMIndex() {
    const uiLibraries = [
        {
            name: 'Mantine',
            description: 'Full-featured CRM Contact Detail page with email, SMS, WhatsApp integration, activity timeline, and comprehensive contact management',
            route: '/crm/mantine',
            color: '#339af0',
        },
        {
            name: 'Ant Design',
            description: 'Enterprise CRM Contact Detail with integrated communications, deal tracking, task management, and professional UI design',
            route: '/crm/ant-design',
            color: '#1890ff',
        },
    ];

    return (
        <>
            <Head title="CRM Contact Detail Comparison" />
            <div style={styles.container}>
                <div style={styles.wrapper}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>CRM Contact Detail Comparison</h1>
                        <p style={styles.subtitle}>
                            Compare full-featured CRM contact detail pages with integrated communications
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
                        <h3 style={styles.infoTitle}>CRM Features Included</h3>
                        <p style={styles.infoText}>
                            Each implementation includes a comprehensive contact detail page with:
                        </p>
                        <div style={styles.featureGrid}>
                            <div>
                                <h4 style={styles.featureCategory}>Communication</h4>
                                <ul style={styles.featureList}>
                                    <li>Email integration with compose modal</li>
                                    <li>SMS messaging functionality</li>
                                    <li>WhatsApp integration</li>
                                    <li>Communication history timeline</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={styles.featureCategory}>Contact Management</h4>
                                <ul style={styles.featureList}>
                                    <li>Complete contact information</li>
                                    <li>Company details and associations</li>
                                    <li>Tags and categorization</li>
                                    <li>Contact status tracking</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={styles.featureCategory}>Sales & Pipeline</h4>
                                <ul style={styles.featureList}>
                                    <li>Deal/Opportunity tracking</li>
                                    <li>Revenue metrics and stats</li>
                                    <li>Pipeline stage visualization</li>
                                    <li>Win/Loss tracking</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={styles.featureCategory}>Productivity</h4>
                                <ul style={styles.featureList}>
                                    <li>Task management</li>
                                    <li>Activity timeline</li>
                                    <li>Notes and annotations</li>
                                    <li>Meeting scheduling</li>
                                </ul>
                            </div>
                        </div>
                        <p style={styles.infoText}>
                            <strong>Tech Stack:</strong> Laravel 12 + React + Inertia.js + Vite
                        </p>
                    </div>

                    <div style={styles.footer}>
                        <p style={styles.footerText}>
                            Built to compare Mantine and Ant Design for enterprise CRM applications
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
        maxWidth: '700px',
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
    featureGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        margin: '2rem 0',
    },
    featureCategory: {
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '0.75rem',
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: '0.9rem',
        color: '#6b7280',
        lineHeight: '1.8',
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
