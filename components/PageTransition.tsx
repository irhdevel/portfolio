"use client"
import { cubicBezier, motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import { ReactNode } from "react"

export function PageTransition({children}: {children: ReactNode}) {
    const pathName = usePathname()

    return(
        <motion.div
            key={pathName}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [cubicBezier(0, 0.97, 0.52, 1), cubicBezier(1, 0.02, 1, 0.37)], duration: 0.3 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>

    )
}

