interface SignUpIDProps {
    vaild: boolean
    id: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginChk: boolean
    handleIdChk: () => void
}


const SignUpID = ({vaild, id, onChange, loginChk, handleIdChk}:SignUpIDProps) => {
    if(loginChk) {
        return null
    }
    const handleEnter = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            handleIdChk();
        }
    }
    return (
        <>
            <div className='relative flex flex-col w-full max-w-[270px] mt-4 mb-4'>
                <label htmlFor='id' className='text-[#eee] text-sm mb-2'>아이디 중복 확인을 해주세요</label>
                <input type="text"
                    name='id'
                    value={id}
                    onChange={onChange}
                    onKeyDown={handleEnter}
                    className='rounded-md w-full p-4 outline-none h-[45px] text-[#eee]'
                    placeholder='아이디'
                />
            </div>
            <button
                onClick={handleIdChk}
                className={`relative w-full max-w-[270px] h-[45px] rounded-md ${vaild ? 'bg-[#222] text-[#ccc]' : 'bg-[#006d5e] text-[white]'}`}>
                확인
            </button>
        </>
    );
}

export default SignUpID;