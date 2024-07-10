import styles from './ModalPlay.module.css'
import { MdOutlineCancel } from "react-icons/md"

function ModalPlay({ video, aoFecharModal }) {
    return (
        <>
            {video &&
                <div className={styles.overley} />}
            {video &&
            
                <div className={styles.container}>
                   
                    <div open={!!video} >
                        <form method="dialog" className={styles.modal}>
                            <section >
                                <iframe className={styles.video}
                                    width="100%"
                                    height="100%"
                                    src={video.link}
                                    title={video.titulo}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen="" ></iframe>
                            </section>
                            <MdOutlineCancel onClick={aoFecharModal} className={styles.iconeFechar} />
                            {/* <button type="submit" onClick={aoFecharModal} >ok</button> */}
                        </form>
                    </div>
                </div>}
        </>
    )
}

export default ModalPlay