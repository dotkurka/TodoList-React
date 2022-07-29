import React from "react";
import "./CloseButton.scss";

const CloseButton = ({ ...props }) => {
    return (
        <button {...props} className={"Close-Button"}>
            X
        </button>
    );
};

export default CloseButton;
