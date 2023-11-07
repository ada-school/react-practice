import React from "react";

const Decrement = () => {
  
  //Has que la función dispatch proporcionada por useReducer
  //llegue aquí con la ayuda de hook useContext
  //NOTA: no olvides que useContext recibe como argumento el contexto creado en "../Context/context.js"}


  return <button onClick={()=>console.log("DECREMENT")}>Decrement</button>;
};

export default Decrement;
