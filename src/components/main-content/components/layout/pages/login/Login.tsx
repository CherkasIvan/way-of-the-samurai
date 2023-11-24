import { FC } from 'react';
import LoginReduxForm from './components/LoginForm';
import { ILoginPage } from '../../../../../../utils/models/login-page.interface';
import { Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../../../utils/enums/active-routes.enum';

interface ILoginProps {
  addMessageTextHandler: (message: string) => void;
  loginPage: ILoginPage;
  isAuth: boolean;
  loginUser: (email: string, password: string, rememberMe: boolean) => void;
  logoutUser: () => void;
}

const Login: FC<ILoginProps> = ({ loginUser, isAuth }) => {
  const onSubmit = (formData: any) => {
    loginUser(formData.EMAIL, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Navigate to={ActiveRoutes.PROFILE}></Navigate>;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
