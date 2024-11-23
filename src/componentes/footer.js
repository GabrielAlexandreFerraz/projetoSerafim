import './footer.css'
import logoFacebook from '../imagens/logoFacebook.png'
import logoInstagram from '../imagens/logoInstagram.png'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='footerUm'>
            <img src={logoFacebook} className ='logoFacebook' alt='logoFacebook'/>
            <img src={logoInstagram} className ='logoInstagram' alt='logoInstagram'/>
            </div>
            <div className='footerTexto'> @CopyRight</div>
        </div>
    )

}