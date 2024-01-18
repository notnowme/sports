'use client';

import { useEffect } from "react";

// window에는 kakao 속성이 없지만
// 정의 파일을 다운받아 적용시켜서 타입 정의가 됐음.

const KakaoMap = () => {
    useEffect(() => {
        const KAKAO = window.kakao;
        // 예시 광주FC
        if(KAKAO) {
            KAKAO.maps.load(() => {
                const positions = [
                    {
                        title: '광주 FC', 
                        latlng: new KAKAO.maps.LatLng(35.1311, 126.8749)
                    },
                    {
                        title: '인천 유나이티드 FC',
                        latlng: new KAKAO.maps.LatLng(37.4661, 126.643)
                    }
                ];
                const markerImgs = [
                    '/img/kleague/emblem_K22.png', // 광주
                    '/img/kleague/emblem_K18.png' // 인천
                ]
                const container = document.getElementById('map') as HTMLDivElement;
                const options = {
                    center: new KAKAO.maps.LatLng(35.1311, 126.8749),
                    level: 13
                }
                const map = new KAKAO.maps.Map(container, options);
                const imgSize = new KAKAO.maps.Size(35, 35),
                      imgOption = {offset: new KAKAO.maps.Point(15, 15)}

                for (let i = 0; i < positions.length; i ++) {
                     
                    // 마커 이미지
                    let markerImage = new KAKAO.maps.MarkerImage(markerImgs[i], imgSize, imgOption); 
                    
                    // 마커 생성
                    let marker = new KAKAO.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: positions[i].latlng, // 마커를 표시할 위치
                        title : positions[i].title, // 마커의 타이틀
                        image : markerImage // 마커 이미지 
                    });

                    KAKAO.maps.event.addListener(marker, 'click', () => {
                        console.log(marker.getTitle());
                    });
                }
            });
        }
    },[])
    return (
        <div id='map' style={{width: '100%', height: '100%'}}/>
    )
};

export default KakaoMap;