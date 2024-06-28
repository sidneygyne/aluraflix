import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import styles from './Inicio.module.css'
import Banner from 'componentes/Banner'
import SessaoPorCategoria from "componentes/SessaoPorCategoria"
import ModalEditar from "componentes/ModalEditar"
import useVideos from "../../useJson/useVideos"
import useGaleria from "../../useJson/useGaleria"

function Inicio() {

    const { videos, categorias, videosDaGaleria, videoSelecionado, editarVideo, setVideoSelecionado} = useGaleria()

    //console.log('categorias:', categorias)

    return (
        <>
            <Banner categoria={categorias} />
            <section className={styles.categorias}>
                {categorias.map((categoria, indice) => (
                    <SessaoPorCategoria
                    key={indice}
                    categoria={categoria}
                    videos={videos.filter((video) => video.categoria === categoria.nome)}

                    aoVideoSelecionado={setVideoSelecionado}
                    aoEditarVideoSolicitado={editarVideo}
                />))}
            </section>
            <ModalEditar
                video={videoSelecionado}
                onClose={() => setVideoSelecionado(null)}
            />
        </>
    )
}

export default Inicio