import { Link } from 'react-router-dom'
import styles from './Botao.module.css'

function Botao ({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export const BotaoFormulario = ({type, children}) => {
    return (
        <button className={styles.link} type={type} >{children}</button> 
    )
}


export default Botao

     

