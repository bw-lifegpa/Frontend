import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_GOAL_START,
    FETCH_GOAL_SUCCESS,
    FETCH_GOAL_FAILURE
} from '../actions';

const initialState = {
    isFetching: false,
    error: '',
    id: '',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    goal_name: '',
    description: ''
}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case FETCH_USER_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                id: action.payload.id,
                username: action.payload.username,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case FETCH_GOAL_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_GOAL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                goal_name: action.payload.name,
                description: action.payload.description
            };
        case FETCH_GOAL_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};