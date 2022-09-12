import React from "react";
import { Field } from "formik";
import "./CustomField.scss";

const CustomField = (props) => {
    return (
        <div className="custom-field">
            <Field {...props} placeholder=" " className={`custom-field-input ${props.classes}`} />
            <label className="custom-field-lable">{props.title}</label>
        </div>
    );
};

export default CustomField;
