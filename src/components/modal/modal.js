import React from "react";
import './modal.css'
import { Formik } from "formik";
// import adduserValidation from "../../validations";
import { Button, Typography ,Grid} from "@mui/material";

const EditModal = ({showmodal,setfilterdata,setshowmodal,Editindex,filterdata}) => {
   const handleEdituser = (values, setSubmitting) => {
    const EditData = { id :filterdata[Editindex].id,...values}
    const updateData = JSON.parse(localStorage.getItem('data'))
    updateData.splice(Editindex,1,EditData)
    setfilterdata(updateData)
    localStorage.setItem('data',JSON.stringify(updateData))
       setSubmitting(false)
       setshowmodal(false)
  }
   return(
    <>
    {showmodal &&
        <div className="modalcontainer">  
           <button className="clase-btn" onClick={()=>setshowmodal(false)}> <span aria-hidden="true">&times;</span></button>
           <Typography mb={2} variant="subtitle">EDIT USER DETAILS</Typography> 
           <Formik initialValues={{
                    email: filterdata[Editindex].email,
                    first_name: filterdata[Editindex].first_name,
                    last_name:filterdata[Editindex].last_name,
                    // userIMGurl :''
                 }}
                    // validationSchema={adduserValidation}
                    onSubmit={(values, { setSubmitting }) => {
                        handleEdituser(values, setSubmitting)
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
                               
                                {/* <div className="input-group mt-3">
                                    <input
                                        className="form-control"
                                        name="userIMGurl"
                                        type="userIMGurl"
                                        placeholder="userIMGurl"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userIMGurl}
                                    />
                                </div> */}
                                {/* {touched.last_name && errors.last_name ? (<div className="text-danger">{errors.last_name}</div>) : null} */}

                                <div className="row mt-3">
                                    <div className="col-6">
                                        <button className="btn btn-primary px-4" disabled={isSubmitting} type="submit" onClick={handleSubmit}>Edit User Data </button>
                                    </div>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
        </div>
    }
    </>
   )  
}
export default EditModal;