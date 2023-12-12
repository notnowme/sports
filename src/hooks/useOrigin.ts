import { useEffect, useState } from "react"

// url 주소를 반환해 주는 hook.
export const useOrigin = () => {
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    },[])

    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

    if(!mounted) {
        return ''
    }

    return origin
}