import OneCard from './one-card';
import { useAppSelector } from '../hooks';

type CardsListPropsTypes = {
  onMouseEnter: (a: number) => void;
}

function CardsList({onMouseEnter }: CardsListPropsTypes): JSX.Element {
  const allOffers = useAppSelector((state) => state.offersList);
  return (
    <div className="cities__places-list places__list tabs__content">
      {allOffers.map((offer) => <OneCard key={offer.id} offer={offer} onMouseEnter={onMouseEnter} />)}
    </div>
  );
}

export default CardsList;
