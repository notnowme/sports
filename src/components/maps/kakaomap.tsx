'use client';

import { useEffect } from "react";

// window에는 kakao 속성이 없지만
// 정의 파일을 다운받아 적용시켜서 타입 정의가 됐음.

const KakaoMap = () => {
    useEffect(() => {
        const KAKAO = window.kakao;


        if(KAKAO) {
            KAKAO.maps.load(() => {
                const container = document.getElementById('map') as HTMLDivElement;
                const options = {
                    center: new KAKAO.maps.LatLng(37.556826, 126.6786567),
                    level: 3
                }
                const map = new KAKAO.maps.Map(container, options);
            });
        }
    },[])
    return (
        <div id='map' style={{width: '100%', height: '100%'}}/>
    )
};

export default KakaoMap;