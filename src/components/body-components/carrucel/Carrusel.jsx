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
  nombreAbuscar=' ';
  constructor(props){
    super(props);
    this.state = {value: ' '};
    /* this.state = ''; */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.botonPulsado.bind(this);
   /*  this.MyCarousel = this.MyCarousel.bind(this); */
    this.nombreAbuscar=" ";
  }

  handleChange(event) {
    //este esta raro igual, no esta cambiando el valor de STATE por 
    //ende estate no cambia el valor de nombreAbuscar
    this.setState({value: event.target.value}); 
    /* this.state = event.target.value; */

  }

  botonPulsado(event) {
    alert("esta entrando:")
    this.nombreAbuscar = this.state.value();
    event.preventDefault();
    this.render();
    
  }
  
  render() {
    return (
      <>     
        <form onSubmit={this.botonPulsado}>
        <label>
          filtro de cursos:
          <input type="text"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="buscar" />
        </form>

        <div >
          <div className="App">
          <ul>
            {/* this.nombreAbuscar=' ' esta raro */}
            {curso.filter(curso => this.nombreAbuscar === " "|| 
              curso.palsClavs.includes(this.nombreAbuscar)).map((curso) => {
              return (
                <div id="esta" >
                      {curso.imagen}  {curso.actualizacion} {curso.tutor} 
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
            /* onText={codigo => {
              const producto = dbProductos[codigo];

              if (!producto) {
                alert("El producto no existe :(");
                return;
              }

              setCurrentListaProductos([
                ...(currentListaProductos || []),
                producto
              ]);
            }} */

          />
         
        </main>
        
    );
  }
}
