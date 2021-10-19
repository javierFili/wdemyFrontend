import { render } from '@testing-library/react';
import React, { Component } from 'react';

                   {/*  <a href="#primero">primer</a> 
                    <a name="primero"><h1>Primer apartado</h1></a> */}  

export default class AppBar extends React.Component {
        render(){

            const Menu = props => (
                <div id="appBar">
                    <a href="http://localhost:3000/" > <h2 id="titulo" onClick={this.handleClick}  >Wdemy </h2> </a>
                </div>
            )
            return (
                <>
                <div id="menu">
                    <Menu />
                </div>
                </>
            )
        }
    
}

