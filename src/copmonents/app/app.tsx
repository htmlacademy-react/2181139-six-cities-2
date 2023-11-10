import MainPage from '../../pages/main';

type AppScreenProps = {
  numberOfRentalOffers: number;
}

function App ({numberOfRentalOffers} : AppScreenProps) :JSX.Element {
  return (<MainPage numberOfRentalOffers={numberOfRentalOffers}/>);
}

export default App;

