import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import CabecalhoLink from 'componentes/CabecalhoLink'


function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img className={styles.logo}src={logo} alt="LogoAluraFlix"/>
            </Link>
            
            <nav className={styles.menu}>
                <CabecalhoLink  url="./">
                    HOME
                </CabecalhoLink>
                <CabecalhoLink url="./addvideo">
                    NOVO VIDEO
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho