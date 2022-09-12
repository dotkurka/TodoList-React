import React from "react";
import CustomField from "../../../components/CustomField/CustomField";

const FormItem = ({ name, title, errors, touched }) => {
    return (
        <div>
            <CustomField name={name} title={title} classes={errors && touched ? "error-input" : ""} />
            {errors && touched ? <div className="error-lable">{errors}</div> : null}
        </div>
    );
};

export default FormItem;
