import React, { Component } from 'react';
import Carrusel from './carrucel/Carrusel';


const Body =()=>{
    return (
        
        <div  class="fondo">
            <div class="BodyPart" >
            <div class='vistaDescrip'>
                {<h5>esto debe desaparecer</h5>}
            </div>
                <div class="descripcion">
                    
                    <h3 class="letraDescrip">
                        <br />
                        Esta pagina esta pensada para el aprendizaje de herramientas 
                        tecnologicas y fomentar el aprendizaje en todas las personas 
                        que deseen aprender   
                    </h3>
                        
                </div>        
            </div>        
                <div class="introTit">            
                <div class="BodyPart">
                        <p class="plataforma">
                        <h3>
                        Cursos en plataforma:
                        </h3>
                        </p>   
                </div>
           </div>
           <div class="BodyPart">
                <Carrusel 
 
                    />
           </div>
        </div>
       
    )
}

export default Body


