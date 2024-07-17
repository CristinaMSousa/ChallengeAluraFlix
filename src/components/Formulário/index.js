import { useState } from 'react';
import Botao from '../Botão';
import CampoTexto from '../Campo Texto';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Formulario.module.css';

function Formulario ({ aoNovoVideoCadastrado }) {

    const categorias = [ 
        'Divertido',
        'Receitas',
        'Programação'
    ]
 
    const [titulo, setTitulo] = useState ('')
    const [categoria, setCategoria] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [video, setVideo] = useState ('')
    const [descricao, setDescricao] = useState ('')
           
    const aoGuardar = (evento) => {
        evento.preventDefault()
        aoNovoVideoCadastrado ({
            id: Date.now(),
            titulo: titulo, 
            categoria: categoria,
            imagem: imagem,
            video: video,
            descricao: descricao
        });
        limparFormulario();
    };

    const limparFormulario = () => {
        setTitulo('');
        setCategoria('');
        setImagem('');
        setVideo('');
        setDescricao('');
    };
    
    return(
        <section className={styles.formulario}>
            <form onSubmit={aoGuardar} >
                <hr/>
                <h4>Criar Card</h4>
                <hr/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder='Digite o título'
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Categoria' 
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Imagem' 
                    placeholder='Insira url da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}                    
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Video' 
                    placeholder='Insira a url do vídeo'
                    valor={video}
                    aoAlterado={valor => setVideo(valor)}
                    />
                <CampoTexto 
                    label='Descrição' 
                    placeholder=' Descrição do vídeo'
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                    />
                <Botao type='submit'>Guardar</Botao>
                <Botao type='button' onClick={limparFormulario}>Limpar</Botao>
            </form>
        </section>
    )
}

export default Formulario; 