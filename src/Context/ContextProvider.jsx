import React from "react";
import { MyContext } from "./context";
import reducer from "../Reducer/reducer";
import { useReducer } from "react";

const ContextProvider = ({ children }) => {

const initialState = {count: 0};
 //implementa el hook useReducer aquí 👇

// useReducer

 //el hook useReducer nos retorna el state y el dispatch, debemos hacer que lleguen
 //a los demás componentes con el provider de nuestro contexto e indicarle los valores
  return (
    <>
            {children}
    </>
  );
};

export default ContextProvider;
