import React from 'react';
import { withFormik, Form, Field } from "formik";
import { withRouter } from 'react-router-dom';
import * as Yup from "yup";
import axiosWithAuth from '../utilities/axiosWithAuth'

function NewGoalForm({ values, errors, touched, isSubmitting }) {

    return (
      <div className="container">
      <Form>
        <label>Create a Goal</label>
        <div className="goal-name">
          {touched.goal && errors.goal && <p>{errors.goal}</p>}
          <Field type="text" name="goal" placeholder="Goal Name" />
        </div>
        <div className="category">
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
        </div>
        <div className="description">
          {touched.description && errors.description && <p>{errors.description}</p>}
          <Field component="textarea" rows='10' cols='70' name="description" placeholder="Description (optional)" />
        </div>
        <div className="start-date">
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
        </div>
        <div>
        <button type="submit" disabled={isSubmitting}>Create Goal</button>
        </div>
      </Form>
      </div>
    );
  }
  
  const FormikNewGoalForm = withRouter(withFormik({
    mapPropsToValues({ goal, category, description, start_date, end_date_check, end_date }) {
      return {
        goal: goal || "",
        category: category || "",
        description: description || "",
        start_date: start_date || "",
        end_date_check: end_date_check || false,
        end_date: end_date || ""
      };
    },
    validationSchema: Yup.object().shape({
      goal: Yup.string()
        .min(2, "Goal name must be at least 2 characters")
        .max(25, "Goal name cannot be longer than 25 characters")
        .required("Goal name is required"),
      category: Yup.string()
        .required("Category is required"),
      start_date: Yup.date()
        .required("Start Date is required")
    }),
    handleSubmit(values, { props }, { setSubmitting }) {
    axiosWithAuth()
        .post(`/users/${props.match.params.id}/habits`, values)
        .then(res => {
        console.log(res.message);
        setSubmitting(false);
        props.history.push('/dashboard')
        })
        .catch(err => {
        console.log('Request failed', err);
        setSubmitting(false);
        });
    }
  })(NewGoalForm));
  
  export default FormikNewGoalForm;