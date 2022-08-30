import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
  <div>
    <header>
    <NavBar/>
    </header>
    <h1>Tercera entrega</h1>
    <ItemListContainer greeting={'Bienvenido'}/>
  </div>
  );
}

export default App;
