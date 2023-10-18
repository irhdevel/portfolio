import Link from "next/link"

export function ArticleThumbnail({article, href}: {article: any, href: string}){
    return(
        <Link href={href} className="w-72 active:bg-neutral-300 active:text-neutral-700 max-w-sm flex flex-col bg-neutral-200 rounded overflow-hidden">
            {
                article.coverImage ?
                    <img className="aspect-video object-cover" src={article.coverImage.src} alt="" />
                    : null
            }
            <h2 className="font-medium py-2 px-5">
                {article.articleTitle}
            </h2>
        </Link>
    )
}
