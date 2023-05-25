import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Flex from './components/Flex/Flex';
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
      
    </div>
  )
}


export default App;