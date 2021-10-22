/*
buscar la manera de tener un observador que cuando se escriba algo en el filtro
este haga la modificacion y posterior busqueda dado ese nombre
, luego el carrusel tenemos que ponerle mas pinta.
poner condicional y boton
la condiocional solo agrega a 4 o mas elementos ..si es mejor a 4 los centra
el boton son dos , uno adelante si aun hay elemetos adelante, atras si hay elemtos atras
si no los hay debes hacer desaparecer el boton

*/
import React, { Component } from 'react';

import curso from '../../../data/Pruebas';


class Filtro extends Component{
  
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.botonPulsado.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
  }

  botonPulsado(event) {
    alert('buscando cursos de ' + this.state.value);
    nombreAbuscar = this.state.value;
    
    event.preventDefault();
  }
  render() {

      return (
          <>     
            <form onSubmit={this.botonPulsado}>
            <label>
              filtro de cursos:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="buscar" />
            </form>       
          </>
      )
    }
}
var nombreAbuscar=" ";

export default class Carrusel extends Component {
  
  render() {
    const MyCarousel = props => (
      <div >
        <div className="App">
          <ul>
            {curso.filter(curso => nombreAbuscar==" "||
              curso.palsClavs.includes(nombreAbuscar)).map((curso) => {
              return (
                <div id="esta" >
                      {curso.imagen}  {curso.actualizacion} {curso.tutor} 
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    )
    return (
        <main role="main">
          <Filtro />
          <MyCarousel />
        </main>
    );
  }
}












