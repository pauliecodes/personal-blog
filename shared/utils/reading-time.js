export function readingTime(text) {
    if (!text || typeof text !== 'string') return '1 min read'

    const stripped = text
        .replace(/```[\s\S]*?```/g, '')
        .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
        .replace(/[#*_>`~\-|]/g, '')
        .trim()

    if (!stripped) return '1 min read'

    const words = stripped.split(/\s+/).length
    const minutes = Math.max(1, Math.ceil(words / 200))

    return `${minutes} min read`
}