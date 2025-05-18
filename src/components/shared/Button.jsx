import PropTypes from 'prop-types';

export const Button = ({ children, className, variant, ...props }) => {
    const baseStyles = "px-4 py-2 rounded font-semibold transition-all duration-200";
    const variants = {
        default: "bg-primary text-white hover:bg-primary-600",
        outline: "border border-primary text-primary hover:bg-primary-50",
        ghost: "text-primary hover:bg-primary-100",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    variant: PropTypes.string
};

Button.defaultProps = {
    onClick: () => { },
    className: '',
    variant: 'default'
};