import './App.css';
import React from 'react'
import CartaView from './Views/CartaView'
import LoginView from './Views/LoginView'
import RegistrarView from './Views/RegistrarView'
import NotFound from './Views/NotFound'
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'

function App() {

  return <BrowserRouter>
    <Switch>
        <Route exact path="/login" component={LoginView} /> 
        <Redirect exact path='/' to='/login' />
        <Route exact path="/yourcards" component={CartaView} />
        <Route exact path='/register' component={RegistrarView}/>
        <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>;
}

export default App;
