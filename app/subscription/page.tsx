'use client'
import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import style from "./page.module.css"
import clsx from 'clsx'

export default function FeedInfoPage() {
   return(
      <div>
         <div className='text-white w-full flex justify-center relative overflow-clip'>
            <Image className='object-cover z-0 blur scale-125 brightness-50' src="/bg-feed.webp" fill={true} alt=''/>
            <div className="w-full flex md:justify-center py-24 relative max-w-5xl">
               <Image className='object-cover z-0 brightness-90' src="/bg-feed.webp" fill={true} alt=''/>
               <div className='[text-shadow:_0px_0px_20px_#000000AA] gap-y-1 z-10 w-fit flex md:items-center flex-col mx-7 md:mx-0'>
                  <h1 className="font-extrabold tracking-wider text-4xl">IRIHILOG<span className='text-2xl'>を</span><br className='inline md:hidden' />購読しよう！</h1>
                  <p className='font-medium'>
                     各種RSSリーダを使えば、IRIHILOGの更新通知を受け取れます。
                  </p>
               </div>
            </div>
         </div>
         <div className='mt-20 w-full text-center'>
            <h2 className='font-bold text-2xl tracking-wide mb-2'>今すぐ購読！（無料）</h2>
            <p className='text-sm'>お使いのツールを選んで始めましょう。</p>
         </div>
         <div className='w-full flex justify-center my-10'>
            <div className='flex w-full gap-4 px-3 sm:px-12 max-w-4xl md:flex-row flex-col'>
               <div className={clsx('text-white w-full max-w-full rounded-md grid grid-cols-1 auto-rows-max justify-items-center py-6', style.feedly_sub_con)}>
                  <div className='flex flex-col items-center text-center'>
                     <h3 className='font-semibold text-xl'>Feedlyで購読</h3>
                     <p className='text-sm font-medium'>このリンクから購読できます。</p>
                  </div>
                  <div className='flex flex-col items-center my-3'>
                     <a className='hover:brightness-110 transition active:transition-none active:brightness-50' href='https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Firihi.pages.dev%2Ffeed.xml' target='blank'>
                        <Image
                           id='feedlyFollow'
                           src='https://s1.feedly.com/legacy/feedly-follow-rectangle-flat-big_2x.png'
                           alt='follow us in feedly' width='131' height='56' />
                        <span className='text-sm mt-1 opacity-70'>
                           クリックして購読
                           <i className="ml-1 ri-external-link-line"></i>
                        </span>
                     </a>
                  </div>
               </div>
               <div className={clsx('text-white w-full max-w-full rounded-md grid grid-cols-1 auto-rows-max justify-items-center py-6 px-3 sm:px-0', style.rss_sub_con)}>
                  <div className='flex flex-col items-center text-center'>
                     <h3 className='font-semibold text-xl'>その他RSSリーダで購読</h3>
                     <p className='text-sm font-medium'>ツールにフィードのURLを追加しましょう。</p>
                  </div>
                  <div className='flex flex-col items-center my-3 w-full'>
                     <div className='flex gap-3'>
                        <input
                           type="text"
                           value="https://irihi.pages.dev/feed.xml"
                           readOnly
                           className='bg-white/20 px-3 py-1 rounded sm:w-64 w-full block text-center'
                           onClick={
                              (e)=>{
                                 e.currentTarget.setSelectionRange(0, 9999)
                              }
                           }
                        />
                        <button
                           title='フィードのURLをコピーする'
                           onClick={
                              ()=>{
                                 navigator.clipboard.writeText("https://irihi.pages.dev/feed.xml")
                              }
                           }
                           className='rounded-full active:bg-amber-900 w-10 h-10'
                        >
                           <i className="ri-file-copy-line"></i>
                        </button>
                     </div>
                     <span className='text-sm mt-1 opacity-70 max-w-72'>
                        <i className="ri-arrow-right-line mr-1"></i>
                        コピーしたRSSのURLを<br className='sm:hidden'/>フィードリーダに貼り付け、設定します。
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div className='w-full max-w-7xl mx-auto'>
            <div className='flex flex-col items-center gap-y-1.5 pt-20 pb-14 mx-7 lg:mx-0 text-center'>
               <h2 className='text-xl font-semibold tracking-wider'>YouTubeでチャンネル登録するように、ブログも購読しよう。</h2>
               <p>ブログだって、気に入ってくれたのなら、最新記事を読んでみてほしい。</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 w-full justify-items-center items-start gap-5 px-7 sm:px-24'>
               <div className="grid grid-row-2 auto-cols-auto gap-y-1">
                  <Image className="bg-neutral-100 dark:bg-neutral-600 rounded-lg mb-2" src="/illust/shigureni/yugata_yaruki.png" alt='' width={1001} height={1001}/>
                  <h3 className="text-center font-bold text-lg">IRIHILOGなら、リーダで全文読める。</h3>
                  <p className="text-center">お好みのRSSリーダから離れずに、文章に集中。</p>
               </div>
               <div className="grid grid-row-2 auto-cols-auto gap-y-1">
                  <Image className="bg-neutral-100 dark:bg-neutral-600 rounded-lg mb-2" src="/illust/shigureni/tab_increase.png" alt='' width={800} height={800}/>
                  <h3 className="text-center font-bold text-lg">一括管理も、プッシュ通知も、工夫次第。</h3>
                  <p className="text-center">様々なRSSリーダに対応。それぞれのリーダの機能を使うことで、様々な読み方が可能に。</p>
               </div>
               <div className="grid grid-row-2 auto-cols-auto gap-y-1">
                  <Image className="bg-neutral-100 dark:bg-neutral-600 rounded-lg mb-2" src="/illust/shigureni/keyboard_nazo_neko.png" alt='' width={1001} height={1000}/>
                  <h3 className="text-center font-bold text-lg">日頃のアイデアや、ネットサーフィンの
                     <br className='sm:inline md:hidden xl:inline hidden' />
                     起点に。
                  </h3>
                  <p className="text-center">記事を読めば、次に調べたいことが<br className='sm:inline hidden' />どんどん出てくる。新たに注目したいものが<br className='sm:inline hidden' />見つかるかも。</p>
               </div>
            </div>
            <span className='px-4 sm:px-20 w-full text-center block text-sm opacity-70 mt-5'>
               イラスト素材に
               <a href="https://www.shigureni.com/"
                  className='text-blue-500 dark:text-blue-300 underline
                  hover:bg-blue-300 hover:text-white active:bg-transparent
                  active:no-underline active:text-blue-500'>
                  shigureni free illust
               </a>
               を使用しています。
               素晴らしいイラストをありがとうございます。
            </span>
         </div>
         <div className='w-full px-8 sm:px-10 lg:px-24 mt-14 max-w-7xl mx-auto'>
            <div className='flex gap-2'>
               <i className="ri-error-warning-line text-2xl text-blue-500 dark:text-blue-300"></i>
               <div className='flex flex-col'>
                  <h2 className='font-bold text-2xl'>
                     注意事項
                  </h2>
                  <span className='text-sm opacity-70'>RSSをご使用いただく際の注意事項</span>
               </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-rows-3 mt-4 gap-x-4 gap-y-8'>
               <div className='z-10'>
                  <h3 className='font-semibold'>
                     <i className="mr-1 ri-calendar-schedule-line"></i>
                     更新情報が届く時間はリーダにより異なります
                  </h3>
                  <p className='text-sm mt-1 opacity-70 leading-relaxed'>
                     サイトの更新後、その情報はリーダに伝わりません。リーダ側のタイミングでデータを取得し、更新があった場合に表示するという仕組みなので、RSSリーダに新着記事が表示されるまでの遅延が大きいです。
                  </p>
               </div>
               <div className='z-10'>
                  <h3 className='font-semibold'>
                     <i className="mr-1 ri-article-line"></i>
                     ビューアにより本文が読めない可能性があります。
                  </h3>
                  <p className='text-sm mt-1 opacity-70 leading-relaxed'>
                     IRIHILOGのRSSでは、記事本文を、Web版で利用するのとほとんど同じHTML形式で配信しています。HTML形式に対応していないRSSリーダをご使用の場合、HTMLタグがそのまま表示されたり、本文が表示されない可能性があります。その場合は、記事閲覧はWeb版をご利用ください。
                  </p>
               </div>
               <div className='z-10'>
                  <h3 className='font-semibold'>
                     <i className="mr-1 ri-sparkling-2-line"></i>
                     表示される情報が正確または最新でない可能性があります。
                  </h3>
                  <p className='text-sm mt-1 opacity-70 leading-relaxed'>
                     使用されるRSSリーダの仕様により、記事が正確に表示できない可能性があります。情報の正確性がWeb版と同等であること・記事の状態が最新であることを、Irihiは保証できません。
                  </p>
               </div>
               <div className='z-10'>
                  <h3 className='font-semibold'>
                     <i className="mr-1 ri-list-ordered-2"></i>
                     最新記事を含め直近7つの投稿のみ取得できます。
                  </h3>
                  <p className='text-sm mt-1 opacity-70 leading-relaxed'>
                     RSS用XMLファイルの容量削減のために、直近7つの投稿のみ取得できるようにしています。それ以前の投稿を閲覧したい場合は、RSSリーダに記憶されているものか、Webバージョンを利用してください。
                  </p>
               </div>
               <div className='z-10'>
                  <h3 className='font-semibold'>
                     <i className="mr-1 ri-information-2-line"></i>
                     RSSバージョンの記事本文には、末尾にRSSの注意事項に関する文章が追加されています。
                  </h3>
                  <p className='text-sm mt-1 opacity-70 leading-relaxed'>
                     RSSバージョンの正確性などについての注意事項が記事末尾に追加されて配信されています。記事を読む際に邪魔にならないように心がけています。
                  </p>
               </div>
            </div>
         </div>
         <div className='w-full h-[900px] bg-neutral-300 dark:bg-black flex flex-col items-center mt-[-10px] overflow-clip'>
            <div className='z-0 dark:hidden flex justify-center mt-[-160px]'>
               <svg width="1542" height="421" viewBox="0 0 1542 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M736.587 405.595C758.136 415.384 782.864 415.384 804.413 405.595L1388.21 140.409C1468.51 103.932 1442.49 -16.25 1354.3 -16.25H186.703C98.5052 -16.25 72.4887 103.932 152.79 140.409L736.587 405.595Z" fill="#FFFFFF"/>
                  <mask id="mask0_73_10" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="-193" y="-17" width="1927" height="438">
                     <path d="M770.5 421L1733.09 -16.25H-192.087L770.5 421Z" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_73_10)">
                     <rect x="-137" y="-106" width="1923" height="337" fill="#FFFFFF"/>
                  </g>
               </svg>
            </div>
            <div className='z-0 dark:flex hidden justify-center mt-[-160px]'>
               <svg width="1542" height="421" viewBox="0 0 1542 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M736.587 405.595C758.136 415.384 782.864 415.384 804.413 405.595L1388.21 140.409C1468.51 103.932 1442.49 -16.25 1354.3 -16.25H186.703C98.5052 -16.25 72.4887 103.932 152.79 140.409L736.587 405.595Z" fill="#171717"/>
                  <mask id="mask0_74_10" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="-193" y="-17" width="1927" height="438">
                     <path d="M770.5 421L1733.09 -16.25H-192.087L770.5 421Z" fill='#D9D9D9'/>
                  </mask>
                  <g mask="url(#mask0_74_10)">
                     <rect x="-137" y="-106" width="1923" height="337" fill="#171717"/>
                  </g>
               </svg>
            </div>
            <div className='z-10 my-20 max-w-2xl px-8 sm:px-12 lg:px-0'>
               <h2 className='font-bold text-3xl'>フィード登録は済んだ&nbsp;?&nbsp;&nbsp;さぁ、記事に戻ろう。</h2> 
               <Link href="/blogs" className='flex items-center gap-x-1 text-lg mt-2 underline active:no-underline'>
                  <i className="ri-arrow-right-line"></i>
                  記事一覧ページへ
               </Link>
               <p className='text-sm leading-7 mt-3'>
                  フィードに登録してくれた方、ありがとうございます。<br />
                  ぜひときどき、記事更新を確認したり、ここを訪れたりしてほしいです。よろしくお願いします。<br />
                  Slackを使えばプッシュ通知も受け取れたりするそうです。SlackってRSSリーダではないけど。<br />
                  NewsFlashっていうLinux用のフィードリーダ結構好きです。ちゃんとHTML読んできれいに表示してくれます。<br />
                  ...定期的に更新したいな
               </p>
            </div>
         </div>
      </div>
   )
}
