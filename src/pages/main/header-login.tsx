import { Link } from 'react-router-dom';

export default function HeaderLogin(): JSX.Element {
  return (
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active" to="/">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <div className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <Link className="header__user-name user__name" to="/favorites">Oliver.conner@gmail.com</Link>
                <span className="header__favorite-count">3</span>
              </div>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  );
}
