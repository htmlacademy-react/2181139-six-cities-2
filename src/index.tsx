import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersData, } from './mocks/offers-mocks';
import { OffersTypes, ReviewsTypes } from './types';
import { Provider } from 'react-redux';
import { store } from './store';

const reviewsData: ReviewsTypes = [
  {
    id: 134,
    avatar: 'img/avatar.svg',
    name: 'Alex',
    raiting: 3434,
    date: 14072020,
    text: 'good choice',
  },
  {
    id: 567,
    avatar: 'img/avatar.svg',
    name: 'Leo',
    raiting: 3474,
    date: 14020,
    text: 'bad choice',
  },
  {
    id: 76,
    avatar: 'img/avatar.svg',
    name: 'Ramy',
    raiting: 3554,
    date: 14074420,
    text: 'good choice',
  },
  {
    id: 78,
    avatar: 'img/avatar.svg',
    name: 'Moty',
    raiting: 994,
    date: 1436320,
    text: 'good choice',
  }


];


type SettingsType = {
  numberOfRentalOffers: number;
  offers: OffersTypes;
  reviews: ReviewsTypes;
}

export const Settings: SettingsType = {
  numberOfRentalOffers: 3,
  offers: offersData,
  reviews: reviewsData,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        numberOfRentalOffers={Settings.numberOfRentalOffers}
        offersData={Settings.offers}
        reviewsData={Settings.reviews}
      />
    </Provider>
  </React.StrictMode>
);
