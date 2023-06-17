import { pokemonApi } from "../api/pokemonApi"
import { SmallPokemon, Pokemon } from '../interfaces/AllPokemons';
import { AllPokemons } from "../interfaces/AllPokemons"

export const getAllPokemons = async (): Promise<Pokemon[]> => {

    const resp = await pokemonApi.get<AllPokemons>('/pokemon?limit=1281')
    const jsonData = resp.data.results

    return editPokemonList(jsonData)

}

const editPokemonList = (pokemons: SmallPokemon[]): Pokemon[] => {

    const newDataPokemons: Pokemon[] = pokemons.map(pok => {

        const id = pok.url.split("/")[6]
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

        return {
            id,
            name: pok.name,
            pic,
        }
    })
   
    return newDataPokemons

}