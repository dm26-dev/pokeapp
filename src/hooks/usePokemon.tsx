import { useState, useEffect } from 'react'
import { getAllPokemons } from '../helpers/getAllPokemons'
import { Pokemon } from '../interfaces/AllPokemons';

export const usePokemon = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [hasError, setHasError] = useState(null)

    useEffect(() => {
        const resultPokemon = getAllPokemons()
        resultPokemon.then(data => {
            setIsLoading(false)
            setPokemons(data)
        }).catch(e => {
            setHasError(e.message)
        })
    }, [])

    return {
        isLoading,
        pokemons,
        hasError
    }

}