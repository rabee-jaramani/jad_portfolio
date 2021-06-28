import React from "react";
import { CSSPlugin } from 'gsap/all'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Tabs from './Tabs'
import Skills from './Skills'


import './style.sass'
import './section.sass'
import './tabs.sass'
import './loading.sass'
import './home.sass'
import './profile.sass'
import './skills.sass'

import Profile from "./Profile";
import Loading from "./Loading";
import gsap from "gsap/gsap-core";





class App extends React.Component {

  constructor(props){
    super(props)
    this.state={prev_path:null}
  }
update_prev_path(path){
this.setState({
  prev_path:path
})
}
  componentDidMount(){
    console.log('APP MOUNTED '+this.state.prev_path)
    gsap.registerPlugin( CSSPlugin )
     // 
        // geting canvas by Boujjou Achraf
        var c = document.getElementById("matrix");
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        //chinese characters - taken from the unicode charset
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#0099ff";//green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 35);

        // ///////////////////////



  }
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact  path='/' render={(props) => ( <Home {...props} prev_path={this.state.prev_path} />)}/>
        <Route path="/profile" render={(props) => ( <Profile {...props} prev_path={this.state.prev_path} />)} />
        <Route path="/skills" render={(props) => ( <Skills {...props} prev_path={this.state.prev_path} />)} />
        
        </Switch>
        <Loading/>
        <Tabs 
        update_prev_path={this.update_prev_path.bind(this)}
        />
        <canvas id="matrix"></canvas>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
