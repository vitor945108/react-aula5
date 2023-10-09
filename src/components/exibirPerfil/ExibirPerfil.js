


function exibirperfil(props) {
           return(
                    <div>
                       <img className="img-exibirperfil" src={props.img} alt={props.nome}/>
                       <h1>nome: {props.nome}</h1>
                       <p> caractericas : {props.crt}</p>
                    </div>
           )

           
          
}
export default exibirperfil