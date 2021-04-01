
import { combineReducers } from 'redux';
import AuthReducer from '../modules/Auth/reducer';
import ChangePasswordReducer from '../modules/ChangePassword/reducer';



export default combineReducers ({
  AuthReducer,
  ChangePasswordReducer
});
