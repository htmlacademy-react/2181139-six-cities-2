import MainPage from '../../pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/main/favorite';
import Offer from '../../pages/main/offer.tsx';
import NotFound from '../../pages/not-found';
import PrivateRoute from '../private-route.tsx';
import { useAppSelector } from '../../hooks.tsx';
import { LoadingScreen } from '../../loading-screen.tsx';
import { State } from '../../types.tsx';
import { OffersTypes } from '../../types.tsx';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { NameSpace } from '../../const';

function App() :JSX.Element {

  const offersData = useSelector((state: State): OffersTypes => state[NameSpace.Sorting].offersList);

  const isQuestionsDataLoading = useAppSelector((state) => state[NameSpace.Sorting].isOffersDataLoading);

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
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites offersData={offersData} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
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

