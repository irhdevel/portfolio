import { AnimatePresence, motion } from "framer-motion"

export function LoadingModal() {
    return(
        <AnimatePresence mode="wait">
            <motion.div className="
                flex items-center justify-center
                w-full h-full fixed top-0 bg-black/80
                backdrop-blur"
                initial={{ backdropFilter: "blur(8px)" }}
                animate={{ backdropFilter: "blur(3px)"}}
                exit={{ backdropFilter: "blur(0px)" }}>
                <div className="flex flex-col items-center gap-y-3 text-neutral-200">
                    Loading
                    <img className="w-16 h-auto flex" src="/scrolldown.webp" alt="loading indicator" />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
