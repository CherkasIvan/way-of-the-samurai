import { FC } from 'react';
import LoginReduxForm from './components/LoginForm';
import { Navigate } from 'react-router-dom';
import { ActiveRoutes } from '../../../../../../utils/enums/active-routes.enum';

interface ILoginProps {
  isAuth: boolean;
  captchaUrl: string | null;
  loginUser: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
}

const Login: FC<ILoginProps> = (props: any) => {
  const onSubmit = (formData: {
    EMAIL: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
  }) => {
    props.loginUser(
      formData.EMAIL,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
    console.log(formData);
  };

  if (props.isAuth) {
    return <Navigate to={ActiveRoutes.PROFILE}></Navigate>;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm
        onSubmit={onSubmit}
        {...props}
      />
    </div>
  );
};

export default Login;
