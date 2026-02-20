export function formatDate(date) {
    if (!date) return 'DRAFT'
    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    })
}