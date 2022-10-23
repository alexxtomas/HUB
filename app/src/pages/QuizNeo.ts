import ErrorHandler from "../components/ErrorHandler"
import QuestionAndAnswers from "../components/QuestionAndAnswers"
import QuestionResult from "../components/QuestionResult"
import Welcome from "../components/Welcome"
import { $ } from "../utils/$"
import { cleanPage } from "../utils/cleanPage"
import localStorage from "../utils/localStorage"

const $app = $('#app')

const QuizNeo = async (): Promise<Error | void> => {
    if (!$app) return ErrorHandler({ type: 'nullDOMelement' }) as Error

    cleanPage($app)
    let index = 0

    const questions = await localStorage.getQuizQuestions()

    if (!questions) return ErrorHandler({ type: 'default', tag: 'h3', element: $app, text: 'Cannot get quiz questions from quiz service' }) as void

    const { question, answers } = questions[index]


    $app.innerHTML = `
    <main class="quiz-neo-game">
        ${Welcome('QuizNeo')}
        <div class="question"></div>
        <div class="answers"></div>
    </main>
    `
    QuestionAndAnswers(question, answers)

    let well: boolean[] = []


    document.addEventListener('click', evt => {
        const target = evt.target as HTMLElement
        const { id } = target

        if (id === '0' || id === '1' || id === '2' || id === '3') {
            const answered = target.innerText
            well[index] = questions[index]?.correctAnswer === answered ? true : false
            index += 1
            QuestionResult(well, questions, index)
        }

    })
}

export default QuizNeo