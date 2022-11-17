import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import { Home } from 'pages/home/Home'
import { Pokemons } from 'pages/pokemons/Pokemons'
import { NotFound } from 'pages/notfound/NotFound'
import { Favorites } from 'pages/favorites/Favorites'
import axios from 'axios'
import { PokeContext } from 'context/PokeContext'

const initialData = { loading: true, data: [], error: null }

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'

export const App = () => {

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
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path='/favoritos' element={<Favorites />} />
      </Routes>
    </PokeContext.Provider>
  )
}
