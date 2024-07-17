import styles from './Categoria.module.css';

function Categoria ({children}) {
    return(
        <header className={styles.categoria}>
            {children}
        </header>  
    )
}
 export default Categoria;