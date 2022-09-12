import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ ...props }) => {
    return (
        <div className="custom-checkbox">
            <input {...props} type="checkbox" />
        </div>
    );
};

export default Checkbox;
