import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './Inicio.module.css'
import Banner from 'componentes/Banner'
import SessaoPorCategoria from "componentes/SessaoPorCategoria";
import ModalEditar from "componentes/ModalEditar";

function Inicio() {

    // ESTA DUPLICADO COM A PAGINA DE ADD VIDEO **************************************
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

    // const [videoDaGaleria, setVideoDaGaleria] = useState(videos)
    const [videoSelecionado, setVideoSelecionado] = useState(null)


    const editarVideo = (video) => {
        setVideoSelecionado(video)
    }

    const fecharModal = () => {
        setVideoSelecionado(null)
    }

    const atualizarVideo = (videoAtualizado) => {
        setVideos(videos.map(video => {
            if (video.id === videoAtualizado.id) {
                return videoAtualizado
            }
            return video
        }))
        setVideoSelecionado(null)
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
                    onEditar={editarVideo}

                />)}
                {/* <NovoVideo aoCadastrar={adicionarNovoVideo}/> */}
            </section>
            <ModalEditar
                video={videoSelecionado}
                aoFechar={fecharModal}
                aoSalvar={atualizarVideo}
                aoFecharModal={fecharModal}
                categorias={categorias.map((categoria) => categoria.nome)} />
        </>
    )
}

export default Inicio