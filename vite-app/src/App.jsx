import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido al mejor lugar para mimar a tus gatos!'}/>
    </div>
  )
}


export default App;