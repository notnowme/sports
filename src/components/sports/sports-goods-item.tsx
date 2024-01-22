import Image from 'next/image'

interface SportsGoodsItemProps {
    imgUrl: string
    goodsName: string
    goodsPrice: string
}

const SportsGoodsItem = ({imgUrl, goodsName, goodsPrice}: SportsGoodsItemProps) => {
    return (
        <div className='flex flex-col'>
            <div className='relative w-[150px] h-[150px] rounded-md bg-[#292929] overflow-hidden'>
                <Image src={imgUrl} fill alt='goods' />
            </div>
            <div className='w-[150px] flex flex-col mt-1 whitespace-pre-wrap'>
                <span className='text-base'>{goodsName.length > 11 ? goodsName.substring(0,11) + '...' : goodsName}</span>
                <span className='text-sm text-[#777]'>{goodsPrice}</span>
            </div>
        </div>
    );
}

export default SportsGoodsItem;