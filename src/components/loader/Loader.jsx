import st from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={st.loader}>
            <img src={'/Pokeballrotate2.gif'} alt="" />
        </div>
    )
}
