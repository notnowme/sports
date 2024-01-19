'use client';

import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { mapPos } from "@/lib/atoms/atom";

// window에는 kakao 속성이 없지만
// 정의 파일을 다운받아 적용시켜서 타입 정의가 됐음.

const KakaoMap = () => {
    // 값만 가져와서 쓰므로, useRecoilValue 씀.
    const markerObj = useRecoilValue(mapPos);

    useEffect(() => {
        const KAKAO = window.kakao;
        if(KAKAO) {
            KAKAO.maps.load(() => {
                const container = document.getElementById('map') as HTMLDivElement;
                const options = {
                    center: new KAKAO.maps.LatLng(36.1395, 128.0862),
                    level: 13
                }
                const map = new KAKAO.maps.Map(container, options);
                const imgSize = new KAKAO.maps.Size(35, 35),
                      imgOption = {offset: new KAKAO.maps.Point(15, 15)}

                for (let i = 0; i < markerObj.length; i ++) {
                     
                    // 마커 이미지
                    let markerImage = new KAKAO.maps.MarkerImage(markerObj[i].img, imgSize, imgOption); 
                    
                    // 마커 생성
                    let marker = new KAKAO.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: new KAKAO.maps.LatLng(markerObj[i].latlng[0], markerObj[i].latlng[1]), // 마커를 표시할 위치
                        title : markerObj[i].title, // 마커의 타이틀
                        image : markerImage // 마커 이미지 
                    });

                    KAKAO.maps.event.addListener(marker, 'click', async() => getTeamData(marker));
                }
            });
        }
    },[markerObj]);

    // 마커 클릭 시, 해당 팀 게시물 가져와야함.
    const getTeamData = async(maker: kakao.maps.Marker) => {
        console.log(maker.getTitle());
    }
    return (
        <div id='map' style={{width: '100%', height: '100%'}}/>
    )
};

export default KakaoMap;