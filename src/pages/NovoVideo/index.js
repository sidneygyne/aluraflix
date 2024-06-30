import Formulario from 'componentes/Formulario'
import styles from './NovoVideo.module.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import videos from '../../json/db.json'

function NovoVideo() {

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
            nome: 'INOVAÇÃO',
            cor: '#FFBA05',
        },
        {
            id: uuidv4(),
            nome: 'GESTÃO',
            cor: '#F96DC3',
        }
    ])

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://json-server-rho-lovat.vercel.app/aluraflix')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    const adicionarNovoVideo = async (novoVideo) => {
        try {
            const response = await fetch('https://json-server-rho-lovat.vercel.app/aluraflix', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoVideo),
            })

            if (response.ok) {
                console.log('Vídeo cadastrado com sucesso!')
                setVideos((prevVideos) => [...prevVideos, novoVideo])
            } else {
                const errorData = await response.json()
                console.error('Erro ao cadastrar o vídeo:', response.status)
            }
        } catch (error) {
            console.error('Erro na requisição:', error)
        }
    }

    return (
        <Formulario
            className={styles.sessaoFormulario}
            aoCadastrar={adicionarNovoVideo}
            categorias={categorias.map((categoria) => categoria.nome)}
        />
    )
}

export default NovoVideo