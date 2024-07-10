import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md"

function Video({ video, categoria, aoDeletar, onEditar, onVerVideo }) {

    return (
        <div className={styles.container} style={{ borderColor: categoria.cor }}>
            <div className={styles.imagem}>
                <img className={styles.imagemItem} src={video.imagem} alt={video.titulo}  />
                <div onClick={()=> onVerVideo (video)} className={styles.divImg} style={{ color: categoria.cor }} ></div>
            </div>
            <div className={styles.opcoes}>
                <div className={styles.item_opcao}
                    onClick={() => aoDeletar(video.id)}
                    >
                    <MdDeleteForever />
                    <p>DELETAR</p>
                </div>
                <div className={styles.item_opcao}
                    onClick={()=> onEditar(video)}
                >
                    <MdOutlineEdit />
                    <p>EDITAR</p>
                </div>
            </div>
        </div>

// to={`/${video.id}`}
    )
}

export default Video