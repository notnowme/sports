'use client'

import { useEffect, useRef, useState } from "react";
import Editor from "@/components/editor/editor";

const SportFreeWrite = () => {
    const [htmlStr, setHtmlStr] = useState('')
    const title = useRef<HTMLInputElement>(null)
    const category = useRef<HTMLSelectElement>(null)

    const viewContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(viewContainerRef.current) {
            viewContainerRef.current.innerHTML += htmlStr
        }
    },[htmlStr])

    const handleSubmit = async() => {
        if(category.current && title.current) {
            console.log(title.current.value)
            console.log(category.current.value)
            console.log(htmlStr)
        }
    }
    useEffect(() => {
        if(window) {
            window.scrollTo({top: 0, behavior: 'instant'})
        }
    },[])
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-start items-center p-2 mb-4">
                <span className="text-base">대충 주의사항</span>
            </div>
            <div className="flex items-center bg-[#1D1D1D] rounded-md h-[50px] mb-4">
                <select name="cat" id="cat"
                    ref={category}
                    className="w-[100px] h-full text-center text-lg rounded-md"
                >
                    <option value="normal">잡담</option>
                    <option value="review">후기</option>
                </select>
                <input type="text"
                    className="outline-none w-full h-full bg-[#1D1D1D] p-2"
                    placeholder="제목을 입력하세요"
                    ref={title}
                />
            </div>
            <div className="flex p-2 w-full h-[500px] bg-[#1D1D1D] mb-4">
                <Editor
                    htmlStr={htmlStr}
                    setHtmlStr={setHtmlStr}
                />
            </div>
            <div className="flex justify-end">
                <button
                    onClick={handleSubmit}
                    className='w-[60px] h-[35px] mt-2 rounded-md bg-[#292929] self-end'>등록</button>
            </div>
        </div>
    );
}
 
export default SportFreeWrite;