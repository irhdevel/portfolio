import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

type LinkBtnProps = {
    href: string,
    children: ReactNode,
    className?: string
}
export function LinkBtn(props: LinkBtnProps) {
    return(
        <Link
            href={props.href}
            className={clsx(" \
            dark:text-blue-500 font-medium \
            text-blue-600 flex gap-x-1 w-fit \
            dark:hover:bg-blue-900 \
            dark:active:bg-blue-100 \
            hover:bg-blue-100 \
            active:bg-blue-700", props.className)}>
            {props.children}
        </Link>
    )
}
