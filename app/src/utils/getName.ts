export const getName = (): string | null => {
    const name = window.localStorage.getItem('name')
    if (!name) return null
    return JSON.parse(name)
}