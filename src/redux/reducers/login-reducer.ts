import { ILoginPage } from '../../utils/models/login-page.interface';

const initialState: ILoginPage = {
  email: '',
  password: '',
  rememberMe: false
};

const loginReducer = (
  state: ILoginPage = initialState,
): ILoginPage => {
  return state;
};

export default loginReducer;
