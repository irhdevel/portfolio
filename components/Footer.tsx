import Link from "next/link"

export function Footer() {
    return(
        <footer className="bg-neutral-200 dark:bg-neutral-900 border-t border-t-neutral-300 dark:border-neutral-700 py-5">
            <span className="mx-auto w-fit block">
                &copy; 2023 Irihi
               <Link href="/privacy" className="ml-2 text-neutral-600 dark:text-neutral-400">プライバシーポリシー</Link>
            </span>
        </footer>
    )
}
