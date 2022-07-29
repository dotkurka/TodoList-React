import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    descripton: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    userName: Yup.string().required("Required"),
});
