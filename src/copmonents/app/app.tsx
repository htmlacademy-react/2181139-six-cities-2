import MainPage from '../../pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/main/favorite';
import Offers from '../../pages/main/offers';
import NotFound from '../../pages/not-found';
import PrivateRoute from '../private-root';

type AppScreenProps = {
  numberOfRentalOffers: number;
}

function App ({numberOfRentalOffers} : AppScreenProps) :JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage numberOfRentalOffers={numberOfRentalOffers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offers/>}
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

