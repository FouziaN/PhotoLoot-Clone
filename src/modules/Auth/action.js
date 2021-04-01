import {
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  FORGET_PASSWORD,
  RESET_PASSWORD
} from './type';

export const updateEmail = (myEmail) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_EMAIL,
      payload: {
        email : myEmail
      },
    });
  };
};

export const updatePassword = (newPassword) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: {
        password : newPassword
      },
    });
  };
};

export const forgetPasswordEmail = (forgetEmail) => {
  return (dispatch) => {
    dispatch({
      type: FORGET_PASSWORD,
      payload: {
        forgetPassword : forgetEmail
      },
    });
  };
};

export const resetPassword = (password) => {
  return (dispatch) => {
    dispatch({
      type: RESET_PASSWORD,
      payload: {
        reset : password
      },
    });
  };
};




