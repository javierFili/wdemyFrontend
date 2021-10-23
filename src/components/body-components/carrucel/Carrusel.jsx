import React, { Component } from 'react';

import curso from '../../../data/Pruebas';

class Filtro extends Component{
  constructor(props){
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nombreAbuscar="";
    this.sacar=this.sacar.bind(this);
    this.numActual=0;
    this.flechaIqzClickada = this.flechaIqzClickada.bind(this);
    this.flechaDereClickada= this.flechaDereClickada.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
     
    this.nombreAbuscar = this.state.value;
    event.preventDefault()
    
  }
  sacar() {
    var filtracion= curso.filter(curso =>curso.palsClavs.includes(this.nombreAbuscar) ||
    this.nombreAbuscar === "" );
    if(filtracion.length >4 ){
      filtracion = filtracion.splice(this.numActual,this.numActual+4);
    }else{
      if(filtracion.length === 0){
       // alert("no hay ese tipo de nombre")
        
      }
    }
    
    return filtracion;
  }
  flechaIqzClickada(){
    this.numActual=this.numActual-4;
    this.handleSubmit();
  }

  flechaDereClickada(){
    this.numActual=this.numActual+4;
    this.handleSubmit();
  }

  render() {
    return (
      <>     
        <form onKeyDown={
          evento=> {
            if(evento.key =='enter'){
              alert('entra');
              return this.handleSubmit;
            }else{
              
            }
          }
          }>
        <label>
          filtro de cursos:
          <input type="text"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="buscar" onClick={this.handleSubmit} />

        </form>

        <div class="carruPrincial" >
          <div class="carruIzq">
            <button class="flechaIzq" onClick={this.flechaIqzClickada}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAalJREFUSEuNVe11wzAIPCZoNqg3cDpBvUGzSb1BskmyQTNKNlIfMpaQADn6Yz99cdwdiHA4CECSXc6/mZKJ/CHwpwy9N0/qvXrCHDInm7NOAOeACcDoEoM8I+Euy18lWZWzQ5KB7u4hpFsiXNWlDSM7CS6/GV1My4SEPwDn7XDJmNR/WWnnRJwqrCzXpNYEXAGcHP1yBvWKXWTHCTWDcg1fyKiXRvxWrhpA8CvOimgZfBfzksBC0skstuoEFPme5FlGzQ659BF7txjTKJ+0Nq0ELnL5ZCwUFxcza7D0wjNqFnENUcdlkgP0hPQBXgDN2kWRW4MCUri8VkF4IWGuIKOia3uOABoXmliTKboR8Ltn63QJaWS5VfQl01I0aHBLAh4APisVYmWnwvzWQ6CDDsrZPAj48Rq24+6u0DZ541Fp5kLjbD4OBK+F1tSBq5d5DzibJ4DvENHGoFMHQ1jGRSubgLPxn5lO9eOnRfeosnsC6ElIc+M0obwv9Hc0CFpPzoSrfh9BHeg34MBWTsb86LABeMgDNIjYKGT8HlX1gAQN/p2eY/YPfQ78A6S4rx5p6IgUAAAAAElFTkSuQmCC"/>
            </button>
            </div>

            <div className="carruMedio">
            <ul>
            {
            this.sacar().map((curso) => {
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
            })
            }
            </ul>
          </div>
            <div class="carruDere">
            <button class="flechaDer" onClick={this.flechaDereClickada}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbNJREFUSEudleF1wjAMhD9t1I7CBnSDjhA2gBG6Ad2AbpBuQDeACdTnxImlWKJ95FeCsaQ7nU5C+Aig60n7qm/+OA4x/SqUv/7xPBNUa3lLgilG+VgOGCuEN5jec5z17oQ4QCYJ2pmf+fIAenAZuku1uCDZTFF/QSc0DdmosAO52t6YImb0AZtJAtPhlv8GDMAppMLIYgukorfpRVNO4aLCDuVm1WURNDojFc23mkajcqGgeRM4m2YFQnAJXCNMglxDgpYERWklYaw0G9a89wkssT7UtaABLr3SnqfI0rwI64hwWHuzKtCk/TeCHM0I8rq1mWWgrP8skq5+0jRuaWh5VgV+o7zY2cq8yKmoWYifpE3/TgrvfmqF2Sp6v1iGuKHNaBF+UNmDXrIBDGzZT7IfHDckH0xVW5k600ztOpmDFeod2APnx7bhKHL8PhrQT4R9kWNilN2yylXkeb+DDIIeoyl8JISwB9bIQL8qJWVq48Xi6jZd2wRaTmyRZdkMdfn0YYId4OYgWE5Ft2OFXBo5dn7lnD0pvWYxg+bDmP0cLLztdvHzbfuRJAhpzhy52UnQoF9BntojuCNehAAAAABJRU5ErkJggg=="/>
            
            </button>
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
