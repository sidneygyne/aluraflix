import Video from 'componentes/Video'
import styles from './SessaoPorCategoria.module.css'

function SessaoPorCategoria({ videos, categoria, aoCadastrar, aoDeletar, onEditar, onVerVideo }) {
    return (
        (videos.length > 0) && <section className={styles.categoria}>
            <h3 style={{ backgroundColor: categoria.cor }}>
                {categoria.nome}
            </h3>
            <div className={styles.videos}>
                {videos.map((video, indice) => {
                    return <Video
                        className={styles.videos}
                        video={video}
                        key={indice}
                        categoria={categoria}
                        aoCadastrar={aoCadastrar}
                        aoDeletar={aoDeletar}
                        onEditar={onEditar}
                        onVerVideo={onVerVideo}
                    />
                })}
            </div>
        </section>
    )
}

export default SessaoPorCategoria