import React from "react";
import "./Button.scss";

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className={`custom-button ${props.cancel}`}>
            {children}
        </button>
    );
};

export default Button;
