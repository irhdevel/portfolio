import { getArticle, getBlogs } from "@/utils/api"
import Link from "next/link"
import { Metadata } from "next"
import { ArticlePage } from "@/components/ArticlePage"
import { ArticlePageHeaderImg } from "@/components/ArticlePageHeaderImg"
import { ShareButton } from "@/components/ShareButton"
import "remixicon/fonts/remixicon.css"
import { CoverImage } from "@/components/CoverImage"
import { ReadingTime } from "@/components/ReadingTime"
import { ArticleCreatedAt } from "@/components/articleCreatedAt"
import { Donate } from "@/components/donate"

export async function generateStaticParams() {

    let blogs = await getBlogs()
    let slugs: {slug: string}[] = []
    blogs.items.forEach((blog: any)=>{
        slugs.push({slug: blog._id})
    })
    return slugs 
}

export async function generateMetadata(
    {params}: {params: {slug: string}}): Promise<Metadata> {
    const article: any = await getArticle(params.slug)
    return {
        title: `${article.articleTitle} | IrihiLog`,
        description: article.blogDescription ? article.blogDescription : "Irihiのブログ記事",
        robots: {
            index: true,
            googleBot: {
                index: true,
            }
        },
        openGraph: {
            images: article.coverImage ? [article.coverImage.src] : [],
            title: `${article.articleTitle} | IrihiLog`,
            type: "article",
            description: article.blogDescription ? article.blogDescription : "Irihiのブログ記事",
            siteName: "Irihi",
            url: `https://irihi.pages.dev/blogs/${params.slug}`
        },
        twitter: {
            card: "summary_large_image",
            site: "@irihidev"
        },
    }
}

export default async function BlogPage({params}: {params: {slug: string}}) {
    const article: any = await getArticle(params.slug)
    return(
        <div className="min-h-screen">
            <div className="relative">
                {
                    article.coverImage ?
                    <ArticlePageHeaderImg coverImage={article.coverImage}/>
                    : null
                }
                <main className="relative">
                    <div className="flex justify-center items-center w-full pt-24">
                        <div className="flex flex-colw-full h-fit mx-3 md:mx-16 items-center justify-center">
                            <div className="flex flex-col gap-y-12">
                                <div className="mx-4 lg:mx-0 xl:min-w-[750px]">
                                    <h1 className="max-w-[1000px] leading-[3.3rem] dark:text-neutral-100 w-full text-5xl font-semibold mb-1">
                                        {article.articleTitle}
                                    </h1>
                                    <div className="mb-1">
                                        <ArticleCreatedAt time={article._sys.createdAt}/>
                                        <ReadingTime articleTextHTML={article.article} />
                                    </div>
                                    <Link
                                        href="/blogs"
                                        className="
                                        dark:text-neutral-100 w-fit
                                        dark:active:bg-neutral-100
                                        dark:hover:bg-neutral-700
                                        hover:bg-neutral-200
                                        active:bg-neutral-700
                                        active:text-neutral-50">
                                        <i className="ri-arrow-left-line"></i>
                                        BLOGS
                                    </Link>
                                </div>
                                {
                                    article.coverImage ?
                                        <CoverImage article={article}/>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                    <ArticlePage articleData={article} data-usercss="article-area" />
                </main>
                <aside className="px-5 lg:px-0 max-w-3xl mx-auto">
                    <div className="flex items-center gap-x-3 dark:text-neutral-700 text-neutral-400" data-usercss="endhr-container">
                        <hr className="w-full dark:border-neutral-700 border-neutral-400" data-usercss="endhr-first" />
                        <span className="tracking-widest">END</span>
                        <hr className="w-full dark:border-neutral-700 border-neutral-400" data-usercss="endhr-second" />
                    </div>
                    <div className="flex items-center my-3 ml-2" data-usercss="sharebuttons-container">
                        <span className="text-xs mr-3 font-bold dark:text-neutral-400 text-neutral-700">SHARE ON</span>
                        <div data-usercss="sharebuttons" className="flex gap-x-2">
                            <ShareButton
                                provider="twitter"
                                href={
                                    `https://twitter.com/intent/tweet\
?text=${encodeURI(`${article.articleTitle} | IrihiBlog`)}\
&via=${encodeURI(`Irihidev`)}\
&url=${encodeURI(`https://irihi.pages.dev/blogs/${params.slug}`)}\
&hashtags=${encodeURI("IrihiLog")}`
                                }/>
                            <ShareButton provider="facebook" href={
                                `https://www.facebook.com/sharer/sharer.php\
?u=${encodeURI(`https://irihi.pages.dev/blogs/${params.slug}`)}\
?hashtag=${encodeURI("IrihiLog")}`
                            } />
                            <ShareButton provider="pocket" href={
                                `http://getpocket.com/edit\
?url=${encodeURI(`https://irihi.pages.dev/blogs/${params.slug}`)}\
`} />

                            <ShareButton provider="line" href={
                                `https://social-plugins.line.me/lineit/share\
?url=${encodeURI(`https://irihi.pages.dev/blogs/${params.slug}`)}`}/>
                        </div>
                    </div>
                    <Donate />
                </aside>
                <aside className="mt-14 px-5 lg:px-16 xl:px-0 max-w-6xl mx-auto">
                    <h4 className="font-bold text-4xl">Related</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">関連記事は<b>今後</b>実装されます...</p>
                    <div className="overflow-x-auto mt-4 flex gap-x-4 snap-mandatory snap-x">
                        <div className="snap-always snap-center w-64 flex-none h-36 bg-neutral-200 dark:bg-neutral-700/70 rounded-md"></div>
                        <div className="snap-always snap-center w-64 flex-none h-36 bg-neutral-100 dark:bg-neutral-800/60 rounded-md"></div>
                        <div className="snap-always snap-center w-64 flex-none h-36 bg-neutral-100/70 dark:bg-neutral-800/30 rounded-md"></div>
                    </div>
                </aside>
                <div className="h-14"></div>
            </div>
        </div>
    )
}
