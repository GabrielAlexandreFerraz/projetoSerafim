import './produtos.css'
import produtoum from '../imagens/produtoum.png'
import produtodois from '../imagens/produtodois.png'
import produtotres from '../imagens/produtotres.png'
import produtoquatro from '../imagens/produtoquatro.png'
export default function Produtos(){
    return(
        <div className='produtos'>
            <div className='linhaTextoProduto'> Nossos Produtos</div>
            <div className='blocosProdutosUm'>
            <div> <img src={produtoum} className ='produtoImagemUm' alt='produtoum'/></div>
            <div><img src={produtodois} className ='produtoImagemDois' alt='produtoum'/></div>
            </div>
            <div className='blocosProdutosDois'>
            <div> <img src={produtotres} className ='produtoImagemTres' alt='produtotres'/> </div>
            <div> <img src={produtoquatro} className ='produtoImagemQuatro' alt='produtoquatro'/> </div>
            </div>

        </div>
    )
}