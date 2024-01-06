import { Dispatch, SetStateAction } from "react";

interface ChangeNickProps {
    nick: string;
    setNick: Dispatch<SetStateAction<string>>;
    handleNickModal: () => void;
    handleNickChange: () => void;
}


const ChangeNick = ({nick, setNick, handleNickModal, handleNickChange}: ChangeNickProps) => {

    return (
        <div className='absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]'>
            <div className='p-10 rounded-md bg-[#1D1D1D] flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-semibold'>닉네임 변경</h1>
                <input type='text'
                    value={nick}
                    onChange={(e) => setNick(prev => e.target.value)}
                    className='mt-2 w-[250px] h-[50px] rounded-md p-2 text-base outline-none'
                />
                <div className='mt-2 w-full flex gap-x-3 justify-center'>
                    <button
                        className='bg-[#292929] rounded-md px-7 py-2'
                        onClick={handleNickModal}
                    >
                        취소
                    </button>
                    <button
                        className='bg-[#292929] rounded-md px-7 py-2'
                        onClick={handleNickChange}
                    >
                        변경
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ChangeNick;