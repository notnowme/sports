import { Dispatch, SetStateAction } from "react";

interface ChangePwProps {
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    passwordChk: string;
    setPasswordChk: Dispatch<SetStateAction<string>>;
    handlePwModal: () => void;
    handlePwChange: () => void;
    verifyPw: boolean
}


const ChangePw = ({ password, setPassword, passwordChk, setPasswordChk, handlePwModal, handlePwChange, verifyPw }: ChangePwProps) => {

    return (
        <div className='absolute flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]'>
            <div className='p-10 rounded-md bg-[#1D1D1D] flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-semibold'>비밀번호 {!verifyPw ? '확인' : '변경'}</h1>
                {!verifyPw && <span className="text-sm text-[#777]">비밀번호를 입력해 주세요.</span>}
                {verifyPw && <span className="text-sm text-[#777]">변경할 비밀번호를 입력해 주세요.</span>}
                <input type='password'
                    value={password}
                    onChange={(e) => setPassword(prev => e.target.value)}
                    className='mt-2 w-[250px] h-[50px] rounded-md p-2 text-base outline-none'
                />
                {verifyPw && (
                    <>
                    <span className="mt-2 self-start text-sm text-[#777]">비밀번호 확인</span>
                    <input type='password'
                        value={passwordChk}
                        onChange={(e) => setPasswordChk(prev => e.target.value)}
                        className='w-[250px] h-[50px] rounded-md p-2 text-base outline-none'
                    />
                    </>
                )}
                <div className='mt-2 w-full flex gap-x-3 justify-center'>
                    <button
                        className='bg-[#292929] rounded-md px-7 py-2'
                        onClick={handlePwModal}
                    >
                        취소
                    </button>
                    <button
                        className='bg-[#292929] rounded-md px-7 py-2'
                        onClick={handlePwChange}
                    >
                        {!verifyPw ? '확인' : '변경'}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ChangePw;