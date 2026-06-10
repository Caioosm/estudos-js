import * as type from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    }

    case type.LOGIN_FAILURE:
      const newState = { ...initialState };
      return newState;

    default:
      return state;
  }
};
