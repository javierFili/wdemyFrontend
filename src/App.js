
import AppBar from './components/appBarComponents/AppBar';
import Body from './components/body-components/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useParams
} from "react-router-dom";
//import Inicio from './components/VistaInfoCurso/Inicio'

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
          {/* <Route path={{ pathname: "/Inicio/:id" }}> */}
          <Route path={"/Inicio/:entrada" }>
              <VistaCurso>
    
              </VistaCurso>
              
            </Route>          
  
            <Route path='/' exact>
              <VistaGeneral>
                
              </VistaGeneral>
            </Route>
  
        </Switch>
      </Router>
  );
  
}

 const Inicio = ()=>{
    const {entrada} = useParams();
    
      return <span>ID: {entrada}</span>;
}


export default App;



