import React from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ ...props }) => {
    return (
        <label className="switch">
            <input {...props} type="checkbox" />
            <span className="slider" />
        </label>
    );
};

export default ToggleSwitch;
