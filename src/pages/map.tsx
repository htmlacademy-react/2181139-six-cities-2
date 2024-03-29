import { OffersTypes } from '../types.ts';
import {URL_MARKER_DEFAULT} from '../pages/main/url.tsx';
import { useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from './main/useMap.tsx';
import 'leaflet/dist/leaflet.css';


type MapsPropsType = {
  points: OffersTypes;
};

// type Icon = {
//   iconUrl: string;
//   iconSize: [number, number];
//   iconAnchor: [number, number];

// }

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });


export default function Map({points} : MapsPropsType) : JSX.Element {
  const propPoints = points;

  const mapRef = useRef(null);
  const map = useMap(mapRef, propPoints[0]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      propPoints.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
          // selectedPoint !== undefined && point.title === selectedPoint.title
          //   ? currentCustomIcon
            defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, propPoints]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

