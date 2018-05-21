import React, { Component } from 'react';
import Home from './Components/Home/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


import About_us from "./Components/About_us/About_us";
import Menu from "./Components/Menu/Menu";
import Menu2 from "./Components/Menu2/Menu2";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About_us}></Route>
            <Route exact path="/menu" component={Menu}></Route>
            <Route exact path="/menu2" component={Menu2}></Route>
            </Switch>
          </Router>
       
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
