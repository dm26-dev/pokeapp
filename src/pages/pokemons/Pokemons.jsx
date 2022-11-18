import { useEffect, useContext } from 'react'
import { PokeContext } from 'context/PokeState'
import { Card } from 'components/card/Card'

import { Loader } from 'components/loader/Loader'

import st from './Pokemons.module.scss'

export const Pokemons = () => {

  const { pokemons, getPokemons } = useContext(PokeContext)

  useEffect(() => {
    getPokemons()
  }, [])

  if (pokemons.loading) {
    return (<Loader />)
  }

  return (
    <div className={st.pokemons}>
      <div className={st.pokemons__cont}>
        {
          pokemons.data.map((pok, i) => <Card name={pok.name} img={pok.img} key={pok.name} id={i + 1} />)
        }
      </div>
    </div>
  )
}
