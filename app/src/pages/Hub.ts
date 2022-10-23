import ErrorHandler from "../components/ErrorHandler"
import { $ } from "../utils/$"
import { cleanPage } from "../utils/cleanPage"
import { getName } from "../utils/getName"
import PokeApi from "./PokeApi"
import QuizNeo from "./QuizNeo"

const $app = $('#app')
const Hub = () => {
    if (!$app) return ErrorHandler({ type: 'nullDOMelement' })
    cleanPage($app)
    const name = getName()
    if (!name) return ErrorHandler({ type: 'throw', text: 'Error no name in the localStorage' })

    const classes = ['noughts-and-crosses', 'waka-topo', 'memory-game', 'hang-man', 'pokeapi', 'quiz-neo']

    $app.innerHTML += `
            <main class="hub">
            <h2 class="welcome">Welcome 👋🏻 ${name}</h2>
            <div class="games">
                <div class="pokeapi">PokeApi</div>
                <div class="quiz-neo">Quiz Neo</div>
            </div>
        </main>
    `

    // <div class="noughts-and-crosses">Noughts and Crosses</div>
    //             <div class="waka-topo">Waka Topo</div>
    //             <div class="memory-game">Memory Game</div>
    //             <div class="hang-man">Hang Man</div>

    document.addEventListener('click', async (evt) => {
        const target = evt.target as Element
        const { className } = target
        if (className === classes[4]) await PokeApi()
        else if (className === classes[5]) await QuizNeo()


    })
}


export default Hub