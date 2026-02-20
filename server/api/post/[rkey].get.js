export default defineCachedEventHandler(async (event) => {
    const rkey = getRouterParam(event, 'rkey')

    if (!/^[a-zA-Z0-9]+$/.test(rkey)) {
        throw createError({ statusCode: 400, message: 'Invalid rkey' })
    }

    const { atprotoRepo } = useRuntimeConfig(event)
    const response = await $fetch(
        `https://bsky.social/xrpc/com.atproto.repo.getRecord`, {
            query: {
                repo: atprotoRepo,
                collection: 'com.whtwnd.blog.entry',
                rkey,
            }
        }
    )

    const post = {
        rkey,
        title: response.value.title,
        content: response.value.content,
        createdAt: response.value.createdAt,
        visibility: response.value.visibility,
        readingTime: readingTime(response.value.content),
    }

    if (!isPostAccessible(post, !import.meta.dev)) {
        throw createError({ statusCode: 404, message: 'Post not found' })
    }

    return post
}, { maxAge: 60 })