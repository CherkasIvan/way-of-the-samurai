import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const WithRouter = (Component: React.ElementType) => {
  const ComponentWithRouterProp = (props: any) => {
    console.log(props);
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  };

  return ComponentWithRouterProp;
};
