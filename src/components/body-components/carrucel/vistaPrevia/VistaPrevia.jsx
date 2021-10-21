import React, { Component } from 'react';
import Pruebas from '../../../../data/Pruebas'
export default class VistaPrevia extends React.Component {
    
    constructor(props) {
        super(props);
        this.actualizacion = "10/20/21";// estos datos se los proporsiona la base de datos
        this.cantInscritos = 21;
        this.nombreTutor   = "javi"
        this.titulo        ="Automatas"
      }
    render(){

        return (
            <>
                <div>
                    <h4>Titulo:{this.titulo}</h4>

                </div>
            
                <div>
                    <img src="" alt="imagen" />
                </div>

                <div>
                    <p>
                        Actualizacion:{this.actualizacion}
                    </p>
                    <p>
                        Cantidad de incritos:{this.cantInscritos}
                    </p>
                    <p>
                        Tutor del curos:{this.nombreTutor}
                    </p>
                </div>
            </>
        )
    }

}