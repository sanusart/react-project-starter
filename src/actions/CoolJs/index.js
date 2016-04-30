import * as ACTION from './actionTypes';

export function log(parameter) {
  return {
    type: ACTION.LOG,
    parameter
  };
}

export function api_call(username) {
  return {
    type: ACTION.API_CALL,
    username
  };
}

export function api_response(parameter) {
  return {
    type: ACTION.API_RESPONSE,
    parameter
  };
}
