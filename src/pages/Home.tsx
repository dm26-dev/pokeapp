import { useState, ChangeEvent, SyntheticEvent } from "react"
import { usePokemon } from "../hooks/usePokemon"

import { Pokemon } from "../interfaces/AllPokemons"
import st from './Home.module.css'

const FALLBACK_IMAGE = "/No-Image-Placeholder.png";

export const Home = () => {

  const { pokemons, isLoading } = usePokemon()

  const [searchText, setSearchText] = useState('')
  const [currenPage, setCurrentPage] = useState(0)

  const filterPokemon = (): Pokemon[] => {

    if (searchText.trim().length === 0) {
      return pokemons.slice(currenPage, currenPage + 12)
    }

    const filteredPokemons: Pokemon[] = pokemons.filter(pok => pok.name.includes(searchText))

    return filteredPokemons.slice(currenPage, currenPage + 12)
  }

  const prevPage = () => {
    if (currenPage > 0) {
      setCurrentPage(currenPage - 12)
    }
  }

  const nextPage = () => {
    if (pokemons.filter(pok => pok.name.includes(searchText)).length > currenPage + 12) {
      setCurrentPage(currenPage + 12)
    }
  }

  const onSearchPokemon = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchText(value)
  }

  const imageOnErrorHandler = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_IMAGE;    
    event.currentTarget.className = "error";
  };

  return (
    <div className={st.container}>
      <h2 className={st.container__title}>Pokemones</h2>

      <input type="text" value={searchText} onChange={e => onSearchPokemon(e)} />

      <div className={st.container__buttons}>

        <button onClick={prevPage}>
          Prev
        </button>

        <button onClick={nextPage}>
          Next
        </button>

      </div>

      {isLoading && <h4>Is Loading ...</h4>}

      <div className={st.container__pokemons}>
        {
          filterPokemon().map(pok => {

            return (
              <div className={st.container__pokemons_pokemon} key={pok.id}>
                <img
                  src={pok.pic}
                  alt={pok.name}
                  onError={imageOnErrorHandler}
                />
                <h3>{pok.name} <span>{pok.id}</span></h3>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
