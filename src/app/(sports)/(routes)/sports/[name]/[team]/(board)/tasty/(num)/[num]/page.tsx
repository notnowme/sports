import {
    MessageSquare,
    Eye,
    MoreHorizontal
} from 'lucide-react'

const SportBoardPage = () => {
    return (
        <div className="w-full flex flex-col bg-[#1D1D1D] p-4 mt-5 mb-10">
            <div className="w-full flex items-center mb-10">
                <div className="w-[60px] h-[60px] rounded-[15px] bg-[#292929] mr-4">

                </div>
                <div className="flex flex-col text-base">
                    <div className='flex items-center'>
                        <span className='mr-2'>작성자</span>
                        <MoreHorizontal
                            className='text-[#777]'
                        />
                    </div>
                    <span className="text-sm text-[#777]">23. 12. 24</span>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <span className="text-base mb-2">잡담</span>
                <span className="text-3xl font-semibold">제목목목목목목</span>
                <div className='flex items-center gap-x-4 mt-2'>
                    <div className="flex items-center gap-x-1">
                        <div className='flex gap-x-2'>
                            <MessageSquare
                                strokeWidth={1}
                                className='w-6 h-6'
                            />
                            <span className='text-base text-[#777]'>0</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className='flex gap-x-2'>
                            <Eye
                                strokeWidth={1}
                                className='w-6 h-6'
                            />
                            <span className='text-base text-[#777]'>1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col mt-10 pb-10 border-b border-[#444]'>
                <pre className='text-base font-pretendard whitespace-pre-line'>
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용{'\n'}
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </pre>
            </div>
            <div className='w-full flex flex-col mt-2'>
                <div className='flex items-center mb-5'>
                    <span className='text-xl'>2개의 댓글</span>
                </div>
                <div className='w-full flex flex-col mb-10'>
                    <div className='flex items-start'>
                        <div className='w-[50px] h-[50px] rounded-[10px] bg-[#292929] mr-4'>

                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center'>
                                <span className='text-base mr-2'>작성자</span>
                                <span className='text-sm text-[#777] mr-2'>23. 12. 24</span>
                                <MoreHorizontal
                                    className='text-[#777]'
                                />
                            </div>
                            <pre className='text-base font-pretendard whitespace-pre-line'>
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                adfajsdlfasdjflkasdf아아아아ㅇㅁ라ㅣㅁㄴㅇ리ㅏㅓㅁㄴㅇ리ㅏㅇ러ㅏㅣㅁㅇㄹㄴ미ㅏ
                            </pre>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col mb-10'>
                    <div className='flex items-start'>
                        <div className='w-[50px] h-[50px] rounded-[10px] bg-[#292929] mr-4'>

                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center'>
                                <span className='text-base mr-2'>작성자</span>
                                <span className='text-sm text-[#777] mr-2'>23. 12. 24</span>
                                <MoreHorizontal
                                    className='text-[#777]'
                                />
                            </div>
                            <pre className='text-base font-pretendard whitespace-pre-line'>
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                asdfasfasdfasdfasfdasdasdfasdfasdfasdfasdfadsadsfasdfjlkasdfjkl{'\n'}
                                adfajsdlfasdjflkasdf아아아아ㅇㅁ라ㅣㅁㄴㅇ리ㅏㅓㅁㄴㅇ리ㅏㅇ러ㅏㅣㅁㅇㄹㄴ미ㅏ
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex mt-5 mb-5'>
                <div className='w-[50px] h-[50px] rounded-[10px] bg-[#292929] mr-2'>

                </div>
                <div className='flex flex-col w-full justify-end'>
                    <textarea
                        className='resize-none outline-none h-[100px] rounded-md p-2 text-base'
                    />
                    <button className='w-[60px] h-[35px] mt-2 rounded-md bg-[#292929] self-end'>등록</button>
                </div>
            </div>
        </div>
    );
}
 
export default SportBoardPage;