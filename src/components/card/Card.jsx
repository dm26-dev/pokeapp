import st from './Card.module.scss'

import { useNavigate } from 'react-router-dom'

export const Card = ({ name, img, id }) => {

    const navigate = useNavigate()

    const viewPokemon = () => navigate(`/pokemons/${name}`)

    return (
        <div className={st.card} onClick={viewPokemon}>
            <div>
                <p># {id}</p>
                <p>{name} </p>
            </div>

            <div>
                <img src={img} alt="" />
            </div>

        </div>
    )
}
