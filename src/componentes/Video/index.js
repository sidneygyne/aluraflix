import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";

function Video({ video, categoria, aoEditarVideoSolicitado }) {

    const clickEditar = () => {
        aoEditarVideoSolicitado(video)
    }

    return (
        <div className={styles.container} style={{ borderColor: categoria?.cor || 'default-color'}}>
            <div className={styles.imagem}>
                <img src={video.imagem} alt={video.titulo} />
                <div className={styles.divImg} style={{ borderColor: categoria?.cor || 'default-color' }}></div>
            </div>
            <div className={styles.opcoes}>

                <button className={styles.item_opcao}>
                    <MdDeleteForever />
                    <p>DELETAR</p>
                </button>

                {categoria && (
                    <button className={styles.item_opcao}
                        onClick={clickEditar} >
                        <MdOutlineEdit />
                        <p>EDITAR</p>
                    </button>
                )}


            </div>
        </div>
    )

}

export default Video