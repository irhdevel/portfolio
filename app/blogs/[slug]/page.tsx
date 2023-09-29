import { getArticle, getBlogs } from "@/utils/api"
import Link from "next/link"
import { ArticlePage } from "@/components/ArticlePage"

export async function generateStaticParams() {

    let blogs = await getBlogs()
    let ids: string[] = []
    blogs.items.forEach((blog: any)=>{
        ids.push(blog._id)
    })
    return ids
}

export default async function BlogPage({params}: {params: any}) {
    const article: any = await getArticle(params.slug)
    return(
        <div>
            <div className="bg-neutral-100 w-full py-20 px-28 gap-y-2 flex flex-col">
                <h1 className="text-5xl font-semibold">
                    {article.articleTitle}
                </h1>
                <Link href="/blogs" className="w-fit hover:bg-neutral-200 active:bg-neutral-700 active:text-neutral-50">
                    <i className="ri-arrow-left-line"></i>
                    BLOGS
                </Link>
            </div>
            <ArticlePage articleData={article} />
        </div>
    )
}
