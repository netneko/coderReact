import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Flex from './components/Flex/Flex';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


/*import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";*/

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemListContainer />}/>
          <Route path='*' element={<h1>404 Elemento no encontrado</h1>}/>
        </Routes>

      </BrowserRouter>



    </div>
  )
}


export default App;

/* <ItemDetailContainer productId={1} />

ACA en <ItemDetailContainer productId={productId}/>  le estoy hardcodeando un 1 solo hasta ver la clase de routing
Tengo un problema con el Id que se pasa a la funcion getItemDataById porque ese id no lo tengo en el hoook y no se como sacarlo
*/