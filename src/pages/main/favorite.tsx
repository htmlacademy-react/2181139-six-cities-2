import HeaderLogin from './header-login';
import { OffersTypes } from '../../types';
// import OneCard from '../../components/one-card';
// import { offersData } from '../../mocks/offers-reviews';
import FavCards from '../../components/fav-card';

type FavoritesProps = {
  offersData: OffersTypes;
}

function Favorites({offersData} : FavoritesProps) : JSX.Element{
  const allOffers = offersData;
  return (
    <div>
      <HeaderLogin/>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {allOffers.map((offer) => <li className="favorites__locations-items" key={offer.id}> <FavCards key={offer.id} offers={offer}/></li>)}
          </ul>
        </section>
      </div>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
