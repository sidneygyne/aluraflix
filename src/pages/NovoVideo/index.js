import Formulario from 'componentes/Formulario'
import styles from './NovoVideo.module.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function NovoVideo () {

    const [categorias, setCategorias] = useState([
        {
            id: uuidv4(),
            nome: 'FRONT END',
            cor: '#6BD1FF',
        },
        {
            id: uuidv4(),
            nome: 'BACK END',
            cor: '#00C86F',
        },
        {
            id: uuidv4(),
            nome: 'MOBILE',
            cor: '#FFBA05',
        }
    ])

    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch('https://json-server-rho-lovat.vercel.app/aluraplay')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return (
        <Formulario
        className={styles.sessaoFormulario} 
        aoCadastrar={video => setVideos ([...videos, video])}
        categorias={categorias.map(categoria => categoria.nome)}
        />
    )
}

export default NovoVideo