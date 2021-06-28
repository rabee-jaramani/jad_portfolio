import gsap from 'gsap/gsap-core'
import React from 'react'
import TypeIt from 'typeit-react'
import jad from './images/jad.jpg'
import jadCV from './CV/Jad Amer CV.pdf'
export default class Home extends React.Component {

    componentDidMount(){
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
        gsap.from('.home',{display:'none',delay:4})
        gsap.from('.jad-img',{transform:'rotateX(90deg)',delay:5})
        gsap.to('.jad-img',{filter:'brightness(1.5)',delay:5})

   
        gsap.from('.hello-my-name',{marginTop:'-1000px',delay:5.4})
        gsap.from('.name',{marginTop:'-1000px',delay:5.8})
        gsap.from('.and-iam',{marginTop:'-1000px',delay:6.2})
        gsap.from('.type',{display:'none', delay:6.6})
        }
    render(){

    return (
        <div className='section home'>
            
            <img className='jad-img' alt='jad' src={jad}/>
            <h2 className='hello-my-name'>Hello, my name is</h2>
            <h1 className='name'> JAD AMER</h1>
            <h3 className='and-iam'>And I am a</h3>
            <TypeIt className='type'
                options={{
                    speed: 120,
                    loop: true,
                    waitUntilVisible: true,
                    }}
                    getBeforeInit={instance => {
                        instance
                        .type("MOBILE QUALITY ASSURANCE ENGINEER")
                        .pause(1000)
                        .delete(33)
                        .type("SOFTWARE ENGINEER", { delay: 400 })
                        .pause(1000)
                        .delete(17)
                        return instance;
                    }}
            />
            <div className='btn-div'>
                <div className='neon-btn'></div>
                <a href={jadCV} download="Jad Amer CV.pdf" target='_blank' rel="noreferrer">CV</a>
            </div>
            
            
               
        </div>
    )
}
}