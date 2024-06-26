import styles from './TextareaFormulario.module.css'

//
function Textarea({ type = 'text', placeholder, label, valor, obrigatorio = false, aoAlterado }) {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

        return (
            <div className={styles.textarea} >
                <label>{label}</label>
                <textarea className={styles.campoInput}
                    type={type}
                    value={valor}
                    onChange={aoDigitado}
                    required={obrigatorio}
                    placeholder={placeholderModificada} />
            </div>
        )
    }

    export default Textarea