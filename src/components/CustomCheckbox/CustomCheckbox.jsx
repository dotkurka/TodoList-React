import React from "react";
import "./CustomCheckbox.scss";

const CustomCheckbox = ({ ...props }) => {
    return (
        <div className="Custom-Checkbox">
            <input {...props} type="checkbox" />
        </div>
    );
};

export default CustomCheckbox;
