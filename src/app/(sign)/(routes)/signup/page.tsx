'use client'

import { useEffect, useState } from 'react'
import SignUpID from '@/components/signup/signup-id'
import SignUpPwNick from '@/components/signup/signup-pwnick'
import { useRouter } from 'next/navigation'

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
    const [birth, setBirth] = useState('');

    const [vaild, setVaild] = useState(true)

    const [signVaild, setSignVaild] = useState(false)

    const [idChk, setIdChk] = useState(false)
    
    const [nickChk, setNickChk] = useState(false)

    const router = useRouter();


    // 아이디 or 비밀번호 확인 정규식
    // const regExp = /^[a-z0-9_]{4,20}$/;

    // 아이디 확인 정규식
    // 영어와 숫자, 4글자 이상 20글자 이하
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    
    useEffect(() => {
        if (id) {
            setVaild(prev => false)
        } else {
            setVaild(prev => true)
        }
    }, [id])

    useEffect(() => {
        if (id && password && pwChk && nick) {
            if(nickChk) {
                setSignVaild(prev => false)
            }
        } else {
            setSignVaild(prev => true)
        }
    }, [id, password, pwChk, nick, nickChk])

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
        setBirth('');
    }
    const handleIdChk = async() => {
        if(regExp.test(id)) {
            alert('특수문자는 사용할 수 없습니다.');
            return;
        }
        if(id.length <= 5) {
            alert('아이디가 너무 짧습니다.');
            return;
        }
        try {
            const res = await fetch('/api/sign', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    id
                })
            });
            if(res.status === 400) {
                // 아이디가 있다.
                alert('이미 있는 아이디입니다.')
                setInputs(prev => {
                    return {...prev, id: ''}
                });
            } else if(res.status === 200) {
                // 아이디가 없다.
                setIdChk(true);
            } else if(res.status === 500) {
                console.error('서버 에러.');
            }
        } catch(err) {
            console.log(err)
        }
    }
    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()
        if(!id) return;
        if(!password) {
            alert('비밀번호를 입력해 주세요');
            return;
        }
        if(password.length <= 7) {
            alert('비밀번호가 너무 짧습니다.');
            return;
        }
        if(!pwChk) {
            alert('비밀번호를 입력해 주세요');
            return;
        }
        if(!nick) {
            alert('닉네임을 입력해 주세요');
            return;
        }
        if(!birth) {
            alert('생일을 입력해 주세요');
            return;
        };
        const res = await fetch('/api/user', {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id,
                password,
                nick,
                birth
            })
        });
        if(res.status === 200) {
            alert('환영합니다!');
            router.push('/signin');
        }
    }
    return (
        <div className="mt-20 flex flex-col justify-center items-center w-full max-w-[580px] rounded-md p-10 bg-[#1D1D1D]">
            <div className='flex flex-col w-full justify-center items-center mb-4'>
                <span className='text-2xl'>회원가입</span>
                <div className='mt-2 w-full max-w-[270px] h-[30px] flex items-center justify-center gap-5'>
                    <span className={`text-base text-[#41ccb9]`}>▶</span>
                    <span className={`text-base ${idChk ? 'text-[#41ccb9]' : 'text-[#006d5e]'}`}>▶</span>
                </div>
            </div>
            <SignUpID vaild={vaild} id={id} onChange={onChange} loginChk={idChk} handleIdChk={handleIdChk} />
            <SignUpPwNick
                loginChk={idChk}
                nickChk={nickChk}
                setNickChk={setNickChk}
                id={id}
                password={password}
                pwChk={pwChk}
                nick={nick}
                birth={birth}
                setBirth={setBirth}
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