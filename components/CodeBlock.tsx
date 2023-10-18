import { ReactNode } from "react";

export function CodeBlock({children}: {children: ReactNode}) {
    return(
        <code className=" w-full overflow-scroll inline-block py-4 px-8 rounded-lg my-5 text-white dark:bg-neutral-800 bg-[#1b212b]">{children}</code>
    )
}
