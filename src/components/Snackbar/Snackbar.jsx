import React from "react";
import "./Snackbar.scss";

const Snackbar = ({ message, visible }) => {
    return (
        <div className={visible ? "Show" : "Hidde"}>
            <div className={"Snackbar"}>
                <div className="Snackbar-Title">{message}</div>
            </div>
        </div>
    );
};

export default Snackbar;
