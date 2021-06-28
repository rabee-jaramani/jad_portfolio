import gsap from 'gsap/gsap-core'
import React from 'react'
import jad2 from './images/jad2.jpg'

export default class Profile extends React.Component {
    componentDidMount(){
        if(this.props.prev_path!==null){
        gsap.from('.fa-address-card',{opacity:0,delay:1})
        gsap.from('.content',{opacity:0,delay:1.3})
        gsap.from('.fa-tasks',{opacity:0,delay:1.6})
        gsap.from('.fa-sim-card',{opacity:0,delay:1.9})
        gsap.from('.fa-handshake',{opacity:0,delay:2.2})
        gsap.from('.fa-life-ring',{opacity:0,delay:2.5})
        gsap.from('.jad2',{opacity:0,delay:2.8})

        }else
        {
            gsap.from('.fa-address-card',{opacity:0,delay:5})
            gsap.from('.content',{opacity:0,delay:5.3})
            gsap.from('.fa-tasks',{opacity:0,delay:5.6})
            gsap.from('.fa-sim-card',{opacity:0,delay:5.9})
            gsap.from('.fa-handshake',{opacity:0,delay:6.2})
            gsap.from('.fa-life-ring',{opacity:0,delay:6.5})
            gsap.from('.jad2',{opacity:0,delay:6.8})

        }

    }

    render(){
    return (
        <div className='section profile'>
                <i className="far fa-address-card"></i>
                <p className='content'>Motevated Mobile Field Test Engineer with 5 years
                 of various technologies experience. Eﬀective communicator to all stakeholders
                  with proven expertise in B2B/B2C relations,
                 corporate-level support, troubleshooting, and quality assurance.</p>
                 <i className="fas fa-tasks"></i>
                 <i className="fas fa-sim-card"></i>
                 <i className="far fa-handshake"></i>
                 <i className="fas fa-life-ring"></i>
                 <img className='jad2' alt='jad 2' src={jad2}/>
        </div>
    )
}
}