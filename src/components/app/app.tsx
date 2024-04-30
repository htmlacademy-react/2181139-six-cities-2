import MainPage from '../../pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/main/favorite';
import Offer from '../../pages/main/offer.tsx';
import NotFound from '../../pages/not-found';
import PrivateRoute from '../private-root';
import { useAppSelector } from '../../hooks.tsx';
import { LoadingScreen } from '../../loading-screen.tsx';

type AppScreenProps = {
  numberOfRentalOffers: number;
}

function App ({numberOfRentalOffers} : AppScreenProps) :JSX.Element {

const offersData = useAppSelector((state) => state.offersList);
const isQuestionsDataLoading = useAppSelector((state) => state.isQuestionsDataLoading);

if(isQuestionsDataLoading){
return (
 < LoadingScreen/>
);
}
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage numberOfRentalOffers={numberOfRentalOffers} />}
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
          element={<Offer offersNearby={offersData}/>}
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

