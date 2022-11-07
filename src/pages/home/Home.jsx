import React from 'react'

import st from './Home.module.scss'

export const Home = () => {

  return (
    <div className={st.home}>
      <div className={st.home__img}></div>
      <div className={st.home__backdrop}>
        <button>INGRESAR</button>
      </div>
    </div>
  )
}
