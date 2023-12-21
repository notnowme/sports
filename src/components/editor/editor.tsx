import { useRef, useMemo } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { RangeStatic } from 'quill'
import '@/components/editor/editor.css'

interface EditorProps {
    htmlStr: string
    setHtmlStr: React.Dispatch<React.SetStateAction<string>>
}

const Editor = ({htmlStr, setHtmlStr}: EditorProps) => {
    const quillRef = useRef<ReactQuill>(null)

    const imageHandler = () => {
        // 이미지 핸들러, modules 설정보다 위에 있어야 함.

        // file input 생성.
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.click()

        input.onchange = async() => {
            const file = input.files
            const formData = new FormData()

            if(file) {
                formData.append('multipartFiles', file[0])
            }
            const res = await fetch('') // 이미지 업로드 나중에 추가하기.
            const result = await res.json()
            if(quillRef.current) {
                // 현재 Editor 커서 위치에 서버로부터 전달받은 이미지 불러오는 url을 이용하여 이미지 태그 추가
                const index = (quillRef.current.getEditor().getSelection() as RangeStatic).index

                const quillEditor = quillRef.current.getEditor()
                quillEditor.setSelection(index, 1)
                quillEditor.clipboard.dangerouslyPasteHTML(
                    index,
                    `<img src=${result.data} alt=${'img'} />`
                )
            }
        }
    }

    // useMemo를 안 쓰면 타이핑할 때마다 focus 벗어나는 듯
    const modules = useMemo(() => ({
        toolbar: {
            // container에 등록되는 순서대로 tool 배치
            
            container: [
                [{ 'header': [1,2,3,4,5,false] }], // header 설정
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'formula'], // 굵기, 기울기 등
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], // 리스트, 인덴트 설정
                ['link', 'image', 'video'], // 링크, 이미지, 비디오 업로드 설정
                [{ 'align': [] }, { 'color': [] }, { 'background': [] }], // 정렬, 글씨 색깔, 글씨 배경색 설정
                ['clean'], // toolbar 설정 초기화 설정
            ],
            handlers: {
                image: imageHandler
            }
        }
    }), [])

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'formula',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
        'align', 'color', 'background',        
    ]
    return (
        <ReactQuill
            className='w-full h-full bg-[#1D1D1D] text-[#eee]'
            ref={quillRef}
            theme='snow'
            modules={modules}
            formats={formats}
            value={htmlStr}
            placeholder='내용을 입력하세요'
            onChange={(content, delta, source, editor) => setHtmlStr(editor.getHTML())}
        />
    );
}
 
export default Editor;