import React from 'react';
import axios from 'axios';
import { Form, Field, Formik, ErrorMessage } from 'formik';

const EditForm =({user, updateUser, onClose }) => {
        // axiosWithAuth()
        //     .put(`https://lifegpa-api.herokuapp.com/edit-goal/${goalToEdit.id}`, goalToEdit)
        //     .then(res => {
        //         console.log('save edit', res);
        //         goals.map(goal => {
        //             if(goal.id === res.data.id){
        //                 return res.data;
        //             }else{
        //                 return goal;
        //             }
        //         })
        //     })
        //     .catch(eer => console.log(eer.message));
    return(
        <div className='edit-page' onSubmit={saveEdit}>
            <Dialog onClose={onClose}>
                <h2 className='edit-header'>Edit Me!</h2>
                <Formik    
                className='edit-form-field'
                onSubmit={(values, actions) => {
                axios.post(`https://lifegpa-api.herokuapp.com/goals/${user.id}`, values)
                    .then( updateUser => {
                        actions.setSubmitting(false);
                        updateUser(updateUser);
                        onClose();
                    },
                    err => {
                        actions.setSubmitting(false);
                        actions.setErrors(transformMyRestApiErrorsToAnObject(err));
                        actions.setStatus({msg:'set some arbitrary status or data'})
                    }
                    );
                }}
                render={({ errors, touched, isSubmitting }) => (
                    <Form>
                        <Field type= 'text' name='edit' />
                        <ErrorMessage name='edit' component='div'>
                        </ErrorMessage>
                        {touched.username && errors.username && <p>{errors.username}</p>}
                        Username or Email: 
                    <button className='button' type='submit' disable={isSubmitting}>Save</button>

                    </Form>
                )}
                />

            </Dialog>

        </div>
    )
}

// const FormikEditForm = withRouter(withFormik({
//     mapPropsToValues({ username }){
//         return{
//             username: username || '',
//         };
//     },
//     validationSchema: yup.object().shape({
//         username: yup.string().required('username is required'),
        
//     }),
//     handleSubmit(users, {props}){
//         axios.post('https://lifegpa-api.herokuapp.com/auth/', users)
//         .then(res => {
//             console.log('edit form', res)
//             localStorage.setItem('token', res.data.token)
//             props.history.push('/dashboard')
//         })
//         .catch(err => console.log(err))
//     }
// })(EditForm));

// export default FormikEditForm;