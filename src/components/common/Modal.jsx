/**
 * Modal Component
 * Reusable modal dialog with glassmorphism backdrop
 */

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        zIndex: 'var(--z-modal-backdrop)',
        animation: 'fadeIn 0.3s ease-out',
    },
    modal: {
        position: 'relative',
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-2xl)',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 'var(--z-modal)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-6)',
        borderBottom: '1px solid var(--neutral-200)',
    },
    title: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        margin: 0,
    },
    closeButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--neutral-100)',
        border: 'none',
        color: 'var(--neutral-600)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
    },
    body: {
        padding: 'var(--space-6)',
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 'var(--space-3)',
        padding: 'var(--space-6)',
        borderTop: '1px solid var(--neutral-200)',
    },
};

/**
 * Modal component
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {Function} props.onClose - Close handler
 * @param {string} props.title - Modal title
 * @param {React.ReactNode} props.children - Modal body content
 * @param {React.ReactNode} props.footer - Modal footer content (buttons, etc.)
 * @param {string} props.size - Modal size (small, medium, large)
 * @param {boolean} props.closeOnOverlay - Close when clicking overlay
 * @param {boolean} props.showCloseButton - Show close button in header
 */
const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'medium',
    closeOnOverlay = true,
    showCloseButton = true,
}) => {
    // Handle escape key
    const handleEscape = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    // Add/remove event listeners and body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, handleEscape]);

    // Handle overlay click
    const handleOverlayClick = (e) => {
        if (closeOnOverlay && e.target === e.currentTarget) {
            onClose();
        }
    };

    // Get modal width based on size
    const getModalWidth = () => {
        switch (size) {
            case 'small':
                return '400px';
            case 'large':
                return '800px';
            case 'full':
                return '95%';
            default:
                return '600px';
        }
    };

    // Don't render if not open
    if (!isOpen) return null;

    // Render modal using portal
    const modalContent = (
        <div
            style={modalStyles.overlay}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                style={{
                    ...modalStyles.modal,
                    maxWidth: getModalWidth(),
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div style={modalStyles.header}>
                        {title && (
                            <h2 id="modal-title" style={modalStyles.title}>
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                style={modalStyles.closeButton}
                                onClick={onClose}
                                aria-label="Close modal"
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'var(--neutral-200)';
                                    e.target.style.color = 'var(--neutral-900)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'var(--neutral-100)';
                                    e.target.style.color = 'var(--neutral-600)';
                                }}
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                )}

                {/* Body */}
                <div style={modalStyles.body}>{children}</div>

                {/* Footer */}
                {footer && <div style={modalStyles.footer}>{footer}</div>}
            </div>
        </div>
    );

    // Use portal to render modal at document body level
    if (typeof window !== 'undefined') {
        return createPortal(modalContent, document.body);
    }

    return null;
};

export default Modal;
