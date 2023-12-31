import { useSelectedLayoutSegments } from "next/navigation"
import "remixicon/fonts/remixicon.css"
import Link from "next/link"

export function BreadCrumbs() {
    const segments = useSelectedLayoutSegments()
    const pageRootUrl = "https://irihi.pages.dev/"
    return(
        <div className="overflow-x-auto px-5 h-10 bg-neutral-100 dark:bg-neutral-950 border-t-neutral-300 dark:border-t-neutral-800 border-t flex items-center gap-x-2">
            <Link href={pageRootUrl} className="flex items-center">
                <i className="ri-home-5-line ri-xl"></i>
                <i className="ri-arrow-drop-right-line ri-xl"></i>
            </Link>
            {
                segments.map((segment, index)=>{
                    var path = ""
                    for (let i = 0; i < index + 1; i++) {
                        path += segments[i] + "/"
                    }
                    return(
                        <div key={index} className="flex items-center justify-center">
                            <Link
                                href={
                                    pageRootUrl + path
                                }
                                className="hover:underline active:no-underline">
                                {segment}
                            </Link>
                            {
                                index +1 !== segments.length ?
                                <i className="ri-arrow-drop-right-line ri-xl"></i>
                                : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
