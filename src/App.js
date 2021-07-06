'use strict'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header'
import Home from './component/Home'
import Fav from './component/Fav'

class App extends React.Component{
  render(){
    return(
      <div>
        
    <Router>
<Header/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route  path="/fav"><Fav/></Route>

          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;
