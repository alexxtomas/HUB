import ErrorHandler from "../components/ErrorHandler"

const getAllQuestions = async (): Promise<Quiz[] | null> => {
    try {
        const response = await fetch('http://localhost:8080/quiz')
        return response.json()
    } catch (e) {
        return ErrorHandler({ type: 'catch', catchError: e }) as null
    }
}


export default { getAllQuestions }