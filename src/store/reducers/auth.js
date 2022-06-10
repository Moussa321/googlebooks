import { SIGNUP } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  refreshToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
        refreshToken: action.refreshToken,
      };
    default:
      return state;
  }
};
