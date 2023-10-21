import localFont from 'next/font/local'
import { Figtree } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'

export const yakuHanJP = localFont({
    src: [
        {
            path: '../public/fonts/YakuHanJP-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/YakuHanJP-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/YakuHanJP-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/YakuHanJP-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/YakuHanJP-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../public/fonts/YakuHanJP-SemiBold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../public/fonts/YakuHanJP-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/fonts/YakuHanJP-ExtraBold.woff2',
            weight: '800',
            style: 'normal'
        },
        {
            path: '../public/fonts/YakuHanJP-Black.woff2',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: '--font-yakuhan-jp',
    display: 'swap'
})

export const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree',
    display: 'swap'
})
export const notoSans = Noto_Sans_JP({
    weight: 'variable',
    variable: '--font-notosans-jp',
    style: 'normal',
    preload: false,
    display: 'swap'
})
