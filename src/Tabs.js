import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom'

export default class Tabs extends React.Component {
    link_clicked(e){
        if(document.querySelector('.'+e)){
            return ''
        }
        else{
                gsap.to(document.querySelector('.section'),{opacity:0})
                
                let list=document.querySelectorAll(".tab")
                list.forEach((e)=>e.classList.remove('clicked'))
                this.props.update_prev_path(e)
                if(e==='profile'){
                    document.querySelector('.tab1').classList.add('clicked')
                    let link=document.getElementById("profile");
                    setTimeout(()=>{link.click()},1500)
                }
                if(e==='home'){
                    document.querySelector('.tab0').classList.add('clicked')
                    let link=document.getElementById("home");
                    setTimeout(()=>{link.click()},500)
                }
                if(e==='skills'){
                    document.querySelector('.tab2').classList.add('clicked')
                    let link=document.getElementById("skills");
                    setTimeout(()=>{link.click()},500)
                }
                if(e==='experience'){
                    document.querySelector('.tab4').classList.add('clicked')
                    let link=document.getElementById("experience");
                    setTimeout(()=>{link.click()},500)
                }
                if(e==='projects'){
                    document.querySelector('.tab3').classList.add('clicked')
                    let link=document.getElementById("projects");
                    setTimeout(()=>{link.click()},500)
                }
                if(e==='about'){
                    document.querySelector('.tab5').classList.add('clicked')
                    let link=document.getElementById("about");
                    setTimeout(()=>{link.click()},500)
                }
            }
        }

componentDidMount(){
    if(document.body.clientWidth>700){
        var delay=4;
        gsap.from('.tab0',{marginTop:-1400,delay:delay})
        gsap.from('.tab1',{marginTop:-1400,delay:delay+0.2})
        gsap.from('.tab2',{marginTop:-1400,delay:delay+0.4})
        gsap.from('.tab3',{marginTop:-1400,delay:delay+0.6})
        gsap.from('.tab4',{marginTop:-1400,delay:delay+0.8})
        gsap.from('.tab5',{marginTop:-1400,delay:delay+1})
    }
    if(document.body.clientWidth<=700){
        gsap.from('.tab0',{right:-100,duration:2,delay:4})
        gsap.from('.tab1',{right:-100,duration:2,delay:4.2})
        gsap.from('.tab2',{right:-100,duration:2,delay:4.4})
        gsap.from('.tab3',{right:-100,duration:2,delay:4.6})
        gsap.from('.tab4',{right:-100,duration:2,delay:4.8})
        gsap.from('.tab5',{right:-100,duration:2,delay:5})


    }


}
    render(){
    return (
           
            <div className='tabs'>
                <h2 className='tab tab0' onClick={()=>this.link_clicked('home')}>HOME</h2>
                <h2 className='tab tab1' onClick={()=>this.link_clicked('profile')}>PROFILE</h2>
                <h2 className='tab tab2' onClick={()=>this.link_clicked('skills')}>SKILLS</h2>
                <h2 className='tab tab3' onClick={()=>this.link_clicked('projects')}>PROJECTS</h2>
                <h2 className='tab tab4' onClick={()=>this.link_clicked('experience')}>EXPERIENCE</h2>
                <h2 className='tab tab5' onClick={()=>this.link_clicked('about')}>ABOUT</h2>

                
                <Link id="home" to="/" className='hide-D'> </Link>
                <Link id="profile" to="/profile" className='hide-D'> </Link>
                <Link id="skills" to="/skills" className='hide-D'> </Link>
                <Link id="experience" to="/experience" className='hide-D'> </Link>
                <Link id="projects" to="/projects" className='hide-D'> </Link>
                <Link id="about" to="/about" className='hide-D'> </Link>


                
            </div>
    )
}
}