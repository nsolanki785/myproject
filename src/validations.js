import * as Yup from 'yup';


const adduserValidation = () => Yup.object({
    email: Yup
        .string()
        .trim()
        .required("This field is required")
        .email("Enter a valid email ID"),

    first_name: Yup
        .string()
        .trim()
        .required("This field is required")
        .max(20, "Maximum 20 characters allowed")
        .min(3, "Minimum 3 characters allowed"),

    last_name: Yup
        .string()
        .trim()
        .required("This field is required")
        .max(20, "Maximum 20 characters allowed")
        .min(3, "Minimum 3 characters allowed"),

});
export default adduserValidation;