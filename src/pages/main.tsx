import CardsList from '../components/cards-list.tsx';
import { OffersTypes } from '../types.ts';
import HeaderLogin from './main/header-login.tsx';
import { useState } from 'react';
import Map from './map.tsx';
import CitiesList from '../cities-list.tsx';

const citiesAll = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

type MainPageProps = {
  numberOfRentalOffers: number;
  offersData: OffersTypes;
}

function MainPage({ numberOfRentalOffers, offersData }: MainPageProps): JSX.Element {

  const [, setActiveCard] = useState<number>(offersData[0].id);
  const handler = (id: number) => setActiveCard(id);

  return (

    <div>
      <div className="page page--gray page--main">
        <header className="header">
          <HeaderLogin />
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">

              <CitiesList cities={citiesAll} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{numberOfRentalOffers} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <CardsList onMouseEnter={handler} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
