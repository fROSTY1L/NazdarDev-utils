export function DateFormatter(date: string | null) {
    if (!date) return "PRESENT";
    return date.slice(0, 7)
}