import PropTypes from 'prop-types';

export const Button = ({ children, className, variant, ...props }) => {
    const baseStyles = "px-4 py-2 rounded font-semibold transition-all duration-200";
    const variants = {
        default: "bg-orange-500 text-white hover:bg-orange-600",
        outline: "border border-orange-500 text-orange-500 hover:bg-orange-50",
        ghost: "text-orange-500 hover:bg-orange-100",
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