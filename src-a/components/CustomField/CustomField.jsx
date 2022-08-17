import React from "react";
import { Field } from "formik";
import "./CustomField.scss";

const CustomField = (props) => {
    return (
        <div className="Custom-Field">
            <Field {...props} placeholder=" " className={`Custom-Field-Input ${props.classes}`} />
            <label className="Custom-Field-Lable">{props.title}</label>
        </div>
    );
};

export default CustomField;
