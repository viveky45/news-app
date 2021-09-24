import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
          
                <Route exact path="/Technology"><News key= "technology" pageSize={9} country="in" category='technology'/></Route>
                <Route exact path="/Business"><News key= "business" pageSize={9} country="in" category='business'/></Route>
                <Route exact path="/Entertainment"><News  key= "entertainment" pageSize={9} country="in" category='entertainment'/></Route>
                <Route exact path="/General"><News  key= "general"pageSize={9} country="in" category='general'/></Route>
                <Route exact path="/Health"><News key= "health" pageSize={9} country="in" category='health'/></Route>
                <Route exact path="/Science"><News  key= "science"pageSize={9} country="in" category='science'/></Route>
                <Route exact path="/Sports"><News key= "sports" pageSize={9} country="in" category='sports'/></Route>



        </Switch>
        </Router>
      </div>
    )
  }
}
