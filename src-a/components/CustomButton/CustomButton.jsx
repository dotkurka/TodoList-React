import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, ...props }) => {
    return (
        <button {...props} className={`Custom-Button ${props.cancel}`}>
            {children}
        </button>
    );
};

export default CustomButton;
