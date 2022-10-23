import ErrorHandler from "../components/ErrorHandler"
import { $ } from "../utils/$"
import Hub from "./Hub"


const $app = $('#app')
const Home = () => {
    if (!$app) return ErrorHandler({ type: "nullDOMelement" })
    window.localStorage.clear()
    $app.innerHTML = `
        <main class="home">
        <h1>HUB</h1> 
        <form>
            <label for="name">
            Introduce your name
            </label>
            <input id="name" type="text" autocomplete="off">
            <button class="name-button">👍🏻</button>
        </form>
        </main>
    `

    const $input = $('#name') as HTMLInputElement
    const $form = $('form')

    if (!$input || !$form) return ErrorHandler({ type: "nullDOMelement" })

    $form.addEventListener('submit', evt => {
        evt.preventDefault()
        const { value } = $input
        if (!value || value === '' || value.length < 3) return ErrorHandler({ type: "default", tag: 'h3', element: $app, text: 'Please Enter A Valid Name!!' })
        window.localStorage.setItem('name', JSON.stringify(value))
        $input.value = ''
        Hub()
    })

}
export default Home