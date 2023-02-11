import React from "react";
import Layout from "../components/layout";
import { Adduserdata } from "../api/api";
import adduserValidation from "../validations"
import { Formik } from "formik";

const Adduser = () => {
    const handleadduser = (values, setSubmitting) => {
        // alert()
        Adduserdata({ email: values.email, first_name: values.first_name,last_name:values.last_name })
            .then(response => {
                console.log("response",response);
                setSubmitting(false)
            })
    }

    return (
        <>
            <Layout>
                <h1>Adduser</h1>
                <Formik initialValues={{
                    email: '',
                    first_name: '',
                    last_name:''
                }}
                    validationSchema={adduserValidation}
                    onSubmit={(values, { setSubmitting }) => {
                        handleadduser(values, setSubmitting)
                    }}
                >
                    {({ errors, touched, handleChange, handleBlur, values, onSubmit, handleSubmit, isSubmitting }) => {
                        return (

                            <form handleSubmit={onSubmit}>
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                                {touched.email && errors.email ? (<div className="text-danger">{errors.email}</div>) : null}
                                <div className="input-group mt-3">
                                    <input
                                        className="form-control"
                                        name="first_name"
                                        type="first_name"
                                        placeholder="first_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.first_name}
                                    />
                                </div>
                                {touched.first_name && errors.first_name ? (<div className="text-danger">{errors.first_name}</div>) : null}
                                <div className="input-group mt-3">
                                    <input
                                        className="form-control"
                                        name="last_name"
                                        type="last_name"
                                        placeholder="last_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.last_name}
                                    />
                                </div>
                                {touched.last_name && errors.last_name ? (<div className="text-danger">{errors.last_name}</div>) : null}
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <button className="btn btn-primary px-4" disabled={isSubmitting} type="submit" onClick={handleSubmit}>Login</button>
                                    </div>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </Layout>
        </>
    )

}
export default Adduser;