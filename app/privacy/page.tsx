import style from "./page.module.css"

export default function Privacy() {
   return (
      <div className={style.root}>
         <h1 className="font-extrabold text-5xl leading-relaxed">
            Irihi.pages.dev<br />
            プライバシーポリシー
         </h1>
         <span className="font-bold text-xl dark:text-neutral-400">取得される情報と、その保護方針について</span>
         <h2 className={style.heading2}>1. はじめに</h2>
         <p className={style.paragraph}>
            この文章は <a className="text-blue-300" href="https://irihi.pages.dev/">https://irihi.pages.dev/</a> 以下のURLでアクセスできるウェブサイト（以下、このウェブサイト）に適用される、このウェブサイトにアクセスした者（以下、アクセス者）の情報の保護方針について解説するものです。
         </p>

         <p className={style.paragraph}>
            このウェブサイトの運営者であるIrihiは、このポリシーに従ってアクセス者情報を扱うもの
            とします。
         </p>
         <h2 className={style.heading2}>2. アクセス者の情報の取得方法及び使用方法</h2>
         <p className={style.paragraph}>
            このウェブサイトのアクセス者に関して、取得される情報は以下のとおりです。
         </p>
         <p className={style.paragraph}>
            これらの情報は全て、本ポリシーに記載されている用途にしか利用されません。
         </p>
         <p className={style.paragraph}>
            しかし、法令に基づいた第三者への情報の提供である場合には、この限りではありません。
         </p>
         <h3>
            問い合わせに使用されたメールアドレス
         </h3>
         <p className={style.paragraph}>
            問い合わせに回答するための用途にのみ使用されます。
         </p>
         <h3>
            サービス利用状況とアクセス端末情報
         </h3>
         <p className={style.paragraph}>
            このウェブサイトでは、アクセス解析ツール及び運用に使用している外部事業者のサービス
            を用いて、アクセス者の端末情報と、サービスの利用状況などの行動が追跡・取得されています。
         </p>
         <p className={style.paragraph}>
            これらの情報はすべて匿名で取得されていて、個人を特定するものではありません。
         </p>
         <p className={style.paragraph}>
            これらの情報は今後のサービスの提供・維持と改善・最適化のために使用されます。
         </p>
         <p className={style.paragraph}>
            また、個人を特定しない統計情報の形で、サービスの利用状況・アクセス数などをブログの記事内などで表示、紹介することがあります。
         </p>

         使用されているアクセス解析ツール及び外部事業者サービスについて

         <p className={style.paragraph}>
            使用されている外部ツール及び外部サービスを記載しています。

         </p>
         <p className={style.paragraph}>
            ここに記載されていないサービスが利用される場合があります。
         </p>
         <span>
            このウェブサイトの運用に使用されている、または使用される可能性があるアクセス解析
            ツールは次のとおりです。</span>
         <ul>
            <li>
               Google Analytics
            </li>

            <li>
               Cloudflare Web Analytics
            </li>

            <li>
               Google Search Console
            </li>

            <li>
               Bing Webmaster Tools
            </li>
         </ul>
         <span>
            このウェブサイトの運用に使用されている、または使用される可能性がある外部事業者の
            サービスは次のとおりです。
         </span>
         <ul>
            <li>
               Cloudflare Pages
            </li>
            <li>
               Newt
            </li>
            <li>
               Giscus
            </li>
            <li>
               Algoria
            </li>
            <li>
               Ranklet4
            </li>
         </ul>
         <p className={style.paragraph}>これらのツール及びサービスはアクセス者の端末情報の取得及びCookieやその類似技術（
            WebStorage API、 Indexed DBなど）を用いたアクセス者の識別を行っているものがあり
            ます。これはCookieやその類似技術の無効化などによって拒否することができます。</p>
         <p className={style.paragraph}>しかし、Cloudflare Web Analyticsは計測にCookieを使用しておらず、計測を拒否する方法
            は用意していません。</p>
         <p className={style.paragraph}>Cloudflare Web Analytics及びCloudflare Pagesなど、利用しているCloudflareのサービス
            に関しては、Cloudflareのプライバシーポリシーから、プライバシーに関する詳しい情報を
            入手することができます。</p>
         <a href="https://www.cloudflare.com/ja-jp/privacypolicy/">https://www.cloudflare.com/ja-jp/privacypolicy/</a>
         <p className={style.paragraph}>Google Analyticsに関しては、データの収集及び処理に関する詳細な情報が、Googleポリ
            シーと規約ページ（<a href="https://policies.google.com/technologies/partner-sites">https://policies.google.com/technologies/partner-sites</a>）から利用可
            能です。</p>
         <h2 className={style.heading2}>3. 第三者へのデータ提供</h2>
         <p className={style.paragraph}>アクセス者に関するデータを第三者へ提供する場合は以下のとおりです。</p>
         <ul>
            <li>
               アクセス者の同意がある場合
            </li>
            <li>
               サイトの運営において必要な際、第三者に対して作業を委託する場合、または第三者の
               サービスを組み込む場合。
            </li>
            <li>
               法令に基づいた開示が必要である場合
            </li>
            <li>
               個人を特定しない状態で、アクセス者全体の傾向などを統計情報としてデータを記事内な
               どで紹介する場合
            </li>
         </ul>
         <h2 className={style.heading2}>4. データの安全対策と管理について</h2>
         <p className={style.paragraph}>運営者は、アクセス者のデータについて、適切な安全管理を行い、データの不正アクセスや
            改ざん、紛失、漏洩、破損等への対策のための適切なセキュリティ対策を行います。</p>
         <h2 className={style.heading2}>5. お問い合わせ</h2>
         <p className={style.paragraph}>このウェブサイトに関するお問い合わせは以下のメールアドレス宛へお願いいたします。</p>
         irihi.design(gmail.com)
         <h2 className={style.heading2}>6. 変更履歴</h2>
         <b>2023年12月30日:</b> 作成
         <div className="flex items-center justify-center flex-col dark:bg-neutral-800 py-9 my-6 rounded bg-neutral-100">
            <span>PDF版が利用できます。</span>
            <a href="/pdf/irihi.pages.dev_privacy-policy.pdf">ダウンロードして閲覧</a>
         </div>
      </div>
   )
}
