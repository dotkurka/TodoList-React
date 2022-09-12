import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import "./PopUp.scss";

const PopUp = ({ children, visible, setVisible }) => {
    return (
        <div className={`pop-up  ${visible ? "active" : ""}`} onClick={() => setVisible(false)}>
            <div className="pop-up-contain">
                <CloseButton onClick={() => setVisible(false)} />
            </div>
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default PopUp;
