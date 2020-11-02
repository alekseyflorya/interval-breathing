import axios from 'axios';
import { GET_PARAMS, EDIT_PARAMS, PARAMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getParams = () => dispatch => {
  dispatch(setParamsLoading());
  axios
    .get('/api/params')
    .then(res =>
      dispatch({
        type: GET_PARAMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editParams = item => (dispatch, getState) => {
  axios
    .post('/api/params', item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: EDIT_PARAMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setParamsLoading = () => {
  return {
    type: PARAMS_LOADING
  };
};
