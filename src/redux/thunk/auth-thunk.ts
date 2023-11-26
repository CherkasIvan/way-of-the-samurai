import { stopSubmit } from 'redux-form';
import { authApi } from '../../api/api';
import { SetUserDataAC } from '../actions/actions';
import { IDispatch } from '../../utils/models/dispatch.type';


export const getMeTC = () => {
  return async (dispatch: IDispatch) => {
    const response = await authApi.getMe();
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(SetUserDataAC(id, email, login, true));
    }
  };
};

export const loginTC = (
  email: string,
  password: string,
  rememberMe: boolean
) => {
  return async (dispatch: any) => {
    const response = await authApi.login({ email, password, rememberMe });
    if (response.data.resultCode === 0) {
      dispatch(getMeTC());
    } else {
      const message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  };
};

export const logoutTC = () => {
  return async (dispatch: IDispatch) => {
    const response = await authApi.logout();
    if (response.data.resultCode === 0) {
      dispatch(SetUserDataAC(null, null, null, false));
    }
  };
};
