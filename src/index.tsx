import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offersData} from './mocks/offers-reviews';

export const Settings = {
  numberOfRentalOffers: 3,
  offers: offersData
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfRentalOffers={Settings.numberOfRentalOffers}
      offersData={Settings.offers}
    />
  </React.StrictMode>
);
