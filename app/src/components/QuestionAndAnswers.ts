import { $ } from "../utils/$"
import { removeComas } from "../utils/removeComas"
import ErrorHandler from "./ErrorHandler"


const QuestionAndAnswers = (question: string, answers: string[]): Error | void => {
    const $questionContainer = $('.question')
    const $answersContainer = $('.answers')

    if (!$questionContainer || !$answersContainer) return ErrorHandler({ type: 'nullDOMelement' }) as Error

    $questionContainer.innerHTML = `<span>${question}</span>`
    const answersHTML = `
        <ol>
            ${answers?.map((answer, index) => `<li id="${index}">${answer}</li>`)}
        </ol>
    `

    $answersContainer.innerHTML = removeComas(answersHTML)
}

export default QuestionAndAnswers