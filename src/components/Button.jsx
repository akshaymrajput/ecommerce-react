import React from "react";

const Button = ({ children, className, ...props }) => {
    return (
        <button
            className={`py-2 px-4 text-white rounded-lg text-lg  transition duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
