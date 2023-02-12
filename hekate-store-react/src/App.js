//---Librerias----------//
import { Route, Routes } from "react-router-dom";
//----- Componentes ----------//
import Biblioteca from './components/Biblioteca/Biblioteca';
import LandingPage from './components/LandingPage/LandingPage';
import Inicio from './components/Inicio/Inicio';
import FormAddBook from './components/Biblioteca/FormAddBook/FormAddBook';
import Joyeria from './components/Joyeria/Joyeria';
import Servicios from './components/Servicios/Servicios';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
				
				<Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/inicio" element={<Inicio/>} />

        {/* RUTAS ANIDADAS BIBLIOTECA*/}
          <Route exact path="/biblioteca" element={<Biblioteca/>} />
          <Route exact path="/biblioteca/formulario" element={<FormAddBook/>} />

        <Route exact path="/joyeria" element={<Joyeria/>} />
        <Route exact path="/servicios" element={<Servicios/>} />
				
			</Routes>
    </div>
  );
}

export default App;
