import { Formik, Form } from "formik";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomField from "../../../components/CustomField/CustomField";
import "./TodoForm.scss";
import { validationSchema } from "./ValidationSchema";

function TodoForm({ create, setVisible, setModal, snackbar }) {
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
        snackbar("Success created");
    };

    return (
        <Formik
            initialValues={initialValues}
            validateOnBlur
            onSubmit={addNewPost}
            validationSchema={validationSchema}
        >
            {({ errors, touched }) => (
                <Form className="Todo-Form">
                    <div>
                        <CustomField
                            name="title"
                            title="Todo name"
                            classes={errors.title && touched.title ? "Error-Input" : ""}
                        />
                        {errors.title && touched.title ? (
                            <div className="Error-Lable">{errors.title}</div>
                        ) : null}
                    </div>
                    <div>
                        <CustomField
                            name="descripton"
                            title="Descripton"
                            classes={errors.descripton && touched.descripton ? "Error-Input" : ""}
                        />
                        {errors.descripton && touched.descripton ? (
                            <div className="Error-Lable">{errors.descripton}</div>
                        ) : null}
                    </div>
                    <div>
                        <CustomField
                            name="userName"
                            title="First name"
                            classes={errors.userName && touched.userName ? "Error-Input" : ""}
                        />
                        {errors.userName && touched.userName ? (
                            <div className="Error-Lable">{errors.userName}</div>
                        ) : null}
                    </div>
                    <div className="Todo-Form-Button">
                        <CustomButton
                            type="button"
                            cancel="Cancel-Button"
                            onClick={() => {
                                setModal(false);
                                setVisible(true);
                            }}
                        >
                            Cancel
                        </CustomButton>
                        <CustomButton type="submit">Submit</CustomButton>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default TodoForm;
