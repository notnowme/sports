'use client'

import { useEffect, useRef, useState } from "react";
import Editor from "@/components/editor/editor";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";





const SportFreeWrite = () => {
    const [htmlStr, setHtmlStr] = useState('')
    const titleRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)
    const pathname = usePathname();
    const { data: session } = useSession();
    const viewContainerRef = useRef<HTMLDivElement>(null)
    const router = useRouter();

    if(!session || !session.user) {
        return <div>로그인하지 않아서 이용 못 함.</div>
    }

    useEffect(() => {
        if(viewContainerRef.current) {
            viewContainerRef.current.innerHTML += htmlStr
        }
    },[htmlStr])
    const handleSubmit = async() => {
        if(categoryRef.current && titleRef.current) {

            const category = categoryRef.current.value;
            const title = titleRef.current.value;
            const team = pathname.split('/')[3];
            if(!title) {
                alert('제목을 입력해 주세요.');
                titleRef.current.focus();
                return;
            }
            if(!htmlStr) {
                alert('내용을 입력해 주세요.');
                return;
            }
            try {
                const res = await fetch('/api/board', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        category,
                        title,
                        content: htmlStr,
                        team
                    })
                });
                const result = await res.json();
                if(res.status === 200) {
                    router.push(`${pathname.replace('/write',`/${result.no}`)}`);
                } else {
                    console.log('Internal Server Error');
                    return;
                }
            } catch(err) {
                console.log(`[WRITE_FETCH_ERROR]`, err);
                return;
            }
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
                    ref={categoryRef}
                    className="w-[100px] h-full text-center text-lg rounded-md"
                >
                    <option value="normal">잡담</option>
                    <option value="review">후기</option>
                </select>
                <input type="text"
                    className="outline-none w-full h-full bg-[#1D1D1D] p-2"
                    placeholder="제목을 입력하세요"
                    ref={titleRef}
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