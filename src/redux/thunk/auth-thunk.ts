import { authApi } from '../../api/api';
import { SetUserDataAC } from '../actions/actions';

export const getMeTC = () => {
  return (dispatch: any) => {
    authApi.getMe().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(SetUserDataAC(id, email, login, true));
      }
    });
  };
};

export const loginTC = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: any) => {
    authApi.login({ email, password, rememberMe }).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getMeTC());
      }
    });
  };
};

export const logoutTC = () => {
  return (dispatch: any) => {
    authApi.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(SetUserDataAC(null, null, null, false));
      }
    });
  };
};
