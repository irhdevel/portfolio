import Link from "next/link"

export function ArticleThumbnail({article, href}: {article: any, href: string}){
    return(
        <Link 
            href={href}
            className="
            w-72 active:bg-neutral-300
            active:text-neutral-700
            max-w-sm flex flex-col
            dark:bg-neutral-200 overflow-hidden
            dark:active:bg-neutral-600
            dark:active:text-neutral-100
            dark:bg-transparent rounded-none
            border-b border-l dark:border-neutral-500
            border-neutral-400">
            {
                article.coverImage ?
                    <img className="aspect-video object-cover" src={article.coverImage.src} alt="" />
                    : null
            }
            <h2 className="font-medium p-5">
                {article.articleTitle}
            </h2>
        </Link>
    )
}
