import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path="/category/Sales" element={<ItemListContainer />} />
          <Route path="/category/Rubs" element={<ItemListContainer />} />
          <Route path="/category/Especias" element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 Elemento no encontrado</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
