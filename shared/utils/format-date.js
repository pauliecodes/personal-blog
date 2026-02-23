export function formatDate(date) {
    if (!date) return 'DRAFT'

    const parsedDate = new Date(date)
    // Check if the date is actually valid before formatting
    if (isNaN(parsedDate.getTime())) return 'UNKNOWN DATE'

    return parsedDate.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    })
}