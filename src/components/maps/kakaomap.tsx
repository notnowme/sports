'use client';

import { useEffect } from "react";

// window에는 kakao 속성이 없지만
// 정의 파일을 다운받아 적용시켜서 타입 정의가 됐음.

const KakaoMap = () => {
    useEffect(() => {
        const KAKAO = window.kakao;
        if(KAKAO) {
            KAKAO.maps.load(() => {
                const positions = [
                    {
                        title: '울산', 
                        latlng: new KAKAO.maps.LatLng(35.5352, 129.2595)
                    },
                    {
                        title: '포항',
                        latlng: new KAKAO.maps.LatLng(35.9977, 129.3844)
                    },
                    {
                        title: '광주',
                        latlng: new KAKAO.maps.LatLng(35.1311, 126.8749)
                    },
                    {
                        title: '전북',
                        latlng: new KAKAO.maps.LatLng(35.8681, 127.0644)
                    },
                    {
                        title: '인천',
                        latlng: new KAKAO.maps.LatLng(37.4661, 126.643)
                    },
                    {
                        title: '대구',
                        latlng: new KAKAO.maps.LatLng(35.8812, 128.5882)
                    },
                    {
                        title: '서울',
                        latlng: new KAKAO.maps.LatLng(37.5682, 126.8972)
                    },
                    {
                        title: '대전',
                        latlng: new KAKAO.maps.LatLng(36.3652, 127.3248)
                    },
                    {
                        title: '제주',
                        latlng: new KAKAO.maps.LatLng(33.2461, 126.5093)
                    },
                    {
                        title: '강원',
                        latlng: new KAKAO.maps.LatLng(37.7732, 128.8973)
                    },
                    {
                        title: '수원',
                        latlng: new KAKAO.maps.LatLng(37.2977, 127.0113)
                    },
                    {
                        title: '김천',
                        latlng: new KAKAO.maps.LatLng(36.1395, 128.0862)
                    },
                ];
                const markerImgs = [
                    '/img/kleague/emblem_K01.png',
                    '/img/kleague/emblem_K03.png',
                    '/img/kleague/emblem_K22.png',
                    '/img/kleague/emblem_K05.png',
                    '/img/kleague/emblem_K18.png',
                    '/img/kleague/emblem_K17.png',
                    '/img/kleague/emblem_K09.png',
                    '/img/kleague/emblem_K10.png',
                    '/img/kleague/emblem_K04.png',
                    '/img/kleague/emblem_K21.png',
                    '/img/kleague/emblem_K29.png',
                    '/img/kleague/emblem_K35.png',
                ]
                const container = document.getElementById('map') as HTMLDivElement;
                const options = {
                    center: new KAKAO.maps.LatLng(36.1395, 128.0862),
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

                    KAKAO.maps.event.addListener(marker, 'click', async() => getTeamData(marker));
                }
            });
        }
    },[]);
    const getTeamData = async(maker: kakao.maps.Marker) => {
        console.log(maker.getTitle());
    }
    return (
        <div id='map' style={{width: '100%', height: '100%'}}/>
    )
};

export default KakaoMap;