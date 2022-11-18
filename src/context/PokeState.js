import { useState, createContext } from 'react'
import axios from 'axios'

export const PokeContext = createContext(null)

const initialData = { loading: true, data: [], error: null }
const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'

export const PokeState = ({ children }) => {

  const [pokemons, setPokemons] = useState(initialData)

  const getPokemons = () => {

    setTimeout(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=50s&offset=0')
        .then(res => {

          if (res.status !== 200) {
            alert("Hubo un error en el servidor")
            return
          }

          const imgPokemons = res.data.results.map((pok, index) => {
            return {
              ...pok,
              img: imgUrl + (index + 1) + '.svg'
            }
          })

          setPokemons({ ...initialData, loading: false, data: imgPokemons })

        }).catch(() => {
          alert("Hubo un error en el servidor")
        })
    }, 2500);

  }

  return (
    <PokeContext.Provider value={{ pokemons, getPokemons }}>
      {children}
    </PokeContext.Provider>
  )

}
