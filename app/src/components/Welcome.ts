import { getName } from "../utils/getName"
import ErrorHandler from "./ErrorHandler"


const Welcome = (section: string): string | Error => {
    const name = getName()
    if (!name) return ErrorHandler({ type: 'throw', text: 'Error in Welcome component to get name from localStorage' }) as Error
    return `<h2 class="welcome">Hi ${name}! Welcome to ${section}</h2>`
}

export default Welcome