interface SportFreeItemProps {
    tag: string
}

const SportFreeItem = ({ tag }: SportFreeItemProps) => {
    return (
        <div className='flex items-center justify-between w-full p-2 rounded-md text-base hover:bg-[#343434]'>
            <div className='flex items-center'>
                <span className='w-[40px] p-1 rounded-md mr-2 text-center text-sm bg-[#292929]'>{tag}</span>
                <span className='p-1 mr-2'>제목dfdfd목제</span>
                <span className="text-sm text-[#00A495]">0</span>
            </div>
            <div className='flex'>
                <div className="flex items-center gap-x-1 w-[200px]">
                    <div className="w-[25px] h-[25px] bg-[#292929] rounded-md mr-1">

                    </div>
                    <span>이름이름</span>
                </div>
                <span className='w-[120px] p-1 mr-2 text-right text-sm'>23. 12. 24</span>
            </div>
        </div>
    );
}

export default SportFreeItem;