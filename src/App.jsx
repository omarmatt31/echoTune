import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Index from "./components/pages/Index"
import DetalleCancion from "./components/pages/DetalleCancion";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import Nosotros from "./components/pages/Nosotros";
import FormularioCancion from "./components/pages/cancion/FormularioCancion";
import Error404 from "./components/pages/Error404";

function App() {

  return (
    <>
    <BrowserRouter>
      <Menu></Menu>
      <main>
        <Nosotros></Nosotros>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/detalle" element={<DetalleCancion></DetalleCancion>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/administrador" element={<Administrador></Administrador>}></Route>
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
