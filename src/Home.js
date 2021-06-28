import gsap from 'gsap/gsap-core'
import React from 'react'
import TypeIt from 'typeit-react'
import jad from './images/jad.jpg'
import jadCV from './CV/Jad Amer CV.pdf'
export default class Home extends React.Component {

    componentDidMount(){
        console.log('PREVVVVVVVV '+this.props.prev_path)
            
        if(this.props.prev_path!==null){
        gsap.from('.jad-img',{transform:'rotateX(90deg)',delay:1})
        gsap.to('.jad-img',{filter:'brightness(1.5)',delay:1})
        gsap.from('.hello-my-name',{marginTop:'-1000px',delay:1.4})
        gsap.from('.name',{marginTop:'-1000px',delay:1.8})
        gsap.from('.and-iam',{marginTop:'-1000px',delay:2.2})
        gsap.from('.type',{display:'none', delay:2.6})
        }
        else{
            gsap.from('.jad-img',{transform:'rotateX(90deg)',delay:5})
            gsap.to('.jad-img',{filter:'brightness(1.5)',delay:5.2})
            gsap.from('.hello-my-name',{marginTop:'-1000px',delay:5.4})
            gsap.from('.name',{marginTop:'-1000px',delay:5.8})
            gsap.from('.and-iam',{marginTop:'-1000px',delay:6.2})
            gsap.from('.type',{display:'none', delay:6.6})
        }
        }
        componentWillUnmount(){
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