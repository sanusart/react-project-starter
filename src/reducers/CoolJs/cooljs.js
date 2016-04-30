import * as ACTIONS from '../../actions/CoolJs/actionTypes';

const initialState = {
  appName: 'GitHub user repos',
  user: [{}],
  res: []
};

module.exports = (state = initialState, action) => {

  let prevState = state;
  let newState = {};

  switch (action.type) {

    case ACTIONS.LOG: {
      return Object.assign({}, prevState);
    }

    case ACTIONS.API_RESPONSE: {
      prevState.user.splice(0,1,action.result[0]);
      // prevState.user = action.result[0];
      prevState.res = action.result[1];
      return Object.assign({}, prevState);
    }

    default: {
      return state;
    }
  }

};
