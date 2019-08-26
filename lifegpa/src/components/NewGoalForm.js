import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function NewGoalForm({ errors, touched, isSubmitting }) {

    return (
      <div className="container">
      <Form>
        <label>Add a new goal:</label>
        <fieldset>
        <div>
        <label>Name your goal:</label><div>{" "}</div>
          {touched.goal && errors.goal && <p>{errors.goal}</p>}
          <Field type="text" name="goal" placeholder="Goal..." />
        </div>
        <div>
        <label>Describe your goal:</label><div>{" "}</div>
          {touched.description && errors.description && <p>{errors.description}</p>}
          <Field type="textarea" name="description" placeholder="Description..." />
        </div>
        <div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
        </div>
        </fieldset>
      </Form>
      </div>
    );
  }
  
  const FormikNewGoalForm = withFormik({
    mapPropsToValues({ goal, description }) {
      return {
        goal: goal || "",
        description: description || ""
      };
    },
    validationSchema: Yup.object().shape({
      goal: Yup.string()
        .min(2, "Goal name must be at least 2 characters")
        .max(25, "Goal name cannot be longer than 25 characters")
        .required("Goal name is required"),
      description: Yup.string()
        .min(2, "Description must be at least 2 characters")
        .max(150, "Description cannot be longer than 150 characters")
        .required("Description is required"),
    }),
    handleSubmit(values, { resetForm, setSubmitting }) {
        console.log(values);
        resetForm();
        setSubmitting(false);
    // axios
    //     .post("#", values)
    //     .then(res => {
    //     console.log('Goal added!', res);
    //     setStatus(res.data);
    //     resetForm();
    //     setSubmitting(false);
    //     })
    //     .catch(err => {
    //     console.log('Request failed', err);
    //     setSubmitting(false);
    //     });
    }
  })(NewGoalForm);
  
  export default FormikNewGoalForm;