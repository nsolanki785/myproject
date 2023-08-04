import React from "react";
import Layout from "../components/layout";
// import { Adduserdata } from "../api/api";
import {adduserValidation} from "../validations"
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
    const navigate = useNavigate()
   
    const handleadduser = (values, setSubmitting) => {
        console.log('values',values)
        // alert()
        // Adduserdata({ email: values.email, first_name: values.first_name,last_name:values.last_name })
        //     .then(response => {
        //         console.log("response",response);
        //         setSubmitting(false)
        //     })
        if (localStorage.getItem('data')== null) {
            localStorage.setItem('data','[]');
          }
          let old_data = JSON.parse(localStorage.getItem('data'))
        console.log('old',old_data.length)
        
         let id = old_data.length>0 && old_data[old_data.length - 1].id   || 0; 
         id++      
          old_data.push({id,...values})
          localStorage.setItem('data',JSON.stringify(old_data))
        
          setSubmitting(false)
          navigate('/users')
    }

    return (
        <>
            <Layout>
                <h1>Adduser</h1>
                <Formik initialValues={{
                    email: '',
                    first_name: '',
                    last_name:'',
                    password:'',
                    confirmpassword:'',
                    userIMGurl :''
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
                               
                                <div className="input-group mt-3">
                                    <input
                                        className="form-control"
                                        name="userIMGurl"
                                        type="userIMGurl"
                                        placeholder="userIMGurl"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userIMGurl}
                                    />
                                </div>
                                 {/* {touched.last_name && errors.last_name ? (<div className="text-danger">{errors.last_name}</div>) : null} */}

                                 <div className="input-group mt-3">
                                    <input
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </div>
                                 {touched.password && errors.password ? (<div className="text-danger">{errors.password}</div>) : null}
                
                                 <div className="input-group mt-3">
                                    <input
                                        className="form-control"
                                        name="confirmpassword"
                                        type="password"  
                                        placeholder="confirmpassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmpassword}
                                    />
                                </div>
                                 {touched.confirmpassword && errors.confirmpassword ? (<div className="text-danger">{errors.confirmpassword }</div>) : null}


                                <div className="row mt-3">
                                    <div className="col-6">
                                        <button className="btn btn-primary" disabled={isSubmitting} type="submit" onClick={handleSubmit}>Add User</button>
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