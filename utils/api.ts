import "server-only"
import { env } from "@/env.mjs"
import { createClient } from "newt-client-js"

const client = createClient({
    apiType: 'cdn',
    token: env.NEWT_API_KEY!.toString(),
    spaceUid: env.NEWT_SPACEUID
})

export async function getBlogs() {
    const posts = await client.getContents({
        appUid: env.NEWT_APPUID_BLOGS,
        modelUid: env.NEWT_MODELUID_BLOGS_POSTS
    })
    console.log(posts)
    return posts
}
