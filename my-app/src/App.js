import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pagesize=6
  apikey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress=(progress)=>{
 this.setState({
   progress:progress
 })
  }
  render(props) {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        
        <Switch>
          
                <Route exact path="/Technology"><News setProgress={this.setProgress} apikey={this.apikey} key= "technology" pageSize={this.pagesize} country="in" category='technology'/></Route>
                <Route exact path="/Business"><News setProgress={this.setProgress} apikey={this.apikey} key= "business" pageSize={this.pagesize} country="in" category='business'/></Route>
                <Route exact path="/Entertainment"><News setProgress={this.setProgress} apikey={this.apikey} key= "entertainment" pageSize={9} country="in" category='entertainment'/></Route>
                <Route exact path="/General"><News setProgress={this.setProgress} apikey={this.apikey} key= "general"pageSize={this.pagesize} country="in" category='general'/></Route>
                <Route exact path="/Health"><News setProgress={this.setProgress} apikey={this.apikey} key= "health" pageSize={this.pagesize} country="in" category='health'/></Route>
                <Route exact path="/Science"><News setProgress={this.setProgress} apikey={this.apikey} key= "science"pageSize={this.pagesize} country="in" category='science'/></Route>
                <Route exact path="/Sports"><News setProgress={this.setProgress} apikey={this.apikey} key= "sports" pageSize={this.pagesize} country="in" category='sports'/></Route>



        </Switch>
        </Router>
      </div>
    )
  }
}
