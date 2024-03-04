import OfferNearby from './offer-card-nearby';
import { OffersTypes } from '../types';

type OffersListNearbyProps = {
  offersNearby : OffersTypes;
}

export default function OffersListNearby({offersNearby} : OffersListNearbyProps) : JSX.Element {
  const allOffersNearby = offersNearby;
  return (

    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {allOffersNearby.map((offer) => <OfferNearby offer={offer} key={offer.id}/>)}
      </div>
    </section>

  );

}
