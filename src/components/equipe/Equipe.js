import Exibirperfil from "../exibirPerfil/ExibirPerfil";
import naruto from '../../images/Naruto-PNG.png';
import gaara from '../../images/gaara.png';
import hinata from '../../images/hinata.png';

import './Equipe.css';
function Equipe() {
      const listp=[
                    {nome:"naruto",img:naruto,crt:"" },
                    {nome:"naruto",img:naruto,crt:"" },
                    {nome:"naruto",img:naruto,crt:"aaaa" },
                    {nome:"naruto",img:naruto,crt:"aaaa" },

          ]

          return(
                    <>
                    <h1>equipe </h1>
                    <div className="div-exibe">
                              {listp.map((p)=>
                              <Exibirperfil nome={p.nome} img={p.imagem} crt={p.crt}/>
          )
          }
                    </div>
                    </>
          )  
}
export default Equipe;