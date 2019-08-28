import React, { useState, useEffect } from "react";
import { Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import {withRouter} from "react-router-dom";
import axios from "axios";


const SignupForm = ({ errors, touched, values, handleSubmit, status }) => {
  const [signup, setSignup] = useState([]);

  useEffect(() => {
    if (status) setSignup([...signup, status]);
  }, [status]);

  console.log(signup);


  return ( 

      <div className= "sign-up-page-container">

      <div className="form-intro">
    
    <h2> Let's ACE life together!"</h2>
     <h4>
     Sign up now for instant access to... </h4>
     <h5>1.0 Completely customizable tracking
     2.0 Expert advice and support
     3.0 Community challenges
     4.0 ..and much more!</h5>
 
 </div>

    <div className="signup-form">
      <h1>Join LifeGPA Today</h1>
      <Form>
        <div>
          First Name
          <Field type="text" name="first_name" placeholder="" />
          {touched.firstname && errors.firstname && (
            <p className="error">{errors.firstname}</p>
          )}
        </div>

        <div>
          Last Name
          <Field type="text" name="last_name" placeholder="" />
          {touched.lastname && errors.lastname && (
            <p className="error">{errors.lastname}</p>
          )}
        </div>

        <div>
          Enter E-mail Address
          <Field type="email" name="email" placeholder="" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div>
          Username
          <Field type="text" name="username" placeholder="" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </div>

        <div>
          Create a Password
          <Field 
            type="password"
            name="password"
            placeholder="Must be 7 characters long"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <div>
          Confirm Password
          <Field
            type="password"
            name="confirmPassword"
            placeholder=""
            text="Confirm Password"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <label className="checkbox-container">
          I accept the LifeGPA <a href="https://www.w3schools.com">terms of service</a> and <a href="https://www.w3schools.com">privacy policy.</a>
          <Field type="checkbox" name="tos" checked={values.tos} />
          <span className="checkmark" />
        </label>

        <div>
          <button type="submit"> Let's Get Started</button>
        </div>
      </Form>

      </div>

      {/* {signup.map(submitted => {
       
        return (
          <p 
          key=   {submitted.lastname}> Username: {submitted.username} Firstname: {submitted.firstname}    
            Email: {submitted.email} Password: {submitted.password} 
          </p>

        );
      })} */}

    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, email, password, confirmPassword, tos, first_name, last_name }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      tos: tos || false,
      first_name: first_name || "",
      last_name: last_name || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username required for account creation"),

    email: Yup.string().required(),

    password: Yup.string()
      .required()
      .min(7, "Seems a bit short, minimum of 7"),
      
    confirmPassword: Yup.string()
      .required("Please confirm password")
      .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.password === value}),

    tos: Yup.boolean()
        .oneOf([true], "Users must accept the Terms of Service"), 
  }),

  handleSubmit(values, {props}) {
    
    axios
      .post("https://lifegpa-api.herokuapp.com/auth/register", values)
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      })
      .catch(err => console.log(err.response));
  }
})(SignupForm);

export default FormikSignUpForm;
