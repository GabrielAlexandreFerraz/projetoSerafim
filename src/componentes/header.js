import './header.css'
import logoSemFundo from '../imagens/logoSemFundo.png'
import carrinhoSemFundo from '../imagens/carrinhoSemFundo.png'
export default function Header(){
    return(
    <header className="divHeader">
            <div className='divHeaderTwo'>
                
                    <div className="navListHeader">
                    <div className='divHeaderInicio'>Inicio</div>
                    <div className='divHeaderProdutos'>Produtos</div>
                    <div className='divHeaderContato'>Contato</div>
                    <div className='divHeaderLogins'>Login</div>

                    </div>
                    <div className='logoHeader'>
                    <img src={logoSemFundo} alt='Logo' className='logo'/>
                    </div>
                    <div className='carrinhoHeader'>
                        <img src={carrinhoSemFundo} alt='carrinho' className='carrinho'/>
                        <div className='comprarCarrinho'>Comprar</div>
                    
                    </div>
                    </div>
        </header>
    )
}