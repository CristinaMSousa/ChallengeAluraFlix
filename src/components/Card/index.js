import styles from './Card.module.css';
import deletar from './deleta.png';
import editar from './editar.png';
import BotaoIcone from '../BotaoIcone';

function Card ({ imagem, id, onDelete}){

    const handleDeleteClick = () => {
        onDelete(id);
    };

    return (
        <>
        <figure className={styles.card}>
            <img src={imagem}  alt="Imagem de video" id={id} className={styles.imagem} />
            <footer className={styles.icones}>
                <BotaoIcone type='submit' className={styles.iconeDeleta} onClick={handleDeleteClick}>
                    <img src={deletar} alt="Icone Deletar"/>
                    <p>Delete</p>
                </BotaoIcone>
                <BotaoIcone  type='submit' className={styles.iconeEdita}>
                    <img src={editar} alt="Icone de Editar" ></img>
                    <p>Editar</p>
                </BotaoIcone>
            </footer>                         
        </figure>
        </>
    )
}
 export default Card;
