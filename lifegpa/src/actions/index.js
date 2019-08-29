import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const fetchUser = (user_id) => dispatch => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
    .get (`https://lifegpa-api.herokuapp.com/users/${user_id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCH_USER_FAILURE, payload: "Unable to load User"})
    });
}
export const FETCH_GOAL_START = 'FETCH_GOAL_START';
export const FETCH_GOAL_SUCCESS = 'FETCH_GOAL_SUCCESS';
export const FETCH_GOAL_FAILURE = 'FETCH_GOAL_FAILURE';

export const fetchGoal = (goal_id) => dispatch => {
    dispatch({ type: FETCH_GOAL_START })
    axiosWithAuth()
    .get(`https://lifegpa-api.herokuapp.com/habits/${goal_id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_GOAL_SUCCESS, payload: res.data })
        .catch(err => {
            dispatch({ type: FETCH_GOAL_FAILURE, payload: "Unable to load Goal"})
        });
    })
 }

export const EDIT_DATA_START = 'EDIT_DATA_START';
export const EDIT_DATA_SUCCESS = 'EDIT_DATA_SUCCESS';
export const EDIT_DATA_FAILURE = 'EDIT_DATA_FAILURE';

export const editGoal = (id, editGoal, user_id, habit_id ) => dispatch => {
    dispatch({ type: EDIT_DATA_START })
    axiosWithAuth()
        .put(`https://lifegpa-api.herokuapp.com/${user_id}/${habit_id}`, editGoal)
        .then(res => {
            console.log(res)
            dispatch({ type: EDIT_DATA_SUCCESS, })

        })
        .catch(err => {
            console.log(err)
            dispatch({ type: EDIT_DATA_FAILURE, payload: err })
        })
}