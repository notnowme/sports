import { useState } from 'react'

import SportsGoodsItem from './sports-goods-item'

import { GoodsData } from '@/types/type'

import { Gift, ChevronRight, ChevronLeft } from 'lucide-react'

interface SportsGoodsContainerProps {
    dataArr: GoodsData[]
}
const chunk = (arr: GoodsData[], size: number) => (
    Array.from(
        { length: Math.ceil(arr.length / size) }, (_, index) => arr.slice(index * size, (index + 1) * size)
    )
)
const SportsGoodsContainer = ({dataArr}: SportsGoodsContainerProps) => {
    const [page, setPage] = useState(1)
    const [marginLeft, setMarginLeft] = useState(0)
    const chunkedMap = chunk(dataArr, 4)
    const handleLeftSlide = () => {
        setPage(prev => {
            if (prev === 1) {
                return 1
            }
            return prev - 1
        })
        if (page !== 1) {
            setMarginLeft(prev => prev + 345)
        }
    }
    const handleRighttSlide = () => {
        setPage(prev => {
            if (prev === chunkedMap.length) {
                return chunkedMap.length
            }
            return prev + 1
        })
        if (page !== chunkedMap.length) {
            setMarginLeft(prev => prev - 345)
        }
    }
    return (
        <div className='flex flex-wrap justify-start gap-x-10 gap-y-1 px-7 w-full max-w-[400px]'>
            <div className="flex w-full justify-between p-2 mb-2">
                <div className='flex items-center text-[#eee]'>
                    <Gift
                        strokeWidth={1}
                        className='mr-2'
                    />
                    <span>팀 굿즈</span>
                </div>
                {chunkedMap.length > 0 && (
                    <div className='flex gap-x-2 text-sm'>
                        <button>
                            <ChevronLeft
                                className={`${page === 1 ? 'text-[#333]' : 'text-[#eee]'}`}
                                onClick={handleLeftSlide}
                            />
                        </button>
                        <span>{page} / {chunkedMap.length}</span>
                        <button>
                            <ChevronRight
                                className={`${page === chunkedMap.length ? 'text-[#333]' : 'text-[#eee]'}`}
                                onClick={handleRighttSlide}
                            />
                        </button>
                    </div>
                )}
            </div>
            <div className='flex w-full h-[436px] rounded-md p-1 bg-[#1D1D1D] overflow-hidden'>
                <div className='flex flex-nowrap transition-all'
                    style={{marginLeft:`${marginLeft}px`}}
                >
                    {chunkedMap.length > 0 ? chunkedMap.map((chunk, chunkIndex) => (
                        <div key={chunkIndex}
                            className='w-[340px] flex justify-start flex-wrap gap-x-4 gap-y-2 rounded-md bg-[#1D1D1D] p-2 mr-[5px]'
                        >
                            {chunk.map((data, index) => (
                                <SportsGoodsItem
                                    imgUrl={data.goodsImg}
                                    goodsName={data.goodsName}
                                    goodsPrice={data.goodsPrice}
                                />
                            ))}
                        </div>
                    ))
                : (
                    <div className='w-[340px] h-full flex justify-center items-center'>
                        상품이 없습니다
                    </div>
                )
                }
                </div>
            </div>
        </div>
    );
}

export default SportsGoodsContainer