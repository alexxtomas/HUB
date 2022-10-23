import ErrorHandler from "../components/ErrorHandler"
import quiz from "../services/quiz"


const getQuizQuestions = async (): Promise<Quiz[] | null> => {
    const localStorageQuizQuestions = window.localStorage.getItem('questions')

    if (!localStorageQuizQuestions) {
        try {
            const serverQuizQuestions = await quiz.getAllQuestions()
            window.localStorage.setItem('questions', JSON.stringify(serverQuizQuestions))
            return serverQuizQuestions
        } catch (e) {
            return ErrorHandler({ type: 'catch', catchError: e }) as null
        }

    }

    return JSON.parse(localStorageQuizQuestions) as Quiz[]
}





export default { getQuizQuestions }