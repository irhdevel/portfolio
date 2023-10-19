import { getArticle, getBlogs } from "@/utils/api"
import Link from "next/link"
import { Metadata, ResolvingMetadata } from "next"
import { ArticlePage } from "@/components/ArticlePage"
import { ArticlePageHeaderImg } from "@/components/ArticlePageHeaderImg"
import "remixicon/fonts/remixicon.css"

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
        title: `${article.articleTitle} | IrihiBlog`
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
                <div className="relative">
                    <div className="flex justify-center items-center w-full py-16">
                        <div className="flex flex-col gap-y-10 w-full h-fit mx-3 md:mx-16">
                            <div className="mx-4 lg:mx-0">
                                <h1 className="dark:text-neutral-100 w-fit text-5xl font-semibold mb-1">
                                    {article.articleTitle}
                                </h1>
                                <span 
                                    className="
                                    flex mb-3 text-gray-600 
                                    dark:text-gray-300">
                                    DATE: {new Date(article._sys.createdAt).toLocaleString()}
                                </span>
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
                                    <img src={article.coverImage.src} alt={article.coverImage.altText} className="w-full h-auto rounded-md dark:border dark:border-neutral-700" />
                                    : null
                            }
                        </div>
                    </div>
                    <ArticlePage articleData={article} />
                </div>
            </div>
        </div>
    )
}
