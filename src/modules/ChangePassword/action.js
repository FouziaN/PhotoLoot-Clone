import {
    CURRENT_PASSWORD,
    NEW_PASSWORD,
    CONFIRM_NEW_PASSWORD
  } from './type';

export const updateCurrentPassword = (currentPassword) => {
  return (dispatch) => {
    dispatch({
      type: CURRENT_PASSWORD,
      payload: {
        currentPass: currentPassword,
      },
    });
  };
};

export const updateNewPassword = (passwordNew) => {
  return (dispatch) => {
    dispatch({
      type: NEW_PASSWORD,
      payload: {
        newPass: passwordNew,
      },
    });
  };
};

export const updateConfirmNewPassword = (confirmPassword) => {
  return (dispatch) => {
    dispatch({
      type: CONFIRM_NEW_PASSWORD,
      payload: {
        confirmPass: confirmPassword,
      },
    });
  };
};

