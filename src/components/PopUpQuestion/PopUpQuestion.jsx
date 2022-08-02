import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./PopUpQuestion.scss";

const PopUpQuestion = ({ title, visible, setVisible, setModal }) => {
    return (
        <div className={`Pop-Up-Que  ${visible ? "Active" : ""}`}>
            <div className="Pop-Up-Que-Contain">
                <p>{title}</p>
                <div className="Pop-Up-Que-Button">
                    <CustomButton
                        cancel="Cancel-Button"
                        onClick={() => {
                            setVisible(false);
                            setModal(false);
                        }}
                    >
                        Yes
                    </CustomButton>
                    <CustomButton
                        onClick={() => {
                            setVisible(false);
                            setModal(true);
                        }}
                    >
                        No
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default PopUpQuestion;
