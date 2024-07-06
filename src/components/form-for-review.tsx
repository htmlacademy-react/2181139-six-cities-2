import { ChangeEvent, useState , FormEvent} from 'react';
import { postComment } from '../async-actions';
import { useAppDispatch} from '../hooks';
import { NameSpace } from '../const';
import { useSelector } from 'react-redux';
import { State } from '../types';

export default function FormForReview(): JSX.Element {
  const [formData, setFormData] = useState(
    {
      rating: '',
      comment: ''
    }
  );

  const dispatch = useAppDispatch();
  const id = useSelector((state: State) => state[NameSpace.Offer].offer.id);

  const handleFieldChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    const name: string = evt.target.name;
    const value: string = evt.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const name: string = evt.target.name;
    const value: string = evt.target.value;
    setFormData({ ...formData, [name]: value });
  };

  function submit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(postComment({rating: Number.parseInt(formData.rating, 10),comment: formData.comment, id}));

  }

  return (
    <form className="reviews__form form" action="#" onSubmit={submit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" onChange={handleInputChange} type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" onChange={handleInputChange} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" onChange={handleInputChange} id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" onChange={handleInputChange} id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" onChange={handleInputChange} id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={handleFieldChange} id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );

}
