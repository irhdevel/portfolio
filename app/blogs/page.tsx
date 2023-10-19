import { getBlogs } from "@/utils/api";
import { ArticleThumbnail } from "@/components/ArticleThumbnail";
import Link from "next/link"
import "remixicon/fonts/remixicon.css"

export default async function BlogPage(){
    const blogs = await getBlogs()
    return(
        <div className="min-h-screen">
            <div className="dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-100 mb-16 py-4 px-14">
                <Link
                    href="/" 
                    className="
                    w-fit dark:hover:bg-neutral-700 
                    dark:active:bg-neutral-100 
                    dark:active:text-neutral-900 
                    hover:bg-neutral-200 
                    active:bg-neutral-700 
                    active:text-neutral-100">
                    <i className="ri-arrow-left-line"></i>
                    TOP
                </Link>
                <h1 className="font-bold dark:text-neutral-100 text-neutral-800 text-6xl">BLOGS</h1>
            </div>
            <main className="w-full flex items-center justify-center">
                <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2">
                    {
                        blogs.items.map((content: any, index)=>{
                            return (
                                <ArticleThumbnail key={index} href={`/blogs/${content._id}`} article={content}/>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}
