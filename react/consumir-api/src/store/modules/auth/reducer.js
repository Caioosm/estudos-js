import * as type from '../types';

const initialState = {
  botaoClicado: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_REQUEST_SUCCESS:
      console.log('LOGIN SUCCESS');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    case type.LOGIN_REQUEST_FAILURE:
      console.log('LOGIN FAILURE');
      return state;

    case type.LOGIN_REQUEST:
      console.log('LOGIN REQUEST');
      return state;

    default:
      return state;
  }
};
