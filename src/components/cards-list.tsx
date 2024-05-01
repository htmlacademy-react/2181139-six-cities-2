import OneCard from './one-card';
import { useAppSelector } from '../hooks';
import { OffersType } from '../types';
import { useState } from 'react';


function CardsList(): JSX.Element {

  const [, setActiveCard] = useState<string>('');

  function handler(id: string) {
    setActiveCard(id);
  }

  const allOffers = useAppSelector((state) => state.offersList);

  return (
    <div className="cities__places-list places__list tabs__content">
      {allOffers.map((offer: OffersType) => <OneCard key={offer.id} offer={offer} onMouseEnter={handler}/>)}
    </div>
  );
}

export default CardsList;
