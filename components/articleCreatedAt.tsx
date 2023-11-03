export function ArticleCreatedAt({time}: {time: string}) {
    return(
        <div
            className="
            flex text-gray-600 text-lg 
            dark:text-gray-300 gap-x-1">
            <i className="ri-calendar-line"></i>
            {
                new Date(time)
                .toLocaleString(
                    "ja-JP",
                    {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        hour12: false,
                        minute: "numeric"
                    }
                )
            }
        </div>
    )
}
