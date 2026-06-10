import * as types from '../types';

export function login_request(){
  return {
      type: types.LOGIN_REQUEST,
  };
}

export function login_request_success(){
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
  };
}

export function login_request_failure(){
  return {
    type: types.LOGIN_REQUEST_FAILURE,
  };
}
