import "server-only"
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NEWT_API_KEY: z.string().min(1),
        NEWT_APPUID_BLOGS: z.string().min(1),
        NEWT_SPACEUID: z.string().min(1),
        NEWT_MODELUID_BLOGS_POSTS: z.string().min(1)
    }
})
