import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./ConfirmDialog.scss";

const ConfirmDialog = ({ title, onDialog, snackbar }) => {
    return (
        <div className={`Confirm-Dialog`}>
            <div className="Confirm-Dialog-Contain">
                <p>{title}</p>
                <div className="Confirm-Dialog-Button">
                    <CustomButton
                        onClick={() => {
                            onDialog(true);
                            snackbar("Success removed");
                        }}
                        cancel="Cancel-Button"
                    >
                        Yes
                    </CustomButton>
                    <CustomButton onClick={() => onDialog(false)}>No</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
