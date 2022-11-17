import st from './Card.module.scss'

export const Card = ({ name, img ,id}) => {
    return (
        <div className={st.card}>
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
