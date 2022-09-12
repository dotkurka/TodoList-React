import { Formik, Form } from "formik";
import Button from "../../../components/Button/Button";
import FormItem from "./FormItem";
import "./TodoForm.scss";
import { validationSchema } from "./ValidationSchema";

function TodoForm({ create, visible, onConfirm, snackbar }) {
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
        snackbar("Success created");
        create(newPost);
    };

    return (
        <Formik
            initialValues={initialValues}
            validateOnBlur
            onSubmit={addNewPost}
            validationSchema={validationSchema}
        >
            {({ errors, touched }) => (
                <Form className="todo-form">
                    <FormItem
                        name="title"
                        title="Todo name"
                        errors={errors.title}
                        touched={touched.title}
                    />
                    <FormItem
                        name="descripton"
                        title="Descripton"
                        errors={errors.descripton}
                        touched={touched.descripton}
                    />
                    <FormItem
                        name="userName"
                        title="First name"
                        errors={errors.userName}
                        touched={touched.userName}
                    />

                    <div className="todo-form-button">
                        <Button
                            type="button"
                            cancel="cancel-button"
                            onClick={() => {
                                visible(false);
                                onConfirm({
                                    message: "remove this item",
                                    onConfirm: () => visible(false),
                                    onCancel: () => visible(true),
                                });
                            }}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default TodoForm;
