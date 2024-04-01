import { useAppDispatch, useAppSelector } from './hooks';
import { changingCity } from './action';


export type CityPropType = {
  cities: string[];
}

export default function CitiesList({ cities }: CityPropType): JSX.Element {
  const citiesList = cities;

  const dispatch = useAppDispatch();
  const cityFromState = useAppSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city) => (
        <div onClick={function selectCity() {
          dispatch({ type: changingCity, payload: city });
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


