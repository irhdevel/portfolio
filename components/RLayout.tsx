"use client"
import { ReactNode, useState } from "react"
import clsx from "clsx"
import { Figtree } from "next/font/google"

const figtree = Figtree({ subsets: ['latin'] })

export function RLayout({children}: {children: ReactNode}){
    const [isDark, setIsDark] = useState(true)
    useState(()=>{
        const mediaIsDark = window.matchMedia('(prefers-color-scheme: dark)')
        setIsDark(mediaIsDark.matches)
        mediaIsDark.addEventListener('change',(e)=>{
            setIsDark(e.matches)
        })

    })
    return(
        <html lang="ja" className={clsx('h-full',isDark ? "dark" : "")}>
          <body 
                className={
                    clsx(
                        figtree.className,
                        "dark:bg-black dark:text-neutral-100 h-full"
                    )}>
                {children}
            </body>
        </html>
    )
}
