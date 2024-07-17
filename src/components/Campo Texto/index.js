import styles from './CampoTexto.module.css';

function CampoTexto ({ label, placeholder, obrigatorio, valor, aoAlterado }) {
   
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }
        //precisa funcionalidade limpar campos
    
    return(
        <>
        <div className= {styles.campoTexto} >
           <label>{label}</label>
           <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={`${placeholder}...`} />
        </div>
        
        </>
    )
}

export default CampoTexto;