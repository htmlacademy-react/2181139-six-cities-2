import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../pages/main/url.tsx';
import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from './main/useMap.tsx';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../hooks.tsx';
import { OffersType , OffersTypes} from '../types.tsx';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map(): JSX.Element {
  const propPoints = useAppSelector((state) => state.offersList as OffersTypes);
  const hoveredCard = useAppSelector((state) => state.hoveredCard);
  const mapRef = useRef(null);
  const map = useMap(mapRef, propPoints[0] as OffersType);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      propPoints.forEach((point: OffersType) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        marker
          .setIcon(
            hoveredCard === point.id ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, propPoints, hoveredCard]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

