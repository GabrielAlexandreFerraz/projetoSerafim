import './confiancaDiv.css'
import confianca from '../imagens/confianca.jpg'

export default function ConfiancaPage(){
    return(
        <div>
    <div className="confiancaDiv">
        <div className='confiancaDivDois'>
        <div className='linhaTextoUm'>Rapidez, Qualidade e Confiança!</div>
        <div className='linhaTextoDois'>Adesivos e Lacres</div>
        <div className='linhaTextoTres'>A sua loja ideal para adesivos e lacres de garantia em pequenas quantidades. Confira!</div>
        </div>
        
        <div className='confiancaDivImagem'><img src={confianca} alt='confianca'/></div>
    
    </div>
    </div>
    )
}