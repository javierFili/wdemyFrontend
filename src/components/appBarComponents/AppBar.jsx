import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                <div id="appBar">                    
                    <div>
                    <button class="Bt-Wdemy" onClick={this.refrescar}>
                    <Link to='/'>
                        <h1>Wdemy</h1>
                    </Link>
                    </button>
                    </div>                  
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

