import React, { Component } from 'react';
import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom";

export default class AppBar extends React.Component {

    constructor(props){
        super(props);
        this.refrescar = this.refrescar.bind(this);
    }
    refrescar(params) {
        
        window.location.href = window.location.href;    
    }

    render(){ 
        const Menu = props => (    
            <button className="Bt-Wdemy"  onClick={this.refrescar}>
                <Link className='linkInial' to='/' >
                    <h1 class='titulo'>Wdemy</h1>
                </Link>
                    
            </button>
        )
        return (
            <div class="appBar">
                <Menu />
            </div>
        )
    }          
}

