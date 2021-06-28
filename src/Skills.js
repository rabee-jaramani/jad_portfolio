import gsap from 'gsap/gsap-core'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import skills from './images/skills.svg'

export default class Skills extends React.Component {

    componentDidMount(){
        if(this.props.prev_path!==null){
            gsap.from('.skills-svg',{left:-1000,duration:2})
            gsap.from('.s1',{opacity:0,delay:2.2})
            gsap.from('.s2',{opacity:0,delay:2.4})
            gsap.from('.s3',{opacity:0,delay:2.6})
            gsap.from('.s4',{opacity:0,delay:2.8})
            gsap.from('.s5',{opacity:0,delay:3})
            gsap.from('.s6',{opacity:0,delay:3.2})
            gsap.from('.s7',{opacity:0,delay:3.4})
            gsap.from('.s8',{opacity:0,delay:3.6})
            gsap.from('.s9',{opacity:0,delay:3.8})
            gsap.from('.s10',{opacity:0,delay:4})
            gsap.from('.s11',{opacity:0,delay:4.2})
            gsap.from('.s12',{opacity:0,delay:4.4})
        }else{
            gsap.from('.skills-svg',{left:-1000,duration:2,delay:4})
            gsap.from('.s1',{opacity:0,delay:6.2})
            gsap.from('.s2',{opacity:0,delay:6.4})
            gsap.from('.s3',{opacity:0,delay:6.6})
            gsap.from('.s4',{opacity:0,delay:6.8})
            gsap.from('.s5',{opacity:0,delay:7})
            gsap.from('.s6',{opacity:0,delay:7.2})
            gsap.from('.s7',{opacity:0,delay:7.4})
            gsap.from('.s8',{opacity:0,delay:7.6})
            gsap.from('.s9',{opacity:0,delay:7.8})
            gsap.from('.s10',{opacity:0,delay:8})
            gsap.from('.s11',{opacity:0,delay:8.2})
            gsap.from('.s12',{opacity:0,delay:8.4})
        }

    }

    render(){
    return (
        <div className='section skills'>
            <img className='skills-svg' alt='skills' src={skills}/>
            <p className='s1'>PERSONNEL MENTORING</p>
            <ProgressBar className='s2' animated now={88} />

            <p className='s3'>CUSTOMER SATISFACTION</p>
            <ProgressBar className='s4' animated now={90} />

            <p className='s5'>TEAM MANAGEMENT</p>
            <ProgressBar className='s6' animated now={80} />

            <p className='s7'>PROJECT ORGANIZATION</p>
            <ProgressBar className='s8' animated now={70} />

            <p className='s9'>COMMUNICATIONS</p>
            <ProgressBar className='s10' animated now={75} />

            <p className='s11'>CREATIVE PROBLEM SOLVING</p>
            <ProgressBar className='s12' animated now={66} />
        </div>
    )
}
}