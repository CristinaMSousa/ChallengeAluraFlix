import styles from './BotaoIcone.module.css'

function BotaoIcone({ children }) {
    return (
        <button type='submit' className={styles.botaoIcone}>
            {children}
        </button>
    )
}

export default BotaoIcone;