import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import ModalEditar from "../../components/ModalEditar";
import Titulo from "../../components/Titulo";
import styles from './Inicio.module.css';
import VideoContext from "../../components/VideoContext/VideoContext";

function Inicio () {

    const { videos, deleteVideo } = useContext(VideoContext);
    const [ video, setVideos ] = useState()

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => {setVideos(data)})
            .catch(error => console.error('Erro ao buscar vídeos:', error));
    }, []);

    return (
        <>
        <Banner imagem="imagem" player="player"/>
        <Titulo>
            <h2> Um lugar para guardar seus vídeos e filmes</h2>
        </Titulo>
        <section className={styles.conteiner}>
            {videos.map((video) => {
                return <Card {...video} key={video.id} onDelete={deleteVideo}/>
            })}
        </section>
        <ModalEditar/>
        </>
    )
}

export default Inicio;