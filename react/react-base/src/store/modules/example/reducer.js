const initialState = {
  botaoClicado: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    default:
      return state;
  }
};
