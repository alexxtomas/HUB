import { removeComas } from "../utils/removeComas"

const PokemonFilter = (typeIcons: TypeIcon[]): string => `

        <div class="filter-container">
        <input type="text" placeholder="Enter a Pokemon name" id="name-filter" autocomplete="off">
        <div class="selectdiv">
            <label >Filter By Type: 
                <select name="type-filter" id="type-filter">
                    <option value="" selected></option>
                    ${removeComas(typeIcons.map(({ type }) => `<option value="${type}">${type.toUpperCase()}</option>`).toString())}
                </select>
            </label>
        </div>
        </div>

`


export default PokemonFilter

