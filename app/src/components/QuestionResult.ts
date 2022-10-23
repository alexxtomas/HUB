import Hub from "../pages/Hub"
import QuizNeo from "../pages/QuizNeo"
import { $ } from "../utils/$"
import ErrorHandler from "./ErrorHandler"
import QuestionAndAnswers from "./QuestionAndAnswers"

const QuestionResult = (well: boolean[], questions: Quiz[], index: number): Error | void => {
    const $questionContainer = $('.question')
    const $answersContainer = $('.answers')

    if (!$questionContainer || !$answersContainer) return ErrorHandler({ type: "nullDOMelement" }) as Error

    if (well[index - 1]) $answersContainer.innerHTML = `<div class="correctly">Yeaaaaahhhh!!🥳 <button class="next">Next</button></div>`
    else $answersContainer.innerHTML = `<div class="correctly">Oooohhh!😢 <button class="next">Next</button></div>`

    if (index === questions.length) {
        let result = well.filter(res => res === true)

        if (result.length >= (questions.length / 2)) $questionContainer.innerHTML = `<span>Congratulations!! You got <span class="result">${result.length}/${questions.length}</span> rigth 😎</span>`
        else $questionContainer.innerHTML = `Keep trying!! You got ${result.length}/${questions.length} rigth 😢`

        $answersContainer.innerHTML = `<div class="correctly"><button class="return-hub">HUB</button> <button class="try-again">Try Again</button></div>"`
    }

    document.addEventListener('click', async evt => {
        const target = evt.target as Element
        const { className } = target
        if (className === 'next') QuestionAndAnswers(questions[index]?.question, questions[index]?.answers)
        else if (className === 'return-hub') Hub()
        else if (className === 'try-again') await QuizNeo()
    })
}

export default QuestionResult