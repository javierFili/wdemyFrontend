import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

const Inicio = ()=>{
    const {entrada} = useParams();
    console.log(entrada);
    console.log(useParams());
    return <span>ID: {entrada}</span>;
}

export default Inicio;


