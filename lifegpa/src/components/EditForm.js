import React, { useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';

const initialGoal = {
    goal: '',
    newGoal: { updateGoal:'' }
}
const EditForm =({goals, updateChallenge},{ errors, touched }) => {
    const [editing, setEditing] = useState(false);
    const [goalToEdit, setGoalToEdit] = useState(initialGoal);
    console.log('goals', goals);

    const editColor = goal => {
        setEditing(true);
        setGoalToEdit(goal);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth()
            .put(`https://lifegpa-api.herokuapp.com/edit-goal/${goalToEdit.id}`, goalToEdit)
            .then(res => {
                console.log('save edit', res);
                goals.map(goal => {
                    if(goal.id === res.data.id){
                        return res.data;
                    }else{
                        return goal;
                    }
                })
            })
            .catch(eer => console.log(eer.message));
    };
    return(
        <div className='edit-page'>
            <h2 className='edit-header'>Edit Me!</h2>
            <Form className='edit-form-field' >
                <div className='edit-form-field'>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    Username or Email: 
                    <Field type= 'text' name='edit' />
                </div>
                <button className='button' type='submit'>Get To Tracking</button>
            </Form>

        </div>
    )
}

const FormikLogin = withRouter(withFormik({
    mapPropsToValues({ username }){
        return{
            username: username || '',
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required('username is required'),
        
    }),
    handleSubmit(users, {props}){
        axios.post('https://lifegpa-api.herokuapp.com/auth/', users)
        .then(res => {
            console.log('edit form', res)
            localStorage.setItem('token', res.data.token)
            props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }
})(Login));

export default FormikLogin