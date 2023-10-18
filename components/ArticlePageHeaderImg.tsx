import style from "./ArticlePageHeaderImg.module.css"
import clsx from "clsx"

export function ArticlePageHeaderImg({ coverImage }: {coverImage: any}) {
    return(
        <div className={style.headerImageContainer} data-usercss="headerImageContainer">
            <img src={coverImage.src} alt={coverImage.altText} className={clsx(style.coverImageHeader)} data-usercss="headerImage" />
            <div className={style.gradientOverlay} data-usercss="gradientOverlay"></div>
        </div>
    )
}
