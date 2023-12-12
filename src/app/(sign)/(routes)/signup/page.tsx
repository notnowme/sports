'use client'
import Image from 'next/image'



import { Eye, EyeOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import SignUpID from '@/components/signup/signup-id'
import SignUpPwNick from '@/components/signup/signup-pwnick'

const SignUp = () => {
    const [showPw, setShowPw] = useState(false)
    const [showPwChk, setShowPwChk] = useState(false)
    const [inputs, setInputs] = useState({
        id: '',
        password: '',
        pwChk: '',
        nick: '',
    })
    const { id, password, pwChk , nick } = inputs

    const [vaild, setVaild] = useState(true)

    const [signVaild, setSignVaild] = useState(false)

    const [loginChk, setLoginChk] = useState(false)


    useEffect(() => {
        if (id) {
            setVaild(prev => false)
        } else {
            setVaild(prev => true)
        }
    }, [id])

    useEffect(() => {
        if (id && password && pwChk && nick) {
            setSignVaild(prev => false)
        } else {
            setSignVaild(prev => true)
        }
    }, [id, password, pwChk, nick])

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
            password: '',
            pwChk: '',
            nick: ''
        }
        setInputs(prev => updateInputs)
    }
    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()
        console.log(id, password, pwChk, nick)
    }
    return (
        <div className="mt-20 flex flex-col justify-center items-center w-full max-w-[580px] rounded-md p-10 bg-[#1D1D1D]">
            <div className='flex flex-col w-full justify-center items-center mb-4'>
                <span className='text-2xl'>회원가입</span>
                <div className='mt-2 w-full max-w-[270px] h-[30px] flex items-center justify-center gap-5'>
                    <span className={`text-base text-[#41ccb9]`}>▶</span>
                    <span className={`text-base ${loginChk ? 'text-[#41ccb9]' : 'text-[#006d5e]'}`}>▶</span>
                </div>
            </div>
            <SignUpID vaild={vaild} id={id} onChange={onChange} loginChk={loginChk} setLoginChk={setLoginChk} />
            <SignUpPwNick
                loginChk={loginChk}
                id={id}
                password={password}
                pwChk={pwChk}
                nick={nick}
                showPw={showPw}
                showPwChk={showPwChk}
                setShowPw={setShowPw}
                setShowPwChk={setShowPwChk}
                onChange={onChange}
                handleSubmit={handleSubmit}
                signVaild={signVaild}
            />
        </div>
    )
}

export default SignUp