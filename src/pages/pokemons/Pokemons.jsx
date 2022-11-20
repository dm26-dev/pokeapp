import { useEffect, useContext } from 'react'
import { PokeContext } from 'context/PokeState'
import { Card } from 'components/card/Card'
import { Loader } from 'components/loader/Loader'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import st from './Pokemons.module.scss'

export const Pokemons = () => {

  const { pokemons, getPokemons } = useContext(PokeContext)

  const navigate = useNavigate()

  useEffect(() => {
    getPokemons()
  }, [])

  if (pokemons.loading) {
    return (<Loader />)
  }

  return (
    <div className={st.pokemons}>

      <div className={st.pokemons__header}>
        <FaArrowLeft onClick={() => navigate("/")} />     
      </div>

      <div className={st.pokemons__body}>
        {
          pokemons.data.map((pok, i) => <Card name={pok.name} img={pok.img} key={pok.name} id={i + 1} />)
        }
      </div>
    </div>
  )
}
