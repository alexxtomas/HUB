import ErrorHandler from "../components/ErrorHandler";
import PokemonDetails from "../components/PokemonDetails";
import PokemonFilter from "../components/PokemonFilter";
import PokemonsCard from "../components/PokemonsCard";
import pokeapi from "../services/pokeapi";
import { $ } from "../utils/$";
import { $$ } from "../utils/$$";
import { cleanPage } from "../utils/cleanPage";
import { typeIcons } from "../utils/typeIcons";


const $app = $('#app')

const PokeApi = async () => {
    if (!$app) return ErrorHandler({ type: 'nullDOMelement' })
    cleanPage($app)

    const pokemons = await pokeapi.getPokemons(151)
    if (!pokemons) return ErrorHandler({ type: 'default', tag: 'h3', element: $app, text: 'Cannot get pokemons from pokeApi service' }) as void

    $app.innerHTML = `
        <main class="pokeapi-section">
            <img class="pokemon-title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon Logo">
            ${PokemonFilter(typeIcons)}
            <div class="pokemons-container"></div>
        </main>
    `

    PokemonsCard(pokemons, typeIcons)

    const $nameFilter = $('#name-filter')
    const $typeFilter = $('#type-filter')
    const $$pokemonCards = $$('.pokemons-container > .pokemon-card')
    if (!$typeFilter || !$nameFilter) return ErrorHandler({ type: 'nullDOMelement' }) as Error

    $nameFilter.addEventListener('input', evt => {
        const target = evt.target as HTMLInputElement
        const { value } = target
        const filtredPokemons = pokemons.filter(({ name }) => name.toUpperCase().includes(value.toUpperCase()))
        PokemonsCard(filtredPokemons, typeIcons)
    })

    $typeFilter.addEventListener('change', evt => {
        const target = evt.target as HTMLInputElement
        const { value } = target
        let filtredPokemons: Pokemon[] = []

        if (value === '') PokemonsCard(pokemons, typeIcons)
        else {
            pokemons.map(pokemon => {
                let matchType: Boolean[] = []
                const { types } = pokemon
                types.forEach(({ type }) => {
                    if (type.name === value) matchType.push(true)
                    else matchType.push(false)
                })

                if (matchType.includes(true)) filtredPokemons.push(pokemon)
            })
            PokemonsCard(filtredPokemons, typeIcons)
        }
    })

    $$pokemonCards.forEach(card => {
        card.addEventListener('click', async (evt) => {
            console.log()
            const target = evt.target as Element
            const { id } = target
            if (id) await PokemonDetails(Number(id))
        })
    })



}

export default PokeApi