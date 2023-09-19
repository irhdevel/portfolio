import { getBlogs } from "@/utils/api";

export default async function BlogPage(){
    const blogs = await getBlogs()
    return(
        <div>
            {
                blogs.items.map((content: any, index)=>{
                    return <div key={index} >{content.articleTitle}</div>
                })
            }
        </div>
    )
}
