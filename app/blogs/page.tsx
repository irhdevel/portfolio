import { getBlogs } from "@/utils/api";
import { ArticleThumbnail } from "@/components/ArticleThumbnail";
import Link from "next/link"

export default async function BlogPage(){
    const blogs = await getBlogs()
    return(
        <div>
            <Link href="/" className="w-fit hover:bg-neutral-200 active:bg-neutral-700 active:text-neutral-50">
                <i className="ri-arrow-left-line"></i>
                TOP
            </Link>
            <div className="grid gap-5 grid-cols-3">
                {
                    blogs.items.map((content: any, index)=>{
                        return (
                            <ArticleThumbnail key={index} href={`/blogs/${content._id}`} article={content}/>
                        )
                    })
                }
            </div>

        </div>
    )
}
