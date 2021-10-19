import React, { Component } from 'react';
import Carrusel from './carrucel/Carrusel';
import Filtro from './filtro/Filtro';

const Body =()=>{
    return (
        <>
            <div class="BodyPart" >
                <p class="descripcion">
                    <h5 class="letraDescrip">
                        Esta pagina esta pensada para el aprendizaje de herramientas 
                        tecnologicas y fomentar el aprendizaje en todas las personas 
                        que deseen aprender   
                    </h5>     
                </p>        
            </div>        
                <div class="introTit">            
                <div class="BodyPart">
                        <p class="plataforma">
                        <h3>
                        Cursos en plataforma:
                        </h3>
                        </p>   
                </div>
           
                <div class="BodyPart">
                    <div class="carrusel">
                        <Filtro/>
                    </div>
                        
                </div>
           </div>
           <div class="BodyPart">
                <Carrusel 
                        
                    />
           </div>

        </>
    )
}

export default Body


