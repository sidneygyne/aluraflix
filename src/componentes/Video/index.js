import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";

function Video() {

    const imagem = "https://i.ytimg.com/vi/CaTbfdsVydE/hqdefault.jpg"

    return (
        <div className={styles.container}>
            <div className={styles.imagem}>
                <img src={imagem} alt='' />
                <div className={styles.divImg}></div>
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