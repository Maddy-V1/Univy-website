/**
 * Button Component
 * Reusable button with multiple variants, sizes, and states
 */

import Link from 'next/link';
import styles from '../../styles/components/Button.module.css';

/**
 * Button component with Link or button element
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'ghost' | 'glass' | 'success' | 'danger'} props.variant - Button style variant
 * @param {'small' | 'medium' | 'large'} props.size - Button size
 * @param {string} props.href - If provided, renders as Link
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.loading - Loading state
 * @param {boolean} props.fullWidth - Full width button
 * @param {React.ReactNode} props.leftIcon - Icon on left side
 * @param {React.ReactNode} props.rightIcon - Icon on right side
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.type - Button type (submit, button, reset)
 * @param {Function} props.onClick - Click handler
 */
const Button = ({
    variant = 'primary',
    size = 'medium',
    href,
    disabled = false,
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = '',
    children,
    type = 'button',
    onClick,
    ...props
}) => {
    // Build class names
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        loading && styles.loading,
        leftIcon && styles.iconLeft,
        rightIcon && styles.iconRight,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    // Button content
    const content = (
        <>
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
    );

    // Render as Link if href is provided
    if (href && !disabled) {
        return (
            <Link href={href} className={buttonClasses} {...props}>
                {content}
            </Link>
        );
    }

    // Render as button
    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
