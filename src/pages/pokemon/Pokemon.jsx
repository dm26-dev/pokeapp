import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import st from './Pokemon.module.scss'

export const Pokemon = () => {

    const { pokemon } = useParams()

    const [image, setimage] = useState(null)

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon).then(res => {
            setimage(res.data.sprites.other.dream_world.front_default)
        })

    }, [])

    return (
        <div className={st.pokemon}>
            <img src={image} alt="" />
        </div>
    )
}
