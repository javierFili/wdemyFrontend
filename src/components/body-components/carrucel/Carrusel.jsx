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
  /* nombreAbuscar=' '; */
  constructor(props){
    super(props);
    this.state = {value: ""};
    /* this.state = ''; */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   /*  this.MyCarousel = this.MyCarousel.bind(this); */
    this.nombreAbuscar="";
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted:'+ this.nombreAbuscar);
    this.nombreAbuscar = this.state.value;
    alert('A name was submitted:'+ this.nombreAbuscar);
    event.preventDefault();  
    /* this.render(); */
  }
  
  render() {
    return (
      <>     
        <form onSubmit={this.handleSubmit}>
        <label>
          filtro de cursos:
          <input type="text"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="button" value="buscar" onClick={this.handleSubmit} />

        </form>

        <div >
          <div className="App">
          <ul>
            
            {
              
            curso.filter(curso =>curso.palsClavs.includes(this.nombreAbuscar) ||
              this.nombreAbuscar === "" ).map((curso) => {
              return (
                <div id="esta" >
                      <h3>{curso.titulo}</h3>
                      <br />                    
                      {curso.imagen}
                      <br />
                      {curso.actualizacion}
                      <br />
                      {curso.tutor} 
                      <br />
                      {this.nombreAbuscar}
                </div>
              );
            })}
          </ul>
          </div>
        </div>
        
      </>
    )
  }

}



export default class Carrusel extends Component {

  render() {   
     return (
        <main role="main">
          <Filtro 
          />
         
        </main>
        
    );
  }
}
