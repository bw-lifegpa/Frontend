import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import * as yup from 'yup';

import './login.css'

function Login({ errors, touched }) {
    return(
        <div className='login-page'>
            <h2 className='login-header'>Welcome Back!</h2>
            <Form className='login-form-field' >
                <div className='form-field'>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    Username or Email: 
                    <Field type= 'username' name='username' placeholder='Username' />
                </div>
                <div className='form-field'>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    Password: 
                    <Field type= 'password' name='password' placeholder='Password' />
                    </div>
                <button className='button' type='submit'>Get Ro Tracking</button>

            </Form>

        </div>
    )
}

const FormikLogin = withRouter(withFormik({
    mapPropsToValues({ username, password }){
        return{
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required('username is required'),
        password: yup.string().required('password is required'),
        
    }),
    handleSubmit(users, {props}){
        axios.post('')
    }
})(Login));

export default FormikLogin