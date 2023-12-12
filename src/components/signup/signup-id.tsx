import { Dispatch, SetStateAction } from "react"

interface SignUpIDProps {
    vaild: boolean
    id: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginChk: boolean
    setLoginChk: Dispatch<SetStateAction<boolean>>
}


const SignUpID = ({vaild, id, onChange, loginChk ,setLoginChk}:SignUpIDProps) => {
    if(loginChk) {
        return null
    }
    return (
        <>
            <div className='relative flex flex-col w-full max-w-[270px] mt-4 mb-4'>
                <label htmlFor='id' className='text-[#eee] text-sm mb-2'>아이디 중복 확인을 해주세요</label>
                <input type="text"
                    name='id'
                    value={id}
                    onChange={onChange}
                    className='rounded-md w-full p-4 outline-none h-[45px] text-[#eee]'
                    placeholder='아이디'
                />
            </div>
            <button
                onClick={() => setLoginChk(prev => true)}
                className={`relative w-full max-w-[270px] h-[45px] rounded-md ${vaild ? 'bg-[#222] text-[#ccc]' : 'bg-[#006d5e] text-[white]'}`}>
                확인
            </button>
        </>
    );
}

export default SignUpID;