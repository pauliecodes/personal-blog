export function isPostListable(post, isProduction) {
    return !isProduction || post.visibility === 'public'
}

export function isPostAccessible(post, isProduction) {
    if (!isProduction) return true
    return post.visibility === 'public' || post.visibility === 'url'
}