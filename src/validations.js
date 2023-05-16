    import * as Yup from 'yup';

    export const adduserValidation =  Yup.object({
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

            password: Yup.string().required('Password is required'),
            confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    export const loginValidation = Yup.object({
        email: Yup
            .string()
            .trim()
            .required("This field is required")
            .email("Enter a valid email ID"),
        
        password:Yup
            .string()
            .required("This field is required"),   
    });