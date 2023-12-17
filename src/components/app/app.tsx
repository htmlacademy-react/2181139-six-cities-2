import MainPage from '../../pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/main/favorite';
import Offer from '../../pages/main/offer.tsx';
import NotFound from '../../pages/not-found';
import PrivateRoute from '../private-root';
import { OffersTypes } from '../../types.ts';

type AppScreenProps = {
  numberOfRentalOffers: number;
  offersData: OffersTypes;
}

function App ({numberOfRentalOffers, offersData} : AppScreenProps) :JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage numberOfRentalOffers={numberOfRentalOffers} offersData={offersData} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offersData={offersData} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer offer={offersData[0]}/>}
        />
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

