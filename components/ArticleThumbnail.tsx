import Link from "next/link"

export function ArticleThumbnail({article, href}: {article: any, href: string}){
    return(
        <Link 
            href={href}
            className="
            w-80 active:bg-neutral-300
            active:text-neutral-700
            max-w-sm flex flex-col
            dark:bg-neutral-200 overflow-hidden
            dark:active:bg-neutral-600
            dark:active:text-neutral-100
            dark:bg-transparent rounded-none hover:bg-neutral-200
            dark:hover:bg-neutral-800
            ">
            {
                article.coverImage ?
                    <img className="aspect-video object-cover" src={article.coverImage.src} alt="" />
                    :
                    <div className="
                        flex justify-center items-center
                        aspect-video object-cover dark:text-neutral-400 text-neutral-500
                        dark:bg-neutral-900 bg-neutral-200 text-2xl">
                        <i className="ri-image-2-line"></i>
                    </div>
            }
            <div className="px-3 py-4">
                <span className="mt-2 text-neutral-500 dark:text-neutral-400">
                    <i className="mr-1 ri-calendar-line"></i>
                    {
                        new Date(article._sys.createdAt)
                        .toLocaleString(
                            "ja-JP",
                            {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                hour12: false,
                                minute: "numeric"
                            }
                        )
                    }
                </span>
                <h2 className="font-semibold text-lg mt-1">
                    {article.articleTitle}
                </h2>

            </div>
        </Link>
    )
}
