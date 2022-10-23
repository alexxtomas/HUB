import { $ } from "../utils/$"
import { cleanPage } from "../utils/cleanPage"
import { removeComas } from "../utils/removeComas"
import ErrorHandler from "./ErrorHandler"


const PokemonsCard = (pokemons: Pokemon[], typeIcons: TypeIcon[]): Error | void => {
    const $pokemonsContainer = $('.pokemons-container')
    if (!$pokemonsContainer) return ErrorHandler({ type: 'nullDOMelement' }) as Error

    cleanPage($pokemonsContainer)

    pokemons.map(pokemon => {
        let pokemonTypes: TypeIcon[] = []
        const { types } = pokemon
        types.forEach(({ type }) => {
            const { name } = type
            const pokemonType = typeIcons.find(({ type }) => type === name)
            if (pokemonType) pokemonTypes.push(pokemonType)
        })

        $pokemonsContainer.innerHTML += `
        <div class="pokemon-card" id="${pokemon.id}">
            <p class="pokemon-name" id="${pokemon.id}">${pokemon.name} </p>
            <img class="pokemon-image" src="${pokemon.sprites.front_default}" alt="image" id="${pokemon.id}">
            <div class="types-container" id="${pokemon.id}">
                ${removeComas(pokemonTypes.map(({ type, svg }) => `<img class="pokemon-type" src="${svg}" alt="${type} image" id="${pokemon.id}">`).toString())}
            </div>
        </div>
        
        `
    })

}

export default PokemonsCard