import * as type from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_REQUEST:
      return state;

    default:
      return state;
  }
};
