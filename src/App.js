import AppBar from './components/appBarComponents/AppBar';
import Body from './components/body-components/Body';
import { useParams } from 'react-router';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Inicio from './components/VistaInfoCurso/Inicio'

function VistaGeneral(){
  return(
    <Router>
      <div>
        <AppBar 

        />
      </div>
      <div class="fondo">
        <Body
          
        />
      </div>
      </Router>
  );

}

function VistaCurso(){
 return(
  <Router>
    <div>
      <AppBar 

      />
    </div>
    <div class="fondo">
    <Inicio>

    </Inicio>
    </div>
    
    </Router>
  );

}

function App() {
  return(
    <Router>
        <Switch>
                   
  
            <Route exact path='/' >
              <VistaGeneral>
                
              </VistaGeneral>
            </Route>
  
            {/* path="/blog/:slug" */}
            <Route path="/Inicio/:entrada">  
              <VistaCurso>
                  
              </VistaCurso>
              
            </Route> 

        </Switch>
      </Router>
  );
  
}

 /* const Inicio = ()=>{
    const {entrada} = useParams();
    
      return <span>ID: {entrada}</span>;
} */


export default App;



