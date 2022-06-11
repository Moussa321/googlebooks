export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRToXJUk_ptDhDnDJVDk4Gp9JUEE7v5wE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "An account with this email already exists";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    dispatch({
      type: SIGNUP,
      token: resData.idToken,
      userId: resData.localId,
      refreshToken: resData.refreshToken,
    });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRToXJUk_ptDhDnDJVDk4Gp9JUEE7v5wE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (email.length === 0) {
        message = "Email can not be empty";
      } else if (password.length === 0) {
        message = "Password can not be empty";
      } else if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid!";
      }
      throw new Error(message);
    }

    const resData = await response.json();
    dispatch({
      type: LOGIN,
      token: resData.idToken,
      userId: resData.localId,
      refreshToken: resData.refreshToken,
    });
  };
};

export const loginGoogle = (googleId, accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN,
      token: accessToken,
      userId: googleId,
      refreshToken: null,
    });
  };
};
export const logout = () => {
  return { type: LOGOUT };
};
