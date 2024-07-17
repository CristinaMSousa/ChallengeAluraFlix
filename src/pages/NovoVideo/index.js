import { useContext } from 'react';
import Formulario from '../../components/Formulário';
import Titulo from '../../components/Titulo';
import styles from './NovoVideo.module.css';
import VideoContext from '../../components/VideoContext/VideoContext';


function NovoVideo () {
    const { addVideo } = useContext(VideoContext);
    
    return (
        <>
        <Titulo className={styles.container} >
            <h2>NOVO VÍDEO</h2>
            <h6>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</h6>
            <Formulario aoNovoVideoCadastrado={addVideo}/>
        </Titulo>
        </>
    )
}

export default NovoVideo;