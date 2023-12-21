'use client'

import { useSelectedLayoutSegments } from "next/navigation";

export const BoardHeader = () => {
    const segment = useSelectedLayoutSegments();
    const boardName = segment[0] === 'free' ? '잡담 및 후기' : '맛집 및 모임'
    return (
        <div>
            <h1 className="text-2xl mb-1">{boardName} 게시판</h1>
        </div>
    )
}