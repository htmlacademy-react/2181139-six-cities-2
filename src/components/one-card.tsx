import { OffersType } from '../types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { changingHoveredCard } from '../action';

type OneCardProps = {
  offer: OffersType;
  onMouseEnter: (a: number) => void;
}

function OneCard({ offer, onMouseEnter }: OneCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const id = offer.id;
  const mouseEnter = onMouseEnter;

  const handler = () => {
    mouseEnter(id);
  };

  return (
    <div onMouseEnter={function sendingId() {
      handler();
      dispatch(changingHoveredCard(id));
    }}
    >
      <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${id}`}>
            <img className="place-card__image" src={offer.photos} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.description} &amp; </a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </div>);
}

export default OneCard;
