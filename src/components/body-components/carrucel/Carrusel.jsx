
import React, { Component } from 'react';
import VistaPrevia from './vistaPrevia/VistaPrevia';
import curso from '../../../data/Pruebas';

const MyCarousel = props => (
  <div >
    {/* esta estara compuesta por 4 o menos componentes */}
    <div className="App">
      <ul>

        {curso.filter(curso => curso.actualizacion != "20/10/21" && 
          curso.palsClavs.includes("programacion")==true).map(curso => (
        <option key={curso.imagen} value={curso.actualizacion} 
          value={curso.tutor}>{curso.actualizacion}, {curso.imagen},{curso.tutor}</option>))
        }
        {/* {curso.filter(curso => curso.actualizacion != "21/10/21").Pruebas.map((curso) => {
          return (
            <div id="esta" width="80px" height="600px">
                <li>
                  {curso.imagen}  {curso.actualizacion} {curso.tutor} 
                </li>
            </div>
          );
        })} */}
      </ul>
    </div>

  </div>
)

/* const VistaPrevia = props=>() */


export default class Carrusel extends Component {
  
  render() {
    return (
        <main role="main">
          <MyCarousel />
        </main>
    );
  }
}
/* 
export default Carrusel;

import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ul>
        {data.map((person) => {
          return (
            <div id="esta" width="100px" height="600px">
              <li>
                {person.firstname} {person.lastname} {person.phone}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */











