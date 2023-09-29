import style from './ArticlePage.module.css'
import clsx from 'clsx'
import parse, { DOMNode } from 'html-react-parser'
import { Element } from 'html-react-parser'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-coldark-dark.css'
import { CodeBlock } from './CodeBlock'

export async function ArticlePage({ articleData }: {articleData: any}) {
    return(
        <div className='w-full flex justify-center'>
            <div
                className={clsx("articleRoot", style.articleRoot)}>
                {parse(articleData.article, {
                    replace: function (domNode: DOMNode) {
                        if (domNode instanceof Element){
                            if (domNode.type == "tag" && domNode.name == "code"){
                                const elem = domNode as any
                                const code = elem.children[0].data
                                console.log(code)
                                let lang: string = "css"
                                if (elem.attribs.class) {
                                    lang = elem.attribs.class.toString().replace("language-", "")
                                }
                                let htmlCode = Prism.highlight(code, Prism.languages[lang], lang )
                                return(
                                    <CodeBlock>{parse(htmlCode)}</CodeBlock>
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
        </div>
    )
}
