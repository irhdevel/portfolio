"use client"
import style from './ArticlePage.module.css'
import clsx from 'clsx'
import parse, { DOMNode } from 'html-react-parser'
import { Element } from 'html-react-parser'
import { motion, cubicBezier } from 'framer-motion'
import "photoswipe/style.css"
import { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import dynamic from 'next/dynamic'

const CodeBlock = dynamic(()=> import("./CodeBlock").then((mod)=> mod.CodeBlock),{
    ssr: false,
})

export function ArticlePage({ articleData }: {articleData: any}) {
    useEffect(()=>{
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: "#articleRoot",
            children: "a.pswpimg",
            pswpModule: () => import('photoswipe')
        })
        lightbox.init()
        const galleryContainerQuery = "#articleRoot"
        const galleryContainer = document.querySelectorAll(galleryContainerQuery)
        galleryContainer.forEach((node) => {
            node.querySelectorAll(".pswpimg").forEach((elem/*, index_pswpimg*/)=>{
                if (elem.classList.contains("pswpimg")){
                    elem.childNodes.forEach((childnode) => {
                        if (childnode.nodeName === "IMG"){
                            const imgElem = (childnode as HTMLImageElement)
                            const { naturalWidth: width, naturalHeight: height } = imgElem
                            var img = new Image()
                            img.src = imgElem.src
                            img.alt = imgElem.alt
                     // if this is 0, it needed more adjusting.
                            elem.setAttribute("data-pswp-width", width.toString())
                            elem.setAttribute("data-pswp-height", height.toString())
                            imgElem.remove()
                            elem.appendChild(img)
                            // if (index_pswpimg === 0 && elem.querySelectorAll("div.taptozoom_label").length === 0){
                            //     var spanInfo = document.createElement("div")
                            //     spanInfo.classList.add("taptozoom_label")
                            //     spanInfo.appendChild(document.createTextNode("Tap to zoom"))
                            //     elem.appendChild(spanInfo)
                            // }
                        } else return
                    })
                } else return
            })
        })
        return () => {
            lightbox?.destroy()
            lightbox = null
        }
    },[])
    return(
        <motion.div
            className='w-full flex justify-center'
            initial={{ translateY: "120px"}}
            animate={{ translateY: "0px" }}
            transition={{ duration: 0.7, ease: [cubicBezier(0, 1, 0.5, 1)] }}>
            <div
                className={clsx("articleRoot", style.articleRoot)}
                id="articleRoot">
                {parse(articleData.article, {
                    replace: function (domNode: DOMNode) {
                        if (domNode instanceof Element){
                            if (domNode.type == "tag" && domNode.name == "code"){
                                const elem = domNode as any
                                const code: string = elem.children[0].data
                                let lang: string = ""
                                let filename: string = ""
                                let hl_range: number[] = []
                                if (elem.attribs.class) {
                                    let classNames = elem.attribs.class.toString().split(":")
                                    lang = classNames[0].replace("language-", "")
                                    if (classNames[1]){
                                        filename = classNames[1]
                                    }
                                    if (classNames[2]){
                                        classNames[2].split("-").forEach((num: string)=>{
                                            hl_range.push(Number(num))
                                        })
                                    }
                                }
                                return(
                                    <CodeBlock code={code} lang={lang} filename={filename} hl_range={hl_range} />
                                )
                            } else if(domNode.type == "tag" && domNode.name == "img") {
                                return (
                                    <a
                                        href={domNode.attribs.src}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='pswpimg'>
                                        <img src={domNode.attribs.src} alt={domNode.attribs.alt} />
                                    </a>
                                )
                            } else {
                                return
                            }
                        } else {
                            return
                        }
                    }
                })}
            </div>
        </motion.div>
    )
}
