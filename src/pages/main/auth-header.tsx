import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { auth } from '../../slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthHeader(): JSX.Element {

  const dispatch = useAppDispatch();
  const authData = useAppSelector((state) => state.auth.data);
  const authStatus = useAppSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth){
      navigate('/');
    }
  },[authStatus, authData]);
  function handler() {
    dispatch(auth.actions.requireAuthorization(AuthorizationStatus.NoAuth));
  }

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <div className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <Link className="header__user-name user__name" to="/favorites">{authData.email}</Link>
          <span className="header__favorite-count">3</span>
        </div>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span className="header__signout" onClick={handler}>Sign out</span>
        </a>
      </li>
    </ul>
  );
}
