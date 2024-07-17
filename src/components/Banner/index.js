import styles from './Banner.module.css';
import imagem from './imagem.png';

function Banner () {
    return (
        <>
        <div className={styles.capa}>
            <img src={imagem} alt='Banner' />
        </div> 
        </>          
    )
}

export default Banner;