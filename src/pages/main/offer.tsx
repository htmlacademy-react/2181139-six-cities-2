import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchReviewsAction, fetchOffer, fetchOffersNearby } from '../../async-actions';
import { useAppDispatch } from '../../hooks';
import NotFound from '../not-found';
import OfferComp from './offer-comp';

function Offer(): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchReviewsAction(id));
      dispatch(fetchOffer(`${id}`));
      dispatch(fetchOffersNearby(`${id}`));
    }
  }, [id]);

  const allReviews = useAppSelector((state) => state.reviews);
  const offer = useAppSelector((state) => state.offer);
  const offersNearBy = useAppSelector((state) => state.offersNearby);

  return (
    <div>
      { id !== '' ? (<OfferComp oneOffer = { offer } reviews = { allReviews } offersNear = { offersNearBy } />) : (<NotFound/>)};
    </div>
  );
}
export default Offer;
