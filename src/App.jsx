import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Inicio from "./components/pages/Inicio"
import DetalleCancion from "./components/pages/DetalleCancion";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import Nosotros from "./components/pages/Nosotros";
import FormularioCancion from "./components/pages/cancion/FormularioCancion";
import Error404 from "./components/pages/Error404";
import { useEffect, useState } from "react";

function App() {
  const cancionesLocalStorage = JSON.parse(localStorage.getItem('catalogoCanciones')) || []
  const [canciones, setCanciones] = useState(cancionesLocalStorage)
  const administradorLogueado = sessionStorage.getItem('userAdmin') || false;
  const [usuarioAdmin, setUsuarioAdmin] = useState(administradorLogueado)

  useEffect(()=>{
    localStorage.setItem('catalogoCanciones', JSON.stringify(canciones))
  }, [canciones])
  return (
    <>
    <BrowserRouter>
      <Menu></Menu>
      <main>
        <Routes>
          <Route path="/" element={<Inicio canciones={canciones}></Inicio>}></Route>
          <Route path="/detalle" element={<DetalleCancion></DetalleCancion>}></Route>
          <Route path="/login" element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}></Route>
          <Route path="/administrador" element={<Administrador setCanciones={setCanciones} canciones={canciones}></Administrador>}></Route>
          <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="/administrador/crear" element={<FormularioCancion></FormularioCancion>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
