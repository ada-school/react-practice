import "../styles/Detail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonById } from "../JavaScript/data";
const Detail = () => {
  // Extraemos ese param que definimos en el comopnente App.jsx
  //que sería pokemons/:idPokemon
  //ya con el id, el cual es una dato relevante, podemos iniciar a trabajar
  //como lo vemos en el useEffect de este componente

  //Utiliza el hook useParams para extraer la información necesaria de la url
  //para saber que pokemon debemos buscar
  //  useParams();

  const [data, setData] = useState();

  // useEffect(() => {
  //    getPokemonById(idPokemon).then((res) => setData(res));
  // }, [idPokemon]);

  return (
    <>
      <div className="container-pokemon">
        <div className="info-pokemon">
          <h1>Te presento a {data.name}</h1>
          <img src={data.image} />
          <p>su tipo es {data.type}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
