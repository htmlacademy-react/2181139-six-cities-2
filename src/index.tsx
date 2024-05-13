import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from './api';
import { fetchOffersAction, checkAuthAction } from './async-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

type SettingsType = {
  numberOfRentalOffers: number;
}

export const Settings: SettingsType = {
  numberOfRentalOffers: 3,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
      <App
        numberOfRentalOffers={Settings.numberOfRentalOffers}
      />
    </Provider>
  </React.StrictMode>
);
