import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_GOAL_START,
  FETCH_GOAL_SUCCESS,
  FETCH_GOAL_FAILURE,
  FETCH_USER_GOALS_START,
  FETCH_USER_GOALS_SUCCESS,
  FETCH_USER_GOALS_FAILURE,
  EDIT_DATA_START,
  EDIT_DATA_SUCCESS,
  EDIT_DATA_FAILURE,
  FETCH_COMPLETED_HABITS_START,
  FETCH_COMPLETED_HABITS_SUCCESS,
  FETCH_COMPLETED_HABITS_FAILURE,
  UPDATE_HABIT_ID
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
  description: '',
  habit_id: '',
  created_at: '',
  completed: [],
  user_goals: []
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_COMPLETED_HABITS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_COMPLETED_HABITS_SUCCESS:
      return {
        ...state,
        error: '',
        completed: action.payload,
        isFetching: false
      };
    case FETCH_COMPLETED_HABITS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FETCH_USER_START:
      return {
        ...state,
        error: '',
        isFetching: true
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
    case FETCH_USER_GOALS_START:
      return { ...state, error: '', isFetching: true };
    case FETCH_USER_GOALS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        user_goals: action.payload
      };
    case FETCH_USER_GOALS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case FETCH_GOAL_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_GOAL_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        error: '',
        goal_name: action.payload.name,
        description: action.payload.description,
        created_at: action.payload.created_at
      };
    case FETCH_GOAL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case EDIT_DATA_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case EDIT_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        id: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        goal_name: '',
        description: ''
      };
    case EDIT_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case UPDATE_HABIT_ID:
      return {
        ...state,
        habit_id: action.payload
      };
    default:
      return state;
  }
};
