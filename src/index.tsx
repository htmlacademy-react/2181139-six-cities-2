import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offersData, reviewsData} from './mocks/offers-mocks';
import { ReviewsTypes } from './types';

export const Settings = {
  numberOfRentalOffers: 3,
  offers: offersData,
  reviews: reviewsData as ReviewsTypes
} as const;

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
