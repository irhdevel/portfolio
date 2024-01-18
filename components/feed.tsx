import Image from 'next/image'
import Link from 'next/link'
import "remixicon/fonts/remixicon.css"

export function Feed() {
   return(

      <div className='text-white relative h-fit max-w-[500px] mx-auto my-10 rounded-lg overflow-clip'>
         <Image className='z-0 brightness-75' src="/bg-feed.webp" alt='' width={1529} height={1080}/>

         <Link className='hover:scale-105 transition ease-out active:bg-transparent active:transition-none' href="/subscription">
            <div className='p-9 sm:m-0 absolute top-0 z-10 w-full h-full flex items-center justify-center'>
               <div className='flex flex-col'>
                  <span className='font-bold sm:text-xl'>Feedlyで購読しませんか?</span> 
                  <p className='font-medium text-sm mt-1'>
                     YouTubeのチャンネル登録をするように、ブログも購読しませんか?<br />
                     Feedlyでフォローすれば、更新情報が手に入ります。<br />その他RSSリーダでも。
                  </p>
                  <Link href="/subscription" className='text-white font-bold mt-1'>
                     RSSについて
                     <i className="ri-arrow-right-line"></i>
                  </Link>
               </div> 
            </div>
         </Link>
      </div>
   )
}
