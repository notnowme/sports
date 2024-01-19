import KakaoMap from '../maps/kakaomap';

const MainMap = () => {

    return (
        <div className="relative w-full max-w-[450px] h-[450px] bg-[#1D1D1D] mr-[20px] rounded-md overflow-hidden">
            <KakaoMap />
        </div>
    );
}

export default MainMap;