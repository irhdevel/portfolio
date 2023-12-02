import "remixicon/fonts/remixicon.css"

export function ReadingTime({articleTextHTML}: {articleTextHTML: string}) {
    const articleString = articleTextHTML.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').replace(/(\r|\n|\s)/g, '')
    const ReadingSpeed = 550
    const ReadingTime = Math.ceil(articleString.length / ReadingSpeed)
    return(
        <div className="text-lg text-neutral-700/80 dark:text-neutral-50/60 cursor-default gap-1 flex" title={`Reading Time: ${ReadingTime}m`}>
            <i className="ri-timer-line"></i>
            <span className="tracking-wide">
                {ReadingTime}m
            </span>
        </div>
    )
}
