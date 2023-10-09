import './TextList.css';

function TestList() {
          const dados= [
                    {nome: " Maria ",idade:20,altura :1.65},
                    {nome: " João",idade:27,altura :1.85},
                    {nome: " Pedro ",idade:19,altura :2.65},
          ];
          return(
<>
{
dados.map(
          (dado)=> <h3>nome: {dado.nome} <br/>
          idade:{dado.idade}<br/>
           altura:{dado.altura}<br/>
           </h3>
          )
          }


</>
          )
          
}
export default  TestList ;