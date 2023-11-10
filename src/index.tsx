import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './copmonents/app/app';

export const Settings = {
  numberOfRentalOffers: 3
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfRentalOffers={Settings.numberOfRentalOffers}
    />
  </React.StrictMode>
);
