import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPokemons from "./pages/ListPokemons";
import Header from "./components/Header";
import Error from "./components/Error";
import Detail from "./pages/Detail";
import About from "./pages/About";

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
