import React from "react";
import Button from "../Button/Button";
import "./ConfirmDialog.scss";

const ConfirmDialog = ({ title, onDialog, visible, onConfirm, onCancel }) => {
    return (
        <div className={visible ? "dialog-show" : "dialog-hidden"}>
            <div className="confirm-dialog">
                <div className="confirm-dialog-contain">
                    <p>{title}</p>
                    <div className="confirm-dialog-button">
                        <Button
                            onClick={() => {
                                onConfirm?.();
                            }}
                            cancel="cancel-button"
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={() => {
                                onCancel?.();
                                onDialog(false);
                            }}
                        >
                            No
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
