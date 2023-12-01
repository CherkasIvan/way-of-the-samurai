import { stopSubmit } from 'redux-form';
import { authApi, securityApi } from '../../api/api';
import { GetCaptchaUrlSuccessAC, SetUserDataAC } from '../actions/actions';
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
  rememberMe: boolean,
  captcha: string
) => {
  return async (dispatch: any) => {
    const response = await authApi.login({
      email,
      password,
      rememberMe,
      captcha
    });
    if (response.data.resultCode === 0) {
      dispatch(getMeTC());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaTC());
      }
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

export const getCaptchaTC = () => {
  return async (dispatch: IDispatch) => {
    const getCaptchaUrl = '/security/get-captcha-url';
    const response = await securityApi.getCaptchaUrl(getCaptchaUrl);
    const captchaUrl = response.data.url;
    dispatch(GetCaptchaUrlSuccessAC(captchaUrl));
  };
};
