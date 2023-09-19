import React from 'react';
import Map from './Map';
import Markers from './Markers';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';

// Marker 를 그려야 합니다.
// Marker는 naver.map 객체에 그려야 합니다.(객체참조)
const MapScene = () => {
  const {initializeMap} = useMap();
  const onLoadMap = (map:NaverMap) => {
    console.log('로드 완료~');
    initializeMap(map)
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
