import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";*/

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={'Todo para tus gatos'}/>
    </div>
  )
}


export default App;