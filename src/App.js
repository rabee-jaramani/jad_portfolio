import React from "react";
import { CSSPlugin } from 'gsap/all'


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Tabs from './Tabs'

import './style.sass'
import './section.sass'
import './tabs.sass'
import './loading.sass'
import './home.sass'

import Profile from "./Profile";
import Loading from "./Loading";
import gsap from "gsap/gsap-core";





class App extends React.Component {


  componentDidMount(){
    gsap.registerPlugin( CSSPlugin )
    

  }
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />

        </Switch>
        <Loading/>
        <Tabs/>
        <canvas id="matrix"></canvas>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
