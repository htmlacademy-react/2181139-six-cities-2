import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { NameSpace } from '../const';
import { useSelector } from 'react-redux';
import { State } from '../types';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;

  const stateAuthStatus = useSelector((state: State) => state[NameSpace.Auth].status);

  return (
    stateAuthStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
