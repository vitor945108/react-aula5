import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Modelocomp from './components/modelocomp/modelocomp';
import TestList from './components/textlist/TestList';
import FruitList from './components/Fruitlist/FruitList';
import Equipe from './components/equipe/Equipe';

 
function App (){ 

  return( 
    <div className='app'>
      {/*<Header/>
      <Main/>
  <Footer/>*/}
  <Equipe/>
    </div>
  )
}
 



export default App;
