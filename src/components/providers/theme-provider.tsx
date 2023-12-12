'use client'

import { useEffect, useState } from 'react' 
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
    // 라이트 모드, 다크 모드를 프로젝트 전체에 적용시키기 위한 프로바이더.

    const [isMount, setIsMount] = useState(false)

    useEffect(() => {
        setIsMount(true)
    },[])

    if(!isMount) {
        return null
    }
    return (
        <NextThemeProvider {...props}>
            {children}
        </NextThemeProvider>
    )
}