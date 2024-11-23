import './bemvindo.css'
import logocompostaDois from '../imagens/logocompostaDois.png'

export default function BemVindo(){
    return(
        <div className='bemVindo'>
            <div className='bemVindoDois'>
               <div className='linhaTextoBemVindoUm'>Bem-vindo a Prisma Etiquetas!</div>
               <div className='linhaTextoBemVindoDois'>Na Prisma, oferecemos adesivos e lacres de 
                garantia personalizados, focando em pequenas quantidades para atender suas necessidades específicas com qualidade e atenção aos detalhes.</div>
                <div className='blocosBemvindo'>
                <div className='blocoBemVindoUm'>
                    <div className='bemVindolinha'>10000+</div>
                    <div className='bemVindolinhaDois'>Qualidade garantida</div>
                </div>
                <div className='blocoBemVindoDois'>
                    <div className='bemVindolinha'>20000</div>
                    <div className='bemVindolinhaDois'>Clientes satisfeitos</div>
                </div>
                </div>
            </div>
            <div className='bemVindoImagem'><img src={logocompostaDois} alt='logocompostaDois'/></div>

        </div>
    )

}