import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Contact = {
    name: string;
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
};

export default function ContactInfo() {
    const { siteConfig } = useDocusaurusContext();
    const contact = siteConfig.customFields?.contact as Contact;

    if (!contact) {
        return <p>Contact information not available.</p>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                {contact.name}
            </p>

            <p>
                📧 Email :{' '}
                <a href={`mailto:${contact.email}`}>
                    {contact.email}
                </a>
            </p>

            {contact.phone && (
                <p>📞 Téléphone : {contact.phone}</p>
            )}

            <div style={{ marginTop: '10px' }}>
                {contact.linkedin && (
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                )}{' '}
                {contact.github && (
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}{' '}
                {contact.instagram && (
                    <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                )}
            </div>
        </div>
    );
}
