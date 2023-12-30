"use client"
import { motion, cubicBezier } from "framer-motion"
export function CoverImage({article}: {article: any}) {

    return(
        <motion.div
            initial={{ transform: "scale(0.95)", opacity: 0.3 }}
            transition={{ ease: [cubicBezier(0, 0.97, 0.52, 1), cubicBezier(1, 0.02, 1, 0.37)], duration: 0.3 }}
            animate={{ transform: "scale(1)", opacity: 1 }}>
            <img
                src={article.coverImage.src}
                alt={article.coverImage.altText}
                className="w-full h-auto rounded-md
                dark:border dark:border-neutral-700 max-w-[1100px]" />
        </motion.div>

    )
}
