import Video from 'componentes/Video'
import styles from './SessaoPorCategoria.module.css'
import ModalEditar from 'componentes/ModalEditar';
import { useMemo, useState } from 'react';

function SessaoPorCategoria({ videos, categoria }) {

    const filtarVideos = useMemo(() => {
        return videos.filter((video) => video.categoria === categoria.nome);
      }, [videos, categoria]);

    const [abrirModal, setAbrirModal] = useState(false);
    const [videoEditar, setVideoEditar] = useState(null);

    const editarVideo = (video) => {
        setVideoEditar(video)
        setAbrirModal(true)
    }

    const FecharModal = () => {
        setAbrirModal(false)
        setVideoEditar(null)
    }

    return (
        <>
            {(videos.length > 0) && (
                <section className={styles.categoria}>
                    <h3 style={{ backgroundColor: categoria.cor }}>{categoria.nome}</h3>
                    <div className={styles.videos}>
                        {filtarVideos.map((video, indice) => (
                            <Video
                                className={styles.videos}
                                video={video}
                                key={indice}
                                categoria={categoria}
                                aoEditarVideoSolicitado={editarVideo}
                            />
                        ))}
                    </div>
                </section>
            )}

            {abrirModal && (
                <ModalEditar video={editarVideo} onClose={FecharModal} />
            )}
        </>

    )
}

export default SessaoPorCategoria