import Image from 'next/image'

const MainMap = () => {
    return (
        <div className="relative w-full max-w-[450px] h-[450px] bg-[#1D1D1D] mr-[20px] rounded-md">
            <Image fill src={`/img/test.png`} alt='map' className='rounded-md'/>
        </div>
    );
}
 
export default MainMap;