import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {createContext} from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar /> 
        <Banner/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryid' element={<ItemListContainer />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 Elemento no encontrado</h1>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;


