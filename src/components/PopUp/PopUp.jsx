import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import "./PopUp.scss";

const PopUp = ({ children, visible, setVisible }) => {
    return (
        <div className={`Pop-Up  ${visible ? "Active" : ""}`} onClick={() => setVisible(false)}>
            <div className="Pop-Up-Contain">
                <CloseButton onClick={() => setVisible(false)} />
            </div>
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
};

export default PopUp;
