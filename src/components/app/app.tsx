import MainPage from '../../pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/main/favorite';
import Offer from '../../pages/main/offer.tsx';
import NotFound from '../../pages/not-found';
import PrivateRoute from '../private-root';
import {  ReviewsTypes } from '../../types.ts';
import { useAppSelector } from '../../hooks.tsx';



type AppScreenProps = {
  numberOfRentalOffers: number;
  // offersData: OffersTypes;
  reviewsData: ReviewsTypes;
}

function App ({numberOfRentalOffers, reviewsData} : AppScreenProps) :JSX.Element {
const offersData = useAppSelector((state) => state.offersList);
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
          element={<Offer offer={offersData[0]} reviews={reviewsData} offers={offersData} offersNearby={offersData}/>}
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

