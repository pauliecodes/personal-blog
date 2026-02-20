export function readingTime(text) {
    const stripped = text
        .replace(/```[\s\S]*?```/g, '')
        .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
        .replace(/[#*_>`~\-|]/g, '')
    const words = stripped.trim().split(/\s+/).length
    const minutes = Math.max(1, Math.ceil(words / 200))
    return `${minutes} min read`
}