const SportsMeetList = () => {
    return (
        <div className='flex w-full items-center p-1 rounded-md hover:bg-[#343434]'>
            <div className='w-[45px] h-[45px] rounded-md bg-[#292929] mr-6'>

            </div>
            <div className='flex flex-col'>
                <span className='text-base'>금요일 경기 보러 가실 분</span>
                <span className='text-sm text-[#777] text-end'>23. 12. 12.</span>
            </div>
        </div>
    );
}

export default SportsMeetList;