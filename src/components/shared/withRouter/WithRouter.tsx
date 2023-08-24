import { useLocation, useNavigate, useParams } from 'react-router-dom'

export function WithRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}
