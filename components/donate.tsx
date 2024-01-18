import Image from 'next/image'

export function Donate() {
   return(
      <div className='relative h-fit max-w-[500px] mx-auto my-10 rounded-lg overflow-clip text-white'>
         <Image className='z-0' src="/bg-dnt.webp" alt='' width={1529} height={1080}/>
         <div className='p-7 sm:m-0 absolute top-0 z-10 w-full h-full flex items-center justify-center'>
            <div className='flex flex-col items-center'>
              <span className='font-bold sm:text-3xl [text-shadow:_0px_0px_20px_#00000099]'>IrihiをKampaで応援できます。</span> 
              <p className='text-center font-medium mt-1 [text-shadow:_0px_0px_20px_#00000099]'>15円から投げ銭をすることができます。</p>
               <a className='border border-yellow-600 hover:scale-105 transition ease-out active:bg-transparent active:transition-none bg-neutral-200 text-yellow-600 px-5 py-2 mt-6 font-bold rounded-lg text-lg' href="https://kampa.me/t/vnv">Kampa!を開く</a>
            </div> 
         </div>
      </div>
   )
}
