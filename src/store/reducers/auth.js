import { SIGNUP, LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  refreshToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId,
        refreshToken: action.refreshToken,
      };
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
        refreshToken: action.refreshToken,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
