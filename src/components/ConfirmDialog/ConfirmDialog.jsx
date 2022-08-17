import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./ConfirmDialog.scss";

const ConfirmDialog = ({ title, onDialog, snackbar, visible, onConfirm }) => {
    return (
        <div className={visible ? "Dialog-Show" : "Dialog-Hidden"}>
            <div className="Confirm-Dialog">
                <div className="Confirm-Dialog-Contain">
                    <p>{title}</p>
                    <div className="Confirm-Dialog-Button">
                        <CustomButton
                            onClick={() => {
                                onConfirm?.();
                                snackbar("Success removed");
                                onDialog(false);
                            }}
                            cancel="Cancel-Button"
                        >
                            Yes
                        </CustomButton>
                        <CustomButton onClick={() => onDialog(false)}>No</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
