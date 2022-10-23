import Home from "../pages/Home"
import Hub from "../pages/Hub"
import { $ } from "../utils/$"
import { changeColor } from "../utils/changeColor"
import { cleanPage } from "../utils/cleanPage"
import { getName } from "../utils/getName"
import ErrorHandler from "./ErrorHandler"

const $body = $('body')

const ColorMode = () => {
    if (!$body) return ErrorHandler({ type: 'nullDOMelement' })
    const colorModeContainer = `
    <div class="color-mode-container"> <i class="fa-solid fa-house-chimney home-icon"></i>  <button class="color-mode"><i class="fa-solid fa-palette"></i> color mode</button></div>
    `
    $body.insertAdjacentHTML('afterbegin', colorModeContainer)

    document.addEventListener('click', (evt) => {
        const target = evt.target as Element
        const $home = $('.home-icon')
        const $buttonPalette = $('.color-mode')
        const $iconPalette = $('.fa-palette')
        if (!$iconPalette || !$buttonPalette || !$home) return ErrorHandler({ type: "nullDOMelement" })
        const { className } = target
        const { classList } = target

        if (classList === $home.classList) {
            const $app = $('#app')
            cleanPage($app)
            const name = getName()
            if (!name) Home()
            Hub()

        }
        else if (className === $buttonPalette.className || classList === $iconPalette.classList) changeColor()
    })
}

export default ColorMode