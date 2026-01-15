/**
 * FAQ Section Component
 * Premium single-column accordion FAQ
 * Features: +/- toggle icons, single answer open at a time
 */

import { useState } from 'react';

const faqStyles = {
    container: {
        marginTop: 'var(--space-20)',
        maxWidth: '750px',
        margin: 'var(--space-20) auto 0',
        padding: '0 var(--space-4)',
    },
    title: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        textAlign: 'center',
        marginBottom: 'var(--space-10)',
        letterSpacing: '-0.02em',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        borderTop: '1px solid var(--neutral-200)',
        padding: 'var(--space-4) 0',
    },
    itemFirst: {
        borderTop: 'none',
    },
    question: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        padding: 0,
        background: 'none',
        border: 'none',
        width: '100%',
        textAlign: 'left',
        fontSize: 'var(--text-base)',
        fontWeight: '500',
        color: 'var(--neutral-900)',
        fontFamily: 'var(--font-display)',
        transition: 'color 0.2s ease',
        lineHeight: '1.5',
        gap: 'var(--space-3)',
    },
    questionHover: {
        color: 'var(--primary-blue)',
    },
    questionText: {
        flex: 1,
    },
    icon: {
        fontSize: '1.1rem',
        fontWeight: '300',
        color: 'var(--neutral-500)',
        flexShrink: 0,
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'color 0.2s ease',
    },
    iconOpen: {
        color: 'var(--primary-blue)',
    },
    answer: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        lineHeight: '1.6',
        paddingRight: 'var(--space-6)',
        marginTop: 0,
        opacity: 0,
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    answerOpen: {
        opacity: 1,
        maxHeight: '200px',
        marginTop: 'var(--space-3)',
        paddingBottom: 'var(--space-1)',
    },
};

// Plus/Minus Icon Component
const ToggleIcon = ({ isOpen }) => {
    return (
        <span style={{
            ...faqStyles.icon,
            ...(isOpen ? faqStyles.iconOpen : {}),
        }}>
            {isOpen ? '−' : '+'}
        </span>
    );
};

const FAQItem = ({ question, answer, isOpen, onToggle, isFirst }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{
            ...faqStyles.item,
            ...(isFirst ? faqStyles.itemFirst : {}),
        }}>
            <button
                style={{
                    ...faqStyles.question,
                    ...(isHovered ? faqStyles.questionHover : {}),
                }}
                onClick={onToggle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-expanded={isOpen}
            >
                <span style={faqStyles.questionText}>{question}</span>
                <ToggleIcon isOpen={isOpen} />
            </button>
            <div
                style={{
                    ...faqStyles.answer,
                    ...(isOpen ? faqStyles.answerOpen : {}),
                }}
                aria-hidden={!isOpen}
            >
                {answer}
            </div>
        </div>
    );
};

const FAQSection = ({ faqs }) => {
    // Start with first question open by default
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        // If clicking the same item that's open, revert to first question
        if (openIndex === index) {
            setOpenIndex(0);
        } else {
            // Close previous and open new
            setOpenIndex(index);
        }
    };

    return (
        <div style={faqStyles.container}>
            <h2 style={faqStyles.title}>Frequently Asked Questions</h2>

            <div style={faqStyles.list}>
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => toggleItem(index)}
                        isFirst={index === 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;