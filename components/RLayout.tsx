"use client"
import { ReactNode, useState, useEffect } from "react"
import clsx from "clsx"
import { Header } from "./Header"
import { figtree, notoSans } from "@/utils/fonts"
import { yakuHanJP } from "@/utils/fonts"
import { Footer } from "./Footer"
import { PageTransition } from "./PageTransition"
import { LoadingModal } from "./LoadingModal"
import { AppProgressBar } from "next-nprogress-bar"
import { BreadCrumbs } from "./Breadcrumbs"


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
    const [isLoadingFinished, setIsLoadingFinished] = useState<boolean>(false)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoadingFinished(true)
        }, 1000)
    })

    return(
        <html lang="ja"
            className={
                clsx(
                    'transition',
                    isDark ? "dark" : "",
                    "dark:bg-black bg-white",
                    figtree.variable,
                    notoSans.variable,
                    yakuHanJP.variable
                )}>
            <body 
                className={
                    clsx(
                        "dark:bg-neutral-900 dark:text-neutral-100"
                    )
                }>
                <PageTransition>
                    <Header setDarkState={setIsDark} darkState={isDark}></Header>
                    <div className="h-16"></div>
                    {children}
                    <BreadCrumbs />
                    <Footer/>
                </PageTransition>
                {
                    !isLoadingFinished ?
                    <LoadingModal/>
                    : null
                }
                <AppProgressBar color="#c98441" height="1px" />
            </body>
        </html>
    )
}
