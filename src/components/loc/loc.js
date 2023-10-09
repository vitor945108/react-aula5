import Gaara from '../../images/gaara.png';
import naruto from '../../images/Naruto-PNG.png';
import './loc.css';
function Loc({titulo}) {
          return(
                    <div  className="loc">
                       <h1>{titulo}</h1>
                       <img src={Gaara}  className='img-Gaara'/>         
                      </div>
          )
             
   }
   function Naruto({titulo}) {
      return(
                <div  className="naruto">
                   <h1>{titulo}</h1>
                   <img src={naruto}  className='img-naruto'/>         
                  </div>
      )
         
}
   
   export default Loc;