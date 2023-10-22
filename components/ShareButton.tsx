import "remixicon/fonts/remixicon.css"
import { ComponentProps } from "react"
import clsx from "clsx"

type ShareButtonProps = {
    provider: "twitter" | "line" | "facebook" | "feedly" | "pocket",
    href: string
} & ComponentProps<'a'>

export function ShareButton({provider, href, className}: ShareButtonProps) {
    let providerInformation: {
        iconClassName: string,
    } = {
            iconClassName: ""
        }

    switch(provider){
        case "twitter":
            providerInformation.iconClassName = "ri-twitter-line"
            break
        case "line":
            providerInformation.iconClassName = "ri-line-line"
            break
        case "facebook":
            providerInformation.iconClassName = "ri-facebook-box-line"
            break
        case "feedly":
            providerInformation.iconClassName = "ri-rss-line"
            break
        case "pocket":
            providerInformation.iconClassName = "ri-arrow-down-s-line"
            break
        default:
            new Error("unreachable code")
            break
    }
    return(
        <a target="_blank" rel="nofollow noopener noreferrer" href={href} className={clsx(className, "dark:text-neutral-600 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-400 block w-fit text-2xl")}>
            <i className={clsx(providerInformation!.iconClassName, "block")}></i>
        </a>
    )
}
