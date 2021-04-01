import {
  CURRENT_PASSWORD,
  NEW_PASSWORD,
  CONFIRM_NEW_PASSWORD
} from './type';

const initialState = {
  currentPass: '',
  newPass: '',
  confirmPass: '',
};

const ChangePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PASSWORD:
      return {...state, ...action.payload};
    case CONFIRM_NEW_PASSWORD:
      return {...state, ...action.payload};
    case CURRENT_PASSWORD:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default ChangePasswordReducer;
