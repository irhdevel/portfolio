"use client"
import { ReactNode, useState, useEffect } from "react"
import clsx from "clsx"
import { Figtree } from "next/font/google"
import { Header } from "./Header"

const figtree = Figtree({ subsets: ['latin'] })

export function RLayout({children}: {children: ReactNode}){
    const [isDark, setIsDark] = useState<boolean>(true)
    useEffect(()=>{
        const mediaIsDark = window.matchMedia('(prefers-color-scheme: dark)')
        const lsIsDark = localStorage.getItem("isDarkMode")

        let boolLsIsDark
        if (lsIsDark === "true" && lsIsDark) {
            boolLsIsDark = true
            setIsDark(boolLsIsDark)
        } else if (lsIsDark === "false" && lsIsDark) {
            boolLsIsDark = false
            setIsDark(boolLsIsDark)
        } else {
            mediaIsDark.addEventListener('change',(e)=>{
                setIsDark(e.matches)
            })
            setIsDark(mediaIsDark.matches)
        }
    },[])

    return(
        <html lang="ja" className={clsx('transition',isDark ? "dark" : "","dark:bg-black bg-white")}>
          <body 
                className={
                    clsx(
                        figtree.className,
                        "dark:bg-black dark:text-neutral-100"
                    )}>
                <Header setDarkState={setIsDark} darkState={isDark}></Header>
                <div className="h-16"></div>
                {children}
            </body>
        </html>
    )
}
