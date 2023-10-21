import { getBlogs } from "@/utils/api";
import { ArticleThumbnail } from "@/components/ArticleThumbnail";
import "remixicon/fonts/remixicon.css"
import { LinkBtn } from "@/components/LinkBtn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IrihiLog - Irihi's Blog"
} 

export default async function BlogPage(){
    const blogs = await getBlogs()
    return(
        <div className="min-h-screen">
            <div className="dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-100 mb-16 py-4 px-14">
                <LinkBtn href="/">
                    <i className="ri-arrow-left-line"></i>
                    TOP
                </LinkBtn>
                <h1 className="font-bold dark:text-neutral-100 text-neutral-800 text-6xl">IRIHILOG</h1>
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
