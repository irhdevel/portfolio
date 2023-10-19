import "remixicon/fonts/remixicon.css"
import { LinkBtn } from "@/components/LinkBtn"

export default function Home() {
    return (
        <main className="min-h-screen pl-16 pt-14 bg-neutral-100 m-8 mb-0 rounded-lg dark:bg-neutral-900">
            <div className="">
                <h1 className="text-9xl font-bold tracking-wide">Irihi</h1>
                <LinkBtn
                    className="text-3xl"
                    href="/blogs">
                    <i className="ri-edit-line"></i>
                    BLOGS
                </LinkBtn>
            </div>
            <div className="leading-8 tracking-wide pt-8">
                <p>こんにちは、Irihiです。</p>
                <p>夕焼けや雨を見ること、 音楽を聞くことが好きです。</p>
                <p>Webとかサムネイル系の画像デザインをしてみたり、コードを書いてみたりするのが趣味です。</p>
                <p>よろしくおねがいします 。</p>
            </div>
        </main>
    )
}
