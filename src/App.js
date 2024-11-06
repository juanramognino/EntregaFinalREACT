import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components item/DetailsItem';
import ProviderContextoListCart from './components/components item/providerContextoListCart';

function App() {
  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <img src="./assets/nuevo-logo.png" alt="Logo Tienda" />
          </div>
        </header>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ContainerCardItems />} />
          <Route path='/item/:idItem' element={ <DetailsItem />} />
          <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
        </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
  );
}

export default App;
