import React from "react";
import "./CloseButton.scss";

const CloseButton = ({ ...props }) => {
    return (
        <button {...props} className={"close-button"}>
            <img src={"images/cancel.png"} className="close-button-cross" alt="X" />
        </button>
    );
};

export default CloseButton;
