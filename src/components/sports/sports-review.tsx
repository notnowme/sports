const SportsReviewList = () => {
    return (
        <div className='flex w-full items-center justify-start text-base p-1 rounded-md hover:bg-[#343434]'>
            <div className='w-[30px] h-[30px] rounded-md bg-[#292929] mr-4'>

            </div>
            <div className='text-[#eee] w-full max-w-[500px]'>
                <span className="cursor-pointer">야 어제 페이커 봤냐?</span>
            </div>
            <div className='text-[#eee] w-full max-w-[150px]'>
                <span>기습숭배</span>
            </div>
            <div className='w-full max-w-[100px]'>
                <span>23. 12. 24</span>
            </div>
        </div>
    );
}

export default SportsReviewList;