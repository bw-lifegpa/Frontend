import React from 'react';
import { withFormik, Form, Field } from "formik";
import { withRouter } from 'react-router-dom';
import * as Yup from "yup";
import { axiosWithAuth } from '../utilities/axiosWithAuth'

import Header from './Header';
import Footer from './Footer';

function NewGoalForm({ values, errors, touched, isSubmitting }) {

    return (
      <div className="container">
      <Header/>
      <Form>
        <label>Create a Goal</label>
        <div className="goal-name">
          {touched.name && errors.name && <p>{errors.name}</p>}
          <Field type="text" name="name" placeholder="Goal Name" />
        </div>
        {/* <div className="category">
          {touched.category && errors.category && <p>{errors.category}</p>}
          <Field component="select" name="category">
            <option value=''>Goal Category</option>
            <option value='exercise'>Exercise</option>
            <option value='health'>Health</option>
            <option value='sleep'>Sleep</option>
            <option value='housekeeping'>Housekeeping</option>
            <option value='family'>Family</option>
            <option value='dating'>Dating</option>
            <option value='school'>School</option>
          </Field>
        </div> */}
        <div className="description">
          {touched.description && errors.description && <p>{errors.description}</p>}
          <Field component="textarea" rows='10' cols='70' name="description" placeholder="Description (optional)" />
        </div>
        {/* {/* <div className="start-date">
        <label>Start Date:</label><div/>
          <Field component="input" type="date" name="start_date"/>
        </div>
        <div className="end-date">
        <label>End Date:
        <label>
          <Field id="edc" type="checkbox" name="end_date_check" checked={values.end_date_check}/>
          Would you like to pre-schedule an end date?</label>
        <div/>
        <Field id="enddate" component="input" type="date" name="end_date" disabled={!values.end_date_check}/>
        </label>
        </div> */}
        <div>
        <button type="submit" disabled={isSubmitting}>Create Goal</button>
        </div>
      </Form>
      <Footer/>
      </div>
    );
  }
  
  const FormikNewGoalForm = withRouter(withFormik({
    mapPropsToValues({ name, description }) {
      return {
        name: name || "",
        // category: category || "",
        description: description || ""
        // start_date: start_date || "",
        // end_date_check: end_date_check || false,
        // end_date: end_date || ""
      };
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Goal name must be at least 2 characters")
        .max(25, "Goal name cannot be longer than 25 characters")
        .required("Goal name is required"),
      description: Yup.string()
        .required('Description is required')
      // category: Yup.string()
      //   .required("Category is required"),
      // start_date: Yup.date()
      //   .required("Start Date is required")
    }),
    handleSubmit(values, { props }) {
      const valuesAndID = {
        ...values,
        user_id: props.match.params.id
      };
      console.log(valuesAndID)
    axiosWithAuth()
        .post(`https://lifegpa-api.herokuapp.com/habits`, valuesAndID)
        .then(res => {
        props.history.push(`/goals/${props.match.params.id}`)
        })
        .catch(err => {
        console.log('Request failed', err);
        });
    }
  })(NewGoalForm));
  
  export default FormikNewGoalForm;