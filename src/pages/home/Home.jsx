import { useNavigate } from 'react-router-dom'

import st from './Home.module.scss'

export const Home = () => {

  const navigate = useNavigate()

  return (
    <div className={st.home}>

      <img src="/public/" alt="" />
      <div className={st.home__img}>
        <img src={'/PokemonHome.jpg'} alt="" />
      </div>
      <div className={st.home__backdrop}>
        <button onClick={() => navigate('/pokemons')}>INGRESAR</button>
      </div>
    </div>
  )
}
