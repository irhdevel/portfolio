"use client"

import { ArticleThumbnail } from "@/components/ArticleThumbnail";
import { motion, cubicBezier, useAnimationControls } from "framer-motion"
import { useEffect } from "react";

export function BlogCards({blogs}: {blogs: any}) {
    const controls = useAnimationControls()
    const thumbAnimation = {
        init: {
         translateY: "120px",
         opacity: 0.8
      }
   }
   useEffect(()=>{
      controls.start((i)=>({
         translateY: [
            "120px",
            "0px"
         ],
         opacity: [0.8, 1],
         transition: {
            ease: [cubicBezier(0, 1, 0.5, 1)],
            duration: 0.7,
            delay: i * 0.04
         }
      })
   )},[])
    return(
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 mx-9">
            {
                blogs.items.map((content: any, index: number)=>{
                    return (
                        <motion.div
                            key={index}
                            initial="init"
                            animate={controls}
                            custom={index}
                            variants={thumbAnimation}
                        >
                            <ArticleThumbnail href={`/blogs/${content._id}`} article={content}/>
                        </motion.div>
                    )
                })
            }
        </div>

    )
}
