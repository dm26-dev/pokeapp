import { Routes, Route } from 'react-router-dom'
import { Home } from 'pages/home/Home'
import { Pokemons } from 'pages/pokemons/Pokemons'
import { Pokemon } from 'pages/pokemon/Pokemon'
import { NotFound } from 'pages/notfound/NotFound'
import { Favorites } from 'pages/favorites/Favorites'

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/pokemons' element={<Pokemons />} />
            <Route path='/pokemons/:pokemon' element={<Pokemon />} />
            <Route path='/favoritos' element={<Favorites />} />
        </Routes>
    )
}


