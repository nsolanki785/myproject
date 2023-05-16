import React, { useState, } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import {loginValidation} from "../../validations"
import { Formik } from "formik";



const Login = () => {
    const navigate = useNavigate();
    // const [formData,setFormdata] = useState({})
    // const [useremail,setemail] = useState('')
    // const [userpassword,setpassword] = useState('')
    
    // const handleChange = (e) => {
    //     setFormdata({...formData , [e.target.name]: e.target.value})
    // }
    const data = JSON.parse(localStorage.getItem('data'))
    const handleSubmit = ({values,setSubmitting}) => {
        for (let i of data) {
            if(values.email.match(i.email) && values.password.match(i.password)) {
               localStorage.setItem('secretkey',i.id)
                window.location.replace('./users')
                // window.location.reload('./users')
                // window.open('./users')
            }
          //   else  {
          //     count = count + 1
          //     if (count === user.length) {
          //     setError('password', 'Invalid User')  
          //     }
          //   }
          }
          setSubmitting(false)
    }
    return (
     
        <div className="container">
            <div className="form-container">
                {/* <form name="loginForm" onSubmit={()=>handleSubmit()}>
                    <h1>Login</h1>
                    <input className="input-field" type="text" onChange={(e)=>setemail(e.target.value)} name="username" placeholder="Username" /><br /><br />
                    <span className="error-alert" id="username"></span>
                    <input className="input-field" type='password' onChange={(e)=>setpassword(e.target.value)} name="password" placeholder="Password" /><br /><br />
                    <span className="error-alert" id="password"></span>
                    <button  className = "add-btn" type="submit">Login</button>
                </form> */}
                <h1>Login</h1>  
                <Formik initialValues={{
                    email: '',
                    password:'',
                 }}
                    validationSchema={loginValidation}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values, setSubmitting)
                    }}
                >
                    {({ errors, touched, handleChange, handleBlur, values, onSubmit, handleSubmit, isSubmitting }) => {
                        return (

                            <form handleSubmit={onSubmit}>
                                <div>
                                    <input
                                        className="input-field "
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                                {touched.email && errors.email ? (<div className="text-danger">{errors.email}</div>) : null}
                              
                                 <div>
                                    <input
                                        className="input-field"
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </div>
                                 {touched.password && errors.password ? (<div className="text-danger">{errors.password}</div>) : null}
                            <button className="add-btn" disabled={isSubmitting} type="submit" onClick={handleSubmit}>Login</button>
                                 
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>

    )
}
export default Login;