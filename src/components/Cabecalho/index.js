import { Link } from "react-router-dom";
import logo from './image 1 (1).png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "../CabecalhoLink";

function Cabecalho () {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo da Aluraflix"></img>
            </Link>
            <nav>
                <button className={styles.botao} type="button">
                    <CabecalhoLink url="./">
                        HOME
                    </CabecalhoLink>
                </button>
                <button className={styles.botao} type="button">
                    <CabecalhoLink url="./NovoVideo">
                        NOVO VÍDEO
                    </CabecalhoLink>
                </button>
            </nav>
        </header>
    )
}
export default Cabecalho;