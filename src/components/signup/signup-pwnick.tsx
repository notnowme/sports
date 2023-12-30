import { Dispatch, SetStateAction } from "react"

import { Eye, EyeOff } from 'lucide-react'
import moment from "moment"

interface SignUpPwNickProps {
    loginChk: boolean
    id: string
    password: string
    pwChk: string
    nick: string
    birth: string
    setBirth: Dispatch<SetStateAction<string>>
    showPw: boolean
    showPwChk: boolean
    setShowPw: Dispatch<SetStateAction<boolean>>
    setShowPwChk: Dispatch<SetStateAction<boolean>>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: React.MouseEvent) => void
    signVaild: boolean
}


const SignUpPwNick = ({
    loginChk,
    id,
    password,
    pwChk,
    nick,
    birth,
    setBirth,
    showPw,
    showPwChk,
    setShowPw,
    setShowPwChk,
    onChange,
    handleSubmit,
    signVaild
}: SignUpPwNickProps) => {

    if(!loginChk) {
        return null
    }
    return (
        <form className="w-full flex flex-col justify-center items-center">
            <div className='relative flex flex-col w-full max-w-[270px] mt-4 mb-4'>
                <label htmlFor='id' className='text-[#eee] text-sm mb-2'>아이디</label>
                <input type="text"
                    disabled={loginChk}
                    name='id'
                    value={id}
                    defaultValue={id}
                    className='rounded-md w-full p-4 outline-none h-[45px] bg-[#343434] text-[#eee]'
                    placeholder='아이디'
                />
            </div>
            <div className='relative flex flex-col w-full max-w-[270px] mt-4 mb-4'>
                <label htmlFor='password' className='text-[#eee] text-sm mb-2'>비밀번호</label>
                <div className='relative h-[45px]'>
                    <input type={showPw ? 'text' : 'password'}
                        name='password'
                        value={password}
                        onChange={onChange}
                        className='rounded-md w-full p-4 outline-none h-full bg-[#343434] text-[#eee]'
                        placeholder='비밀번호'
                        autoComplete="off"
                    />
                    {showPw
                        ? <Eye onClick={() => setShowPw(prev => !prev)} className='absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer w-4 h-4 text-[#777]' />
                        : <EyeOff onClick={() => setShowPw(prev => !prev)} className='absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer w-4 h-4 text-[#777]' />
                    }
                </div>
            </div>
            <div className='relative flex flex-col w-full max-w-[270px] mt-4 mb-4'>
                <label htmlFor='pwChk' className='text-[#eee] text-sm mb-2'>비밀번호 확인</label>
                <div className='relative h-[45px]'>
                    <input type={showPwChk ? 'text' : 'password'}
                        name='pwChk'
                        value={pwChk}
                        onChange={onChange}
                        className='rounded-md w-full p-4 outline-none h-full bg-[#343434] text-[#eee] mb-1'
                        placeholder='비밀번호 확인'
                        autoComplete="off"
                    />
                    {showPwChk
                        ? <Eye onClick={() => setShowPwChk(prev => !prev)} className='absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer w-4 h-4 text-[#777]' />
                        : <EyeOff onClick={() => setShowPwChk(prev => !prev)} className='absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer w-4 h-4 text-[#777]' />
                    }
                    {password && password !== pwChk && (
                        <span className='text-sm text-rose-700'>비밀번호가 일치하지 않습니다</span>
                    )}
                </div>
            </div>
            <div className='relative flex flex-col w-full max-w-[270px] mt-4 mb-4'>
                <label htmlFor='nick' className='text-[#eee] text-sm mb-2'>닉네임</label>
                <input type="text"
                    name='nick'
                    value={nick}
                    onChange={onChange}
                    className='rounded-md w-full p-4 outline-none h-[45px] bg-[#343434] text-[#eee]'
                    placeholder='닉네임'
                />
            </div>
            <div className='relative flex flex-col w-full max-w-[270px] mt-4 mb-4'>
                <label htmlFor='nick' className='text-[#eee] text-sm mb-2'>생년월일</label>
                <input type="date"
                    name='birth'
                    value={moment(birth).format('YYYY-MM-DD')}
                    onChange={(e) => setBirth(prev => e.target.value)}
                    className='rounded-md w-full p-4 outline-none h-[45px] bg-[#343434] text-[#eee]'
                    placeholder='닉네임'
                />
            </div>
            <button
                onClick={handleSubmit}
                disabled={signVaild}
                className={`mt-[60px] rounded-md w-full max-w-[270px] h-[45px] tracking-widest ${signVaild ? 'bg-[#222] text-[#ccc]' : 'bg-[#006d5e] text-[white]'}`}>
                가입하기
            </button>
        </form>
    );
}

export default SignUpPwNick;