import styles from './CampoFormulario.module.css'

//
function CampoFormulario({ type = 'text', placeholder, label, valor, obrigatorio = false, aoAlterado }) {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

        return (
            <div className={styles.campo} >
                <label>{label}</label>
                <input
                    className={styles.campoInput}
                    type={type}
                    value={valor}
                    onChange={aoDigitado}
                    required={obrigatorio}
                    placeholder={placeholderModificada} />
            </div>
        )
    }

    export default CampoFormulario