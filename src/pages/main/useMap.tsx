import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { OffersType } from '../../types';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, offer: OffersType) : Map | null{
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const offerProp = offer;

  useEffect(() => {
    if(mapRef.current !== null && !isRenderedRef.current){
      const instance = new Map(mapRef.current, {

        center: {
          lat: offerProp.lat,
          lng: offerProp.lng
          // lat: 52.3909553943508,
          // lng: 4.85309666406198,
        },
        zoom: 14,


      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  },[mapRef, offerProp.lng, offerProp.lat]);

  return map;
}

