import { Link } from 'react-router-dom'
import styles from './Botao.module.css'

function Botao ({ url, children }) {

    
    return (
        <Link to={url} className={styles.botao}>
            {children}
        </Link>
    )
}

export const BotaoFormulario = ({type, children}) => {
    return (
        <button className={styles.botao} type={type} >{children}</button> 
    )
}


export default Botao

     

