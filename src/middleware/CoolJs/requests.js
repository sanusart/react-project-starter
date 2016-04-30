import * as ACTIONS from '../../actions/CoolJs/actionTypes';

export default function getServerData({
  getState,
  dispatch
}) {
  return (next) => (action) => {

    const nextAction = next(action);
    const currentState = getState();

    if (action.type === ACTIONS.API_CALL) {
      let {
        username
      } = action;
      let URLs = [
        `https://api.github.com/users/${username}`,
        `https://api.github.com/users/${username}/repos`
      ];
      // NOTE! Using fetch and native Promise APIs are not supported in old browsers,
      // It is here only for demo
      Promise.all(
          URLs.map(url => fetch(url).then(resp => resp.json()))
        )
        .then(result => dispatch({
          type: ACTIONS.API_RESPONSE,
          result
        }))
        .catch(reason => console.log(`Handle rejected promise (${reason}) here.`));

    }
    return nextAction;
  };
}
