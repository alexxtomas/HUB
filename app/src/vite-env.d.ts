/// <reference types="vite/client" />

// POKEAPI 
type PokemonType = 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel' | 'water'

type NameAndUrl = {
    name: string,
    url: string
}
type VersionDetail = {
    rarity: number
    version: NameAndUrl
}

type Ability = {
    ability: NameAndUrl
    is_hidden: boolean
    slot: number
}

type GameIndice = {
    game_index: number
    version: Move
}

type HeldItem = {
    item: { name: string, url: string }
    version_details: VersionDetail[]
}
type VersionGroupDetail = {
    level_learned_at: number
    move_learn_method: NameAndUrl
    version_group: NameAndUrl
}
type Move = {
    move: NameAndUrl
    version_group_details: VersionGroupDetail[]
}

type Type = {
    slot: number
    type: NameAndUrl
}

type PastType = {
    generation: NameAndUrl
    types: Type[]
}

type Other = {
    dream_world: Pick<Sprites, 'front_default' | 'front_female'>
    home: Pick<Sprites, 'front_default' | 'front_female' | 'front_shiny_female' | 'front_shiny'>
}

type Sprites = {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: Other
}

type Stat = {
    base_stat: number
    effort: number
    stat: NameAndUrl
}

type Type = {
    slot: number
    type: {
        name: PokemonType,
        url: string
    }
}

interface Pokemon {
    abilities: Ability[]
    base_experience: number
    forms: [
        {
            name: string
            url: URL
        }
    ]
    game_indices: GameIndice[]
    height: number
    held_items: HeldItem[] | []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Move[]
    name: string
    order: number
    past_types: PastType[] | []
    species: NameAndUrl
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number

}

type TypeIcon = { type: PokemonType, svg: string }

// ERROR HANDLER
type HtmlTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'


interface NullDOMElement {
    type: 'nullDOMelement'
}
interface Throw {
    type: 'throw'
    text: string
}
interface Default extends Throw {
    type: 'default'
    tag: HtmlTags
    element: Element
}
interface Catch {
    type: 'catch'
    catchError: unknown
}
type Errors = Catch | Default | Throw | NullDOMElement

