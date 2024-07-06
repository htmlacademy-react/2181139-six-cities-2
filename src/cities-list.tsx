import { useAppDispatch } from './hooks';
import { sortingAndOffersList } from './slice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '.';
import { NameSpace } from './const';


export type CityPropType = {
  cities: string[];
}

export default function CitiesList({ cities }: CityPropType): JSX.Element {
  const citiesList = cities;
  const dispatch = useAppDispatch();
  const cityFromState = useSelector((state : RootState) => state[NameSpace.Sorting].city);

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city) => (
        <div onClick={function selectCity() {
          dispatch(sortingAndOffersList.actions.changingCity(city));

        }} key={city}
        >
          <li className="locations__item" key={city}>
            <a className={`locations__item-link tabs__item ${cityFromState === city ? 'tabs__item--active' : ''} `} key={city} href="#">
              <span key={city}> {city}</span>
            </a>
          </li>
        </div>
      ))}
    </ul>);
}


