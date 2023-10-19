import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef } from "react";
import Link from 'next/link'
import "remixicon/fonts/remixicon.css"

export function Header(
    {setDarkState, darkState}
    :{
        setDarkState: Dispatch<SetStateAction<boolean>>,
        darkState: boolean
    }) {
    const darkSwitcher = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        darkSwitcher.current!.checked = darkState
    })
    function darkChanged(e: ChangeEvent<HTMLInputElement>) {
        localStorage.setItem("isDarkMode", e.target.checked ? "true" : "false")
        setDarkState(e.target.checked)
    }

    return(
        <header
            className="
            h-16 dark:bg-neutral-950/80 dark:border-b-gray-700/80
            border-b flex items-center justify-around
            bg-neutral-100/80 border-b-gray-400/80 fixed w-full backdrop-blur backdrop-saturate-150 z-50">
            <Link href="/">
                <span className="tracking-wide text-xl">
                    IRIHI
                </span>
            </Link>
            <nav className="w-fit h-fit">
                <div className="w-fit h-fit hover:scale-125 active:scale-90 transition ease-out cursor-pointer">
                    <label htmlFor="darkModeCheckBox" className="p-3 cursor-pointer">
                        { darkState ? 
                        <i className="ri-moon-line"></i>
                        : <i className="ri-sun-line"></i>
                        }
                        <input
                            onChange={
                                (e)=>{
                                    darkChanged(e)
                                }
                            }
                            ref={darkSwitcher}
                            type="checkbox"
                            className="
                            hidden
                            "
                            id="darkModeCheckBox">
                        </input>
                    </label>
                </div>
            </nav>
        </header>
    )
}
