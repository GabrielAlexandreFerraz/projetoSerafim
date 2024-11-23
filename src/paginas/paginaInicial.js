import BemVindo from "../componentes/bemvindo";
import ConfiancaPage from "../componentes/confiancaDiv";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import Produtos from "../componentes/produtos";

export default function PaginaInicial(){
    return (
      <div className="home">
        <Header/>
        <BemVindo/>
        <Produtos/>
        <ConfiancaPage/>
        <Footer/>
    
      </div>
    );
  }
  
