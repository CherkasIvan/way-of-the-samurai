import { StoreEnum } from '../../utils/enums/store.enum';
import { IAction } from '../../utils/models/action.interface';
import { IAuth } from '../../utils/models/auth.interface';

const initialState: IAuth = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state: IAuth = initialState, action: IAction): IAuth => {
  switch (action.type) {
    case StoreEnum.SET_USER_DATA:
    case StoreEnum.GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};

export default authReducer;
