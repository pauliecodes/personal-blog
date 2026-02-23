export default defineCachedEventHandler(async (event) => {
    const rkey = getRouterParam(event, 'rkey')

    if (!/^[a-zA-Z0-9.-]+$/.test(rkey)) {
        throw createError({ statusCode: 400, message: 'Invalid rkey' })
    }

    const { atprotoRepo } = useRuntimeConfig(event)
    let response;

    try {
        response = await $fetch(
            `https://bsky.social/xrpc/com.atproto.repo.getRecord`, {
                query: {
                    repo: atprotoRepo,
                    collection: 'com.whtwnd.blog.entry',
                    rkey,
                }
            }
        )
    } catch (error) {
        if (error.response?.status === 400 || error.response?.status === 404) {
            throw createError({ statusCode: 404, message: 'Post not found on AT Protocol' })
        }
        throw createError({ statusCode: 502, message: 'Error communicating with AT Protocol' })
    }

    const post = {
        rkey,
        title: response.value.title,
        content: response.value.content,
        createdAt: response.value.createdAt,
        visibility: response.value.visibility,
        readingTime: readingTime(response.value.content),
    }

    if (!isPostAccessible(post, !import.meta.dev)) {
        throw createError({ statusCode: 404, message: 'Post not found or is private' })
    }

    return post
}, { maxAge: 60 })