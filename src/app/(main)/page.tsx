import MainBoard from "@/components/main/main-board";
import MainMap from "@/components/main/main-map";
import MainSearch from "@/components/main/main-search";

const getData = async() => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/board/all?cat=normal`, {
        method: 'GET',
        cache: 'no-store'
    });
    return res.json();
}


const MainPage = async() => {
    // const data = await getData();
    // console.log(data);
    return (
        <div className="absolute top-[50%] translate-y-[-50%] flex flex-col w-full max-w-[1280px] items-center justify-center m-auto">
            <MainSearch />
            <div className="w-full flex justify-center items-center">
                <MainMap />
                <MainBoard />
            </div>
        </div>
    )
};


export default MainPage;