import Equipe from "../equipe/Equipe";
import Exibirperfil from "../exibirPerfil/ExibirPerfil";
import naruto from '../../images/Naruto-PNG.png';
import gaara from '../../images/gaara.png';
import hinata from '../../images/hinata.png';
import sakes from '../../images/saskuke.png';
import oritmaru from '../../images/oritimaru.png';
import jiraya from '../../images/jiraya.png';
import rock from '../../images/rocket.png';
import ka from '../../images/kakashi.png';
import './main.css';
function Main() {
          return(
          <main>
          
                     <Equipe e={7}
                      n1="naruto" img1={naruto}   
                     crt1=" Naruto Uzumaki うずまきナルト Uzumaki Naruto? é um personagem fictício da franquia de mangá e anime Naruto, criada por Masashi Kishimoto. Servindo como o protagonista homônimo da série, ele é um jovem ninja da vila fictícia de Konohagakure Vila Oculta da Folha. Os aldeões de sua vila o desprezavam por causa da Raposa de Nove Caudas " 
                     n2= "gaara" 
                     img2={gaara}  
                     crt2="Gaara (我愛羅?)  a Naruto Uzumaki, com uma história semelhante, mas uma personalidade altamente divergente. Antes mesmo de Gaara nascer, seu pai tinha o propósito de fazê-lo uma poderosa e perigosa arma de terror selando nele a besta de uma cauda Shukaku. Semelhante a Naruto, Gaara foi atormentado e rejeitado por seus companheiros aldeões por ser o hospedeiro de uma besta de cauda. Depois de uma de suas relativas poucas permanências tentaram matá-lo. Gaara desenvolveu uma personalidade sádica e retraído, matando outros para afirmar o valor de sua existência. Sua batalha com Naruto mudou essa mentalidade; como resultado, ele se tornou de boa vontade para ajudar os outros e não ser mais considerado uma arma de terror como novo propósito da sua existência. E se tornou e foi bem sucedido como Kazekage. No Brasil, Gaara é dublado por Yuri Chesman. A dublagem japonesa de Gaara é de Akira Ishida.[70][71]"
                      n3="sakes" 
                      img3={sakes} 
                      crt3={'Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) é um dos últimos membros sobreviventes do clã Uchiha de Konohagakure, além de ser a reencarnação atual de Indra. Ele se tornou um shinobi para que pudesse algum dia ficar forte o suficiente para se vingar contra o seu irmão mais velho, Itachi, que tinha massacrado todo o seu clã. Inicialmente, um membro do Time Kakashi de Konoha, Sasuke desertou da aldeia para obter poder com Orochimaru, e mais tarde também se juntou a Akatsuki, tornando-se um criminoso internacional no processo. Mais tarde, ele se torna uma peça fundamental para acabar com a Quarta Guerra Mundial Ninja, até ser finalmente redimido por seu rival, e também melhor amigo, Naruto Uzumaki. Sasuke decide voltar para Konoha, dedicando a sua vida para ajudar a proteger a vila e seus habitantes. '}  
                     n4="Hinata"
                      img4={hinata} 
                      crt4={"Hinata Hyuga (日向ヒナタ Hyūga Hinata? é um membro do Time 8, que sofre com baixa auto-estima e timidez ao longo da série sendo bastante introvertida."} />
                    <Equipe e= {8}
                    n1="oritmaru"
                    img1={oritmaru}
                    crt1={"Orochimaru (大蛇丸?) é um criminoso que um dia já fez parte da Vila Oculta da Folha. Para enfatizar seu papel como vilão, Kishimoto trabalhou para fazê-lo parecer pálido e doentio, pois ele achava que isso ajudaria a distinguir os vilões dos protagonistas"}
                     n2="jiraya"
                     img2={jiraya}
                     crt2={"Jiraiya自来也 foi um dos Sannin Lendários, junto com Tsunade e Orochimaru, treinados por Hiruzen Sarutobi. Ele era um auto-proclamado super-pervertido, e o escritor da popular série de livros de ficção para adultos, chamado Icha Icha. Ele também era conhecido como o Eremita dos Sapos (虾蟇仙人, Gama Sennin), por causa da sua assinatura de invocação de sapos, e por seu status como Eremita."}
                      n3="Rock Lee"
                      img3={rock} 
                      crt3={"Rock Lee (ロック・リー Rokku Rī?) é um membro do Time Guy e o estudante favorito do líder da equipe, Might Guy. Lee é extremamente otimista, modesto, carismático e possuí excesso de entusiasmo. Apesar de sua natureza muito extrovertida, Lee também mostra fortes instintos, sempre estando focado nas missões que realiza, raramente perdendo a compostura"}
                      n4="Kakashi"
                      img4={ka}
                      crt4={"Kakashi Hatake (はたけカカシ, Hatake Kakashi) é o líder inteligente e descontraído do Time 7, composto por Naruto Uzumaki, Sasuke Uchiha e Sakura Haruno. Kakashi teve um passado sombrio, mas não foi afetado por ele quando adulto. Ele foi uma chave vital para o sucesso de Naruto, treinando-o para ser um grande ninja"}

                      />
                  </main>  )
          
}
export default Main;