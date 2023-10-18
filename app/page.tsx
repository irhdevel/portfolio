import Link from "next/link"
import "remixicon/fonts/remixicon.css"
export default function Home() {
    return (
        <main className="w-full h-full flex justify-center items-center gap-4">
            <h1 className="text-5xl font-bold">Irihi</h1>
            <Link
                href="/blogs"
                className="
                dark:text-blue-500 font-medium 
                text-blue-600 flex gap-x-1
                dark:hover:bg-blue-900
                dark:active:bg-blue-100
                hover:bg-blue-100
                active:bg-blue-700">
                <i className="ri-edit-line"></i>
                BLOGS
            </Link>
        </main>
    )
}
