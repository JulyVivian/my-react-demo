import React, { useEffect, useRef } from 'react';

const TencentMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // if (window.qq && window.TMap) {
      // 初始化地图
      const map = new window.TMap.Map(mapRef.current, {
        center: new window.TMap.LatLng(30.48, 114.43), // 设置地图中心为北京天安门
        zoom: 10, // 设置地图缩放级别
      });

      // 添加一个标记
      new window.TMap.MultiMarker({
        map: map,
        geometries: [{
          id: 'marker1',
          position: new window.TMap.LatLng(30.48, 114.43),
          properties: {
            title: '标记1',
            description: '这是标记1的描述',
          },
          styleId: 'marker',
        }]
      });
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
};

export default TencentMap;
