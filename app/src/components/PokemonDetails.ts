import pokeapi from "../services/pokeapi"
import { $ } from "../utils/$"
import { cleanPage } from "../utils/cleanPage"
import ErrorHandler from "./ErrorHandler"

const $app = $('#app')
const PokemonDetails = async (id: number) => {
    if (!$app) return ErrorHandler({ type: "nullDOMelement" }) as Error
    cleanPage($app)

    const pokemon = await pokeapi.getPokemonById(id)
    if (!pokemon) return ErrorHandler({ type: 'default', tag: 'h3', element: $app, text: 'Cannot get pokemon from pokeApi service' }) as void

    const { stats, height, weight, sprites, name } = pokemon


    $app.innerHTML = `
        <h2 class="pokemon-details-name">${name} <img class="pokeball" src="../../public/svg/pokeball-pokemon-svgrepo-com.svg" alt="pokeball"> </h2>
        <div class="container">
            <div class="pokemon-image-container">
                <img src="${sprites.other.dream_world.front_default}" alt="${name} image" class="pokemon-details-image">
                <div class="height-weight">
                    <p>Height: ${height / 10} m</p>
                    <p>Weight: ${weight / 10} kg</p>
                </div>
            </div>
            <div class="pokemon-details-container">
                <h3>Base Stats</h3>
                <div class="stats-container">
                    <div class="stats-1">
                        <p>${stats[0].stat.name.toUpperCase()}: ${stats[0].base_stat}</p>
                        <p>${stats[1].stat.name.toUpperCase()}: ${stats[1].base_stat}</p>
                        <p>${stats[2].stat.name.toUpperCase()}: ${stats[2].base_stat}</p>
                    </div>
                    <div class="stats-2">
                        <p>${stats[3].stat.name.toUpperCase()}: ${stats[3].base_stat}</p>
                        <p>${stats[4].stat.name.toUpperCase()}: ${stats[4].base_stat}</p>
                        <p>${stats[5].stat.name.toUpperCase()}: ${stats[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

export default PokemonDetails