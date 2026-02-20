export default defineCachedEventHandler(async (event) => {
    const { atprotoRepo } = useRuntimeConfig(event)
    const response = await $fetch(
        `https://bsky.social/xrpc/com.atproto.repo.listRecords`, {
            query: {
                repo: atprotoRepo,
                collection: 'com.whtwnd.blog.entry',
                limit: 50,
            }
        }
    )

    return response.records
        .map((record) => {
            const rkey = record.uri.split('/').pop()
            return {
                rkey,
                title: record.value.title,
                createdAt: record.value.createdAt,
                visibility: record.value.visibility,
                readingTime: readingTime(record.value.content),
            }
        })
        .filter((post) => isPostListable(post, !import.meta.dev))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}, { maxAge: 60 })