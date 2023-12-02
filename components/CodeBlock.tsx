import { bundledLanguages, getHighlighter } from 'shikiji'
import parse from "html-react-parser"
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { firaCode } from '@/utils/fonts'
import 'remixicon/fonts/remixicon.css'

export function CodeBlock({code, lang, filename, hl_range}: {code: string, lang: string, filename: string, hl_range: number[]}) {
    const [codeHTML, setCodeHTML] = useState<string>("")
    const cblockRef = useRef<HTMLElement>(null)
    useEffect(()=>{
        async function highlight() {
            const shikijiPromise = await getHighlighter({
                langs: Object.keys(bundledLanguages),
            })
            const catppuccin_raw = await fetch("/catppuccin_mocha.json")
            const catppuccin = await catppuccin_raw.json()
            shikijiPromise.loadTheme(catppuccin)
            let highlightedHTML = shikijiPromise.codeToHtml(code, {
                lang: lang,
                theme: catppuccin,
            })
            setCodeHTML(highlightedHTML)
            if (!hl_range[1] && hl_range[0]){
                // 開始のみ
                cblockRef.current?.querySelector(`span.line:nth-child(${Math.abs(hl_range[0])})`)?.classList.add("hltd")
            } else if (hl_range[1] && hl_range[0]) {
                // 終了も(複数行指定)
                let range_tmp: number[] = []
                range_tmp.push(Math.abs(hl_range[0]))
                range_tmp.push(Math.abs(hl_range[1]))
                // 小さい方(開始行)が配列の0番目に来るようにする
                // 終了行は1番目に
                range_tmp.sort((a, b) => {
                    return a - b
                })
                const rangeDiff = range_tmp[1] - range_tmp[0]
                for (let i = 0; i < rangeDiff + 1; i++) {
                    cblockRef.current?.querySelector(`span.line:nth-child(${range_tmp[0] + i})`)?.classList.add("hltd")
                }
            }
        }
        highlight()
    },[code, lang, hl_range, cblockRef.current])

    return(
        <div suppressHydrationWarning className='bg-[#121212] border mt-4 border-neutral-800 rounded-md'>
            { filename ?
                <div suppressHydrationWarning className='bg-neutral-950 py-2 flex items-center justify-between'>
                    <span className='px-4 tracking-normal border-l-2 border-[#957fb8]'>
                        {filename}
                    </span>
                    <div 
                        className='flex text-sm text-neutral-500 mr-4 gap-x-1 items-center justify-center cursor-default'
                        title='読み込みに時間がかかる可能性があります'>
                        <i className="ri-timer-line text-xl"></i>
                        <span className='md:block hidden'>読み込みに時間がかかる可能性があります</span>
                    </div>
                </div>
                : null
            }
            <code
                ref={cblockRef}
                className={clsx(" \
                w-full overflow-auto inline-block \
                py-4 rounded-lg text-white \
                tracking-normal", firaCode.variable)}>
                {parse(codeHTML)}
            </code>
        </div>
    )
}
