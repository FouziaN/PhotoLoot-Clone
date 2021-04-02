import {
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  FORGET_PASSWORD,
  RESET_PASSWORD,
} from './type';

const initialState = {
  email: '',
  password: '',
  forgetPassword: '',
  reset: '',
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {...state, ...action.payload};
    case UPDATE_PASSWORD:
      return {...state, ...action.payload};
    case FORGET_PASSWORD:
      return {...state, ...action.payload};
    case RESET_PASSWORD:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default Auth;
