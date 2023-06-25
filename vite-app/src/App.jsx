import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { deleteAllOrders } from './services/firebase/deleteOrders';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useContext, createContext} from 'react';
import { CartContextProvider } from './context/CartContext';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import { exportData } from './services/firebase/helpers';


function App() {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <div className='App'>
        <NavBar /> 
        <Banner/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryid' element={<ItemListContainer />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/order-confirmation/:orderid' element={<OrderConfirmation/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1 className='message-404'>404 Oops! Parece que esa página no existe</h1>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
