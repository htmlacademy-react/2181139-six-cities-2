import OneCard from './one-card';
import { useAppSelector } from '../hooks';
import { OffersType } from '../types';
import { useState, useCallback } from 'react';
import React from 'react';

function CardsList(): JSX.Element {

  const [, setActiveCard] = useState<string>('');
  function handlerCallback(id: string) {
    setActiveCard(id);
  }

  const handler = useCallback((id: string) => handlerCallback(id), [setActiveCard]);

  const allOffers = useAppSelector((state) => state.sorting.offersList);

  const city = useAppSelector((state) => state.sorting.city);
  return (
    <div className="cities__places-list places__list tabs__content">

      {allOffers.filter((of: OffersType) => of.city.name === city).map((offer: OffersType) => <OneCard key={offer.id} offer={offer} onMouseEnter={handler}/>)}
    </div>
  );
}

export default React.memo(CardsList);
