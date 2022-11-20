import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import st from './Pokemon.module.scss'
import { useNavigate } from 'react-router-dom'

export const Pokemon = () => {

    const navigate = useNavigate()

    const { name } = useParams()
    
    const [pokemon, setPokemon] = useState({ id: 0, name: "", image: "", types: [], stats: [] })

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then(res => {

            const stats = res.data.stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat
            }))

            const imgRes = res.data.sprites.other.dream_world.front_default

            const pokemonTypes = res.data.types.map(type => {
                return type.type.name
            })

            setPokemon({ id: res.data.id, name: res.data.name, image: imgRes, types: pokemonTypes, stats })

        })

    }, [])

    const classColorSelected = () => {

        const pt = pokemon.types

        if (pt.includes("grass") || pt.includes("bug")) {
            return st.pokemon__type_grass
        }
        else if (pt.includes("fire")) {
            return st.pokemon__type_fire
        }
        else if (pt.includes("water")) {
            return st.pokemon__type_water
        }
        else if (pt.includes("poison")) {
            return st.pokemon__type_poison
        }
        else if (pt.includes("electric")) {
            return st.pokemon__type_electric
        }
        else {
            return st.pokemon__type_normal
        }

    }

    return (
        <div className={`${st.pokemon} ${classColorSelected()}`}>

            <div className={st.pokemon__header}>
                <FaArrowLeft onClick={() => navigate("/pokemons")} />
                <span>#{pokemon.id} </span>
            </div>

            <div className={st.pokemon__name}>
                <h2>{pokemon.name}</h2>
            </div>

            <div className={st.pokemon__img}>
                <img src={pokemon.image} alt="" />
            </div>

            <div className={st.pokemon__slider}>

                <div className={st.pokemon__slider_header}>
                    <h3>Habilidades</h3>
                </div>

                <div className={st.pokemon__slider_body}>

                    {
                        pokemon.stats.map(stat => {
                            return (
                                <div className={st.pokemon__slider_body_skill} key={stat.name}>
                                    <div><span>{stat.name}</span></div>
                                    <div><div className={classColorSelected()} style={{ "width": `${stat.value > 100 ? 100 : stat.value}%` }}>{stat.value}</div></div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}
