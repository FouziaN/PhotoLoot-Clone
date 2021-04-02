
import { combineReducers } from 'redux';
import AuthReducer from '../modules/Auth/reducer';
import ChangePasswordReducer from '../modules/ChangePassword/reducer';

export interface AppState{
  AuthReducer: any;
  ChangePasswordReducer: any;
}

export default combineReducers <AppState>({
  AuthReducer,
  ChangePasswordReducer
});
