import styles from './ListaSuspensa.module.css'

    function ListaSuspensa ({label, aoAlterado, valor, obrigatorio = false, itens }) {
    return (
        <div className={styles.listaSuspensa}>
            <label>{label}</label>
            <select className={styles.campoInput} 
                onChange={evento => 
                aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor} >
                    <option value=""></option> 
                {itens.map(iten => {

                    return <option key={iten}>{iten}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa