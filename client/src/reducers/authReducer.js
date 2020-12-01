import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  EDIT_PARAMS,
  EDIT_SUCCESS,
  EDIT_FAIL
} from '../actions/types';

const initialState = localStorage.setParams ? JSON.parse(localStorage.setParams) : {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  isAuthenticated: null,
  isLoading: false,
  user: {
    _id: null,
    name: null,
    email: null,
    params: {
      inhale: 2,
      delay: 3,
      exhale: 2,
      pause: 4,
      colour: '#010a1c',
      figure: 0,
      isVideo: true,
      video: 3,
      audio: {
        trackType: 'audio',
        trackId: 1
      },
      volume: 0.8,
      mutedSound: 0.8 * 100,
      useSuggestedRhythms: true,
      suggestedRhythm: 1
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      localStorage.setItem('setParams', JSON.stringify(state))
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('setParams', JSON.stringify(state))
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      localStorage.setItem('setParams', JSON.stringify({
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      }))
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case EDIT_PARAMS:
    case EDIT_SUCCESS:
      localStorage.setItem('setParams', JSON.stringify(state))
      return {
        ...state,
        ...action.payload
      }
    case EDIT_FAIL:
      localStorage.setItem('setParams', JSON.stringify(state))
      return {
        ...state
      }
    default:
      localStorage.setItem('setParams', JSON.stringify(state))
      return state;
  }
}
