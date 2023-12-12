'use client'
import Image from 'next/image'



import { Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const SignIn = () => {
    const [showPw, setShowPw] = useState(false)
    const [inputs, setInputs] = useState({
        id: '',
        password: '',
    })
    const { id, password } = inputs

    const [vaild, setVaild] = useState(true)

    useEffect(() => {
        if(id && password) {
            setVaild(prev => false)
        } else {
            setVaild(prev => true)
        }
    },[id, password])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const updateInputs = {
            ...inputs,
            [name]: value
        }
        setInputs(updateInputs)
    }
    const onReset = () => {
        const updateInputs = {
            id: '',
            password: ''
        }
        setInputs(prev => updateInputs)
    }
    const handleSubmit = async(e: React.MouseEvent) => {
        e.preventDefault()
        console.log(id, password)
    }
    return (
        <div className="mt-20 flex flex-col justify-center items-center w-full max-w-[580px] rounded-md p-10 bg-[#1D1D1D]">
            <div className="w-full flex justify-center items-center mt-2 mb-10">
                <Image src={`/img/temp-logo.webp`} width={50} height={50} alt='logo' />
                <span className='text-3xl'>embers</span>
            </div>
            <div className='w-full'>
                <form className='w-full flex flex-col justify-center items-center'>
                    <div className='relative w-full max-w-[270px] h-[45px] mt-4'>
                        <input type="text"
                            name='id'
                            value={id}
                            onChange={onChange}
                            className='rounded-md w-full h-full p-4 outline-none text-[#eee]'
                            placeholder='아이디'
                        />
                    </div>
                    <div className='relative w-full max-w-[270px] h-[45px] mt-4'>
                        <input type={showPw ? 'text' : 'password'}
                            name='password'
                            value={password}
                            onChange={onChange}
                            className='rounded-md w-full h-full p-4 outline-none text-[#eee]'
                            placeholder='비밀번호'
                            autoComplete='off'
                        />
                        {showPw
                            ? <Eye onClick={() => setShowPw(prev => !prev)} className='absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer w-4 h-4 text-[#777]'/>
                            : <EyeOff onClick={() => setShowPw(prev => !prev)} className='absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer w-4 h-4 text-[#777]'/> 
                        }
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={vaild}
                        className={`mt-[60px] rounded-md w-full max-w-[270px] h-[45px] tracking-widest ${vaild ? 'bg-[#222] text-[#ccc]' : 'bg-[#006d5e] text-[white]'}`}>
                        로그인
                    </button>
                </form>
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <span className='text-sm text-[#ccc]'>SNS 계정으로 로그인</span>
                    <div className='flex items-center gap-10 mt-4'>
                        <div className='w-12 h-12 rounded-full bg-[#343434]'>

                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#343434]'>

                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#343434]'>

                        </div>
                    </div>
                </div>
                <div className='mt-14 flex flex-col justify-center items-center'>
                    <div className='flex items-center text-sm text-[#ccc] gap-4'>
                        <span>아이디 찾기</span>
                        <span>|</span>
                        <span>비밀번호 찾기</span>
                    </div>
                    <div className='mt-4 flex items-center text-sm text-[#ccc] gap-3'>
                        <span>아직 가입하지 않으셨나요?</span>
                        <Link href='/signup' className='underline'>
                            회원가입
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn