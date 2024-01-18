import { getBlogs } from "@/utils/api"
import { Feed } from "feed"

export async function GET(){
   const blogs = await getBlogs()
   const baseUrl = "https://irihi.pages.dev/blogs/"
   const feed = new Feed({
      title: "IRIHILOG",
      description: "魅力を感じたものを追ってみたり、参考になりそう？なことを書いてみたり、日常をまとめてみたり。じっくり読める、Irihiのブログ。",
      id: baseUrl,
      link: baseUrl,
      language: "ja",
      copyright: "© 2023 Irihi",
      generator: baseUrl,
      feedLinks: {
         xml: `${baseUrl}feed.xml`
      },
      author: {
         name: "Irihi",
         link: "https://irihi.pages.dev/"
      }
   })
   const itemArticles = blogs.items.slice(0, 7)
   itemArticles.forEach((blog: any)=>{
      feed.addItem({
         title: blog.articleTitle,
         id: baseUrl + blog._id,
         link: baseUrl + blog._id,
         description: blog.blogDescription,
         content: `<html><head>\
<meta charset="utf-8"/>\
<meta name="description" content=${blog.blogDescription}>\
<title>${blog.articleTitle}</title>\
</head>\
<body>\
${blog.article}\
<div>\
<p>\
<br />\
<br />\
<br />\
<br />\
---------------------\
<br />\
<br />\
<br />\
記事を閲覧頂きありがとうございます。IRIHILOGのRSSでは、記事の全文をHTML形式で、RSSリーダ向けに配信しています。<br />\
そのため、RSSリーダのみで記事を読むことができます。<br />\
ただし、RSSリーダにより正常に記事が表示されない場合があります。<br />\
この閲覧方法において、管理者のIrihiは情報の正確性がWebバージョンと同程度に維持されていることを保証しないものとします。<br />\
Webバージョンは次のURLからアクセスできます：<br />\
</p>\
${baseUrl + blog._id}<br />\
<a href="${baseUrl + blog._id}">Webバージョン：『${blog.articleTitle}』を開く</a>
</div>\
<div>\
<p>\
<br />\
<br />\
<br />\
-------------\
<br />\
<br />\
Thank you for viewing this article.<br />\
IRIHILOG RSS delivers the full text of articles in HTML format for RSS readers.<br />\
Therefore, you can read the articles only with an RSS reader.<br />\
However, the article may not be displayed correctly depending on the RSS reader.<br />\
In this viewing method, Irihi, the administrator, does not guarantee that the accuracy of the information is maintained to the same degree as the web version.<br />\
The web version can be accessed at the following URL:<br />\
</p>\
${baseUrl + blog._id}<br />\
<a href="${baseUrl + blog._id}">Web Version：Open 『${blog.articleTitle}』</a>
</div>\
</body>\
</html>`,
         date: new Date(blog._sys.raw.firstPublishedAt)
      })
   })

   return new Response(feed.rss2(), {
      headers: {
         'Content-Type': 'application/xml'
      }
   })
}
