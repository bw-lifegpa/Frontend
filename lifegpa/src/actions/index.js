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

export const fetchUser = (goal_id) => dispatch => {
    dispatch({ type: FETCH_GOAL_START });
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