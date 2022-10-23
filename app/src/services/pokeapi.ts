import ErrorHandler from "../components/ErrorHandler"

const baseURL = ' https://pokeapi.co/api/v2/pokemon'

const getPokemons = async (number = 151): Promise<Pokemon[] | null> => {

    try {
        let pokemons = []
        for (let i = 1; i <= number; i++) {
            const response = await fetch(`${baseURL}/${i}`)
            pokemons.push(await response.json())
        }

        return pokemons
    } catch (e) {
        return ErrorHandler({ type: 'catch', catchError: e }) as null
    }

}

const getPokemonById = async (id: number): Promise<Pokemon | null> => {
    try {
        const response = await fetch(`${baseURL}/${id}`)
        return response.json()
    } catch (e) {
        return ErrorHandler({ type: 'catch', catchError: e }) as null
    }

}

export default { getPokemons, getPokemonById }