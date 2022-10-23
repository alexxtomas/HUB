import ErrorHandler from "../components/ErrorHandler"
import { $ } from "./$"


const generateRandomIndex = (length: number): number => Number.parseInt((Math.random() * length).toString())


export const changeColor = (): Error | void => {
    const $body = $('body') as HTMLElement | null
    if (!$body) return ErrorHandler({ type: "nullDOMelement" }) as Error
    const colors = ["rgb(230, 73, 128)", "rgb(250, 176, 5)", "rgb(130, 201, 30)", "rgb(76,110,245)", "rgb(21, 170, 191)", "rgb(250, 82, 82)", "rgb(190, 75, 219)", "rgb(121, 80, 242)"]
    let randomIndex = generateRandomIndex(colors.length + 1)
    const { backgroundColor } = getComputedStyle($body)

    while (backgroundColor === colors[randomIndex]) randomIndex = generateRandomIndex(colors.length + 1)
    $body.style.backgroundColor = colors[randomIndex]
}