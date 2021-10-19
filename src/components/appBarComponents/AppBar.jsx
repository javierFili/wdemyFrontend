import React, { Component } from 'react';
import Bootstrap, {
    Navbar,
  } from 'bootstrap-4-react';
  
const AppBar = () => {
    const Menu = props => (
        <div id="appBar">
            <h2 id="titulo">Wdemy</h2>
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

export default AppBar