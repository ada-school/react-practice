import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ListPokemons from "./pages/ListPokemons";
import Error from "./components/Error";
import Header from "./components/Header";
import Detail from "./pages/Detail";

/**
 Para iniciar a utilizar react router no olvidemos que primero se debe instalar 

 ===> npm install react-router-dom <===

 documentación para LEER ==> https://reactrouter.com/en/main
*/
//aqui debes crear el enrutamiento de nuestra aplicación 👇
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<ListPokemons />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/:idPokemon" element={<Detail />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
