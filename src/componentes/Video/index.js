import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";

function Video({ video, categoria }) {

    return (
        <div className={styles.container} style={{ borderColor: categoria.cor }}>
            <div className={styles.imagem}>
                <img src={video.imagem} alt={video.titulo} />
                <div className={styles.divImg} style={{ color: categoria.cor }}></div>
            </div>
            <div className={styles.opcoes}>
                <div className={styles.item_opcao}>
                    <MdDeleteForever />
                    <p>DELETAR</p>
                </div>
                <div className={styles.item_opcao}>
                    <MdOutlineEdit />
                    <p>EDITAR</p>
                </div>

            </div>
        </div>
    )
}

export default Video