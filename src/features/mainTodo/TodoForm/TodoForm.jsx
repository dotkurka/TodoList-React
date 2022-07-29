import { Formik, Form } from "formik";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomField from "../../../components/CustomField/CustomField";
import "./TodoForm.scss";
import { validationSchema } from "./ValidationSchema";

function TodoForm({ create }) {
    const initialValues = {
        title: "",
        descripton: "",
        userName: "",
    };

    const addNewPost = (values) => {
        const newPost = {
            ...values,
            id: Date.now(),
            complited: false,
        };
        create(newPost);
    };

    return (
        <Formik
            initialValues={initialValues}
            validateOnBlur
            onSubmit={addNewPost}
            validationSchema={validationSchema}
        >
            {({ errors, touched, handleBlur, handleChange, isValid, dirty }) => (
                <Form className="Todo-Form">
                    <div>
                        <CustomField
                            name="title"
                            title="Todo name"
                            classes={errors.title ? "Error-Input" : ""}
                        />
                        {errors.title && touched.title ? (
                            <div className="Error-Lable">{errors.title}</div>
                        ) : null}
                    </div>
                    <div>
                        <CustomField
                            name="descripton"
                            title="Descripton"
                            classes={errors.descripton ? "Error-Input" : ""}
                        />
                        {errors.descripton && touched.descripton ? (
                            <div className="Error-Lable">{errors.descripton}</div>
                        ) : null}
                    </div>
                    <div>
                        <CustomField
                            name="userName"
                            title="First name"
                            classes={errors.userName ? "Error-Input" : ""}
                        />
                        {errors.userName && touched.userName ? (
                            <div className="Error-Lable">{errors.userName}</div>
                        ) : null}
                    </div>
                    <div className="Todo-Form-Button">
                        <CustomButton cancel="Cancel-Button">Cancel</CustomButton>
                        <CustomButton type="submit">Submit</CustomButton>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default TodoForm;
