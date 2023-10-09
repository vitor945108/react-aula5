import './Fruitlist.css';
import Pera from '../../images/pera.png';
import uva from '../../images/uva.png';
import laranja from '../../images/laranja.png';
import maca from '../../images/maça.jpg';

function fruitList() {
          const dados= [
                    {img : Pera ,fruta: " pera ",preço:20.00,quantidade :30},
                    {img : uva,fruta: " uva ",preço:10.00,quantidade :50},
                    {img :laranja,fruta: " laranja",preço:8.00,quantidade :100},
                    {img : maca ,fruta: "maça",preço:16.00,quantidade :10},
                    {img : Pera ,fruta: " pera ",preço:20.00,quantidade :30},
                    {img : uva,fruta: " uva ",preço:10.00,quantidade :50},
                    {img :laranja,fruta: " laranja",preço:8.00,quantidade :100},
                    {img : maca ,fruta: "maça",preço:16.00,quantidade :10},
                    
                    
          ];
          return(
<>
{
dados.map( (dado)=> 
          <div className='fruta'>
          <div><img src={dado.img}></img></div>
           <div><h3> 
          fruta:  {dado.fruta}<br/>
           preço: {dado.preço}<br/>
           quantidade: {dado.quantidade}<br/>
            </h3></div> 
          </div>
          )
          }


</>
          )
          
}
export default fruitList;