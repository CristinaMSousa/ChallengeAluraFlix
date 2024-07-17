import styles from './ListaSuspensa.module.css';

function ListaSuspensa({label, itens, aoAlterado, valor, required}){

    return(
        <div className={styles.listaSuspensa} >
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
 export default ListaSuspensa;