/* global kakao */
import Map from 'components/common/Map';
import React, { useEffect, useState } from 'react';
import { map } from 'components/common/Map';
import './CatMap.scss';

const CatMap = (props) => {
	const { catLoc, setCatLoc } = props;

	useEffect(() => {
		console.log('CatMap');
		console.log(catLoc);
		console.log(map);
		catLoc.forEach((v) => {
			let marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(v.latitude, v.longitude),
			});
			console.log('중심위치 바꿀거야');
			map.setCenter(
				new kakao.maps.LatLng(catLoc[0].latitude, catLoc[0].longitude)
			);
		});
	}, []);

	return (
		<div className='map-container'>
			<div className='cat-info-title-text'>최근 발견된 위치</div>
			<Map />
		</div>
	);
};

export default CatMap;
