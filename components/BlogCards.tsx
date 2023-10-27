"use client"

import { ArticleThumbnail } from "@/components/ArticleThumbnail";
import { motion, cubicBezier } from "framer-motion"

export function BlogCards({blogs}: {blogs: any}) {
    return(
        <motion.div
            className="grid gap-x-5 gap-y-9 lg:grid-cols-3 md:grid-cols-2"
            initial={{ translateY: "80px", opacity: 0.6 }}
            animate={{ translateY: "0px", opacity: 1 }}
            transition={{ duration: 0.2, ease: [cubicBezier(0, 1, 0.62, 1), cubicBezier(1, 0.02, 1, 0.37)] }}>
            {
                blogs.items.map((content: any, index: number)=>{
                    return (
                        <ArticleThumbnail key={index} href={`/blogs/${content._id}`} article={content}/>
                    )
                })
            }
        </motion.div>

    )
}
