import { Link, Route } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import { useState } from 'react'
import { Botao } from 'componentes/Botao'
import { useLocation } from 'react-router-dom'

function Cabecalho() {

    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img className={styles.logo}src={logo} alt="LogoAluraFlix"/>
            </Link>
            
            <nav className={styles.menu}>
                <Botao condition="true" url="./">
                    HOME
                </Botao>
                <Botao condition="true" url="./addvideo">
                    NOVO VIDEO
                </Botao>
            </nav>
        </header>
    )
}

export default Cabecalho