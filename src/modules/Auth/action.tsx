import {
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  FORGET_PASSWORD,
  RESET_PASSWORD
} from './type';

export const updateEmail = (myEmail : string) => {
  return (dispatch : any ) => {
    dispatch({
      type: UPDATE_EMAIL,
      payload: {
        email : myEmail
      },
    });
  };
};

export const updatePassword = (newPassword : string) => {
  return (dispatch : any) => {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: {
        password : newPassword
      },
    });
  };
};

export const forgetPasswordEmail = (forgetEmail : string) => {
  return (dispatch : any) => {
    dispatch({
      type: FORGET_PASSWORD,
      payload: {
        forgetPassword : forgetEmail
      },
    });
  };
};

export const resetPassword = (password : string) => {
  return (dispatch : any) => {
    dispatch({
      type: RESET_PASSWORD,
      payload: {
        reset : password
      },
    });
  };
};




