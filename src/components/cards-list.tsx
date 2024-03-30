import { OffersTypes } from '../types';
import OneCard from './one-card';

type CardsListPropsTypes = {
  offersData: OffersTypes;
  onMouseEnter: (a: number) => void;
}

function CardsList({ offersData, onMouseEnter }: CardsListPropsTypes): JSX.Element {
  const allOffers = offersData;
  return (
    <div className="cities__places-list places__list tabs__content">
      {allOffers.map((offer) => <OneCard key={offer.id} offer={offer} onMouseEnter={onMouseEnter} />)}
    </div>
  );
}

export default CardsList;
