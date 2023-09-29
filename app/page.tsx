import Link from "next/link"
import "remixicon/fonts/remixicon.css"
export default function Home() {
    return (
        <main className="w-full h-full flex justify-center items-center gap-4">
            <h1 className="text-5xl font-bold">Irihi</h1>
            <Link href="/blogs" className="font-medium text-blue-600 flex gap-x-1">
                <i className="ri-edit-line"></i>
                BLOGS
            </Link>
        </main>
    )
}
