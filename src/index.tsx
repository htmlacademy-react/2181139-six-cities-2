import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offersData, reviewsData} from './mocks/offers-mocks';
import { ReviewsType, OffersTypes } from './types';

type SettingsType = {
  numberOfRentalOffers: number;
  offers: OffersTypes;
  reviews: ReviewsType[];
}

export const Settings: SettingsType = {
  numberOfRentalOffers: 3,
  offers: offersData,
  reviews: reviewsData,
} ;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfRentalOffers={Settings.numberOfRentalOffers}
      offersData={Settings.offers}
      reviewsData={Settings.reviews}
    />
  </React.StrictMode>
);
