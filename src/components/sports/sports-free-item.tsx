interface SportFreeItemProps {
    tag: string
}

const SportFreeItem = ({tag}: SportFreeItemProps) => {
    return (
        <div className='flex items-center justify-between w-full p-2 rounded-md text-base hover:bg-[#343434]'>
            <div className='flex items-center'>
                <span className='w-[40px] p-1 rounded-md mr-2 text-center text-sm bg-[#343434]'>{tag}</span>
                <span className='w-[395px] p-1 mr-2'>제목목제</span>
            </div>
            <div className='flex'>
                <span className='w-[180px] p-1 mr-2'>작성자</span>
                <span className='w-[120px] p-1 mr-2 text-right'>23. 12. 24</span>
            </div>
        </div>
    );
}

export default SportFreeItem;