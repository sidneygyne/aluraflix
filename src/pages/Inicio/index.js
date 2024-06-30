import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './Inicio.module.css'
import Banner from 'componentes/Banner'
import SessaoPorCategoria from "componentes/SessaoPorCategoria";

function Inicio() {

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

    const adicionarNovoVideo = (novoVideo) => {
        setVideos([...videos, novoVideo])
    }

    function deletarVideo(id) {
        setVideos(videos.filter(video => video.id !== id))
    }

    return (
        <>
            <Banner categoria={categorias} />
            <section className={styles.categorias}>
                {categorias.map((categoria, indice) => <SessaoPorCategoria
                    key={indice}
                    categoria={categoria}
                    videos={videos.filter(video => video.categoria === categoria.nome)}
                    aoDeletar={deletarVideo}
                />)}
                {/* <NovoVideo aoCadastrar={adicionarNovoVideo}/> */}
            </section>

        </>
    )
}

export default Inicio