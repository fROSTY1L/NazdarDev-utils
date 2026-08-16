import { months } from "./constants";

export function DateFormatter(date: string | null) {
    if (!date) return "PRESENT";
    return `${months[Number(date.slice(5,7))]} ${date.slice(0,4)}`
}