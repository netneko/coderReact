import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Flex from './components/Flex/Flex';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


/*import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";*/

function App() {
  return(
    <div className='App'>
      <NavBar />
      <Flex>
        <ItemListContainer/>
        <ItemCount inicio={1} stock={10} onAdd={(cant) => console.log('Cantidad agregada!',cant)}/>
      </Flex>
      <ItemDetailContainer productId={1}/> 
    </div>
  )
}


export default App;

/*
ACA en <ItemDetailContainer productId={productId}/>  le estoy hardcodeando un 1 solo hasta ver la clase de routing
Tengo un problema con el Id que se pasa a la funcion getItemDataById porque ese id no lo tengo en el hoook y no se como sacarlo
*/