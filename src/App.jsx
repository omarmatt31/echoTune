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
import { useState } from "react";

function App() {
  const [canciones, setCanciones] = useState([])
  return (
    <>
    <BrowserRouter>
      <Menu></Menu>
      <main>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/detalle" element={<DetalleCancion></DetalleCancion>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
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
