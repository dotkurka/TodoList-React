import React, { useEffect } from "react";
import "./Snackbar.scss";

const Snackbar = ({ message, visible, hidden }) => {
    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                hidden(false);
            }, 2900);
        }
    }, [visible, hidden]);

    return (
        <div className={visible ? "show" : "hidde"}>
            <div className={"snackbar"}>
                <div className="snackbar-title">{message}</div>
            </div>
        </div>
    );
};

export default Snackbar;
