import { getArticle, getBlogs } from "@/utils/api"
import Link from "next/link"
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

export default async function BlogPage({params}: {params: {slug: string}}) {
    const article: any = await getArticle(params.slug)
    return(
        <div>
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
                                <h1 className="w-fit text-5xl font-semibold mb-1">
                                    {article.articleTitle}
                                </h1>
                                <span className="flex mb-3 text-gray-600">DATE: {new Date(article._sys.createdAt).toLocaleString()}</span>
                                <Link href="/blogs" className="w-fit hover:bg-neutral-200 active:bg-neutral-700 active:text-neutral-50">
                                    <i className="ri-arrow-left-line"></i>
                                    BLOGS
                                </Link>
                            </div>
                            {
                                article.coverImage ?
                                    <img src={article.coverImage.src} alt={article.coverImage.altText} className="w-full h-auto rounded-md" />
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
