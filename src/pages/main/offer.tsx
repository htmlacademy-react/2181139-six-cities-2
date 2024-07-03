import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import NotFound from '../not-found';
import OfferComp from './offer-comp';
import { fetchOffer , fetchReviewsAction, fetchOffersNearby} from '../../async-actions';

function Offer(): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // dispatch(fetchReviewsAction(id));
      dispatch(fetchOffer(`${id}`));
      // dispatch(fetchOffersNearby(`${id}`));
    }
  }, [id, dispatch]);

  const allReviews = useAppSelector((state) => state.offer.reviews);
  const offerCard = useAppSelector((state) => state.offer.offer);
  const offersNearBy = useAppSelector((state) => state.offer.offersNearby);

  return (
    <div>
      { id !== '' ? (<OfferComp oneOffer = { offerCard} reviews = { allReviews } offersNear = { offersNearBy } />) : (<NotFound/>)};
    </div>
  );
}
export default Offer;
