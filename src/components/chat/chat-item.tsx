export const ChatWithIconOther = () => {
    return (
        <div className='w-full flex justify-start mb-3'>
            <div className='w-[45px] h-[45px] rounded-[16px] bg-[#292929] mr-2'>

            </div>
            <div className='flex flex-col'>
                <span className='text-sm'>이름 <span className='text-[12px]'>23. 12. 24 04:00</span></span>
                <p className='p-1 w-[200px] bg-[#292929] rounded-md text-sm whitespace-pre-wrap break-all'>대화 내용...dddddddddddddsssss</p>
            </div>
        </div>
    )
}

export const ChatOther = () => {
    return (
        <div className='w-full ml-[52px] flex justify-start mb-3'>
            <div className='flex flex-col'>
                <p className='p-1 w-[200px] bg-[#292929] rounded-md text-sm whitespace-pre-wrap break-all'>대화 내용...dddddddddddddsssss</p>
            </div>
        </div>
    )
}

export const ChatWithNameMe = () => {
    return (
        <div className='w-full flex justify-end mb-3'>
            <div className='flex flex-col'>
                <span className='text-sm'>이름 <span className='text-[12px]'>23. 12. 24 04:00</span></span>
                <p className='p-1 w-[200px] bg-[#292929] rounded-md text-sm whitespace-pre-wrap break-all'>대화 내용...dddddddddddddsssss</p>
            </div>
        </div>
    )
}

export const ChatMe = () => {
    return (
        <div className='w-full flex justify-end mb-3'>
            <div className='flex flex-col'>
                <p className='p-1 w-[200px] bg-[#292929] rounded-md text-sm whitespace-pre-wrap break-all'>대화 내용...dddddddddddddsssss</p>
            </div>
        </div>
    )
}