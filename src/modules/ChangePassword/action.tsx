import {
    CURRENT_PASSWORD,
    NEW_PASSWORD,
    CONFIRM_NEW_PASSWORD
  } from './type';

export const updateCurrentPassword = (currentPassword : string) => {
  return (dispatch : any) => {
    dispatch({
      type: CURRENT_PASSWORD,
      payload: {
        currentPass: currentPassword,
      },
    });
  };
};

export const updateNewPassword = (passwordNew : string) => {
  return (dispatch : any) => {
    dispatch({
      type: NEW_PASSWORD,
      payload: {
        newPass: passwordNew,
      },
    });
  };
};

export const updateConfirmNewPassword = (confirmPassword : string) => {
  return (dispatch : any) => {
    dispatch({
      type: CONFIRM_NEW_PASSWORD,
      payload: {
        confirmPass: confirmPassword,
      },
    });
  };
};

