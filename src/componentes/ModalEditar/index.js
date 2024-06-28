import Video from 'componentes/Video'
import styles from './ModalEditar.module.css'

function ModalEditar({ video, onClose }) {

    const submit = (evento) => {
        evento.preventDefault()
        onClose()
    }

    return (
        <dialog open={!!video} className={styles.modal}>
            <h1>Editar card</h1>
            <Video video={video} expandida={true} />
            <form onSubmit={submit} method="dialog">
                {/* Aqui você pode adicionar os campos de edição */}
                <button type="submit">Salvar</button>
                <button type="button" onClick={onClose}>
                    Cancelar
                </button>
            </form>
        </dialog>
    );
}


export default ModalEditar