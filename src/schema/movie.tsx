import * as yup from 'yup';

export const baseSchema = yup.object().shape({
    name: yup.string().required("required"),
    ratings: yup.number().positive().integer().max(100).required("required"),
    duration: yup
    .string()
    .required("required")
})