import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom'

export default class Tabs extends React.Component {
    link_clicked(e){
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
    }

componentDidMount(){
    if(window.innerWidth>700){
        var delay=4;
        gsap.from('.tab0',{marginTop:-1000,delay:delay})
        gsap.from('.tab1',{marginTop:-1000,delay:delay+0.2})
        gsap.from('.tab2',{marginTop:-1000,delay:delay+0.4})
        gsap.from('.tab3',{marginTop:-1000,delay:delay+0.6})
        gsap.from('.tab4',{marginTop:-1000,delay:delay+0.8})
        gsap.from('.tab5',{marginTop:-1000,delay:delay+1})
    }
    if(window.innerWidth<=700){
        gsap.from('.tab0',{top:-1000,duration:2,delay:4})
        gsap.from('.tab1',{top:-1000,duration:2,delay:4.2})
        gsap.from('.tab2',{top:-1000,duration:2,delay:4.4})
        gsap.from('.tab3',{top:-1000,duration:2,delay:4.6})
        gsap.from('.tab4',{top:-1000,duration:2,delay:4.8})
        gsap.from('.tab5',{top:-1000,duration:2,delay:5})


    }


}
    render(){
    return (
           
            <div className='tabs'>
                <h2 className='tab tab0' onClick={()=>this.link_clicked('home')}>HOME</h2>
                <h2 className='tab tab1' onClick={()=>this.link_clicked('profile')}>PROFILE</h2>
                <h2 className='tab tab2'>SKILLS</h2>
                <h2 className='tab tab3'>PROJECTS</h2>
                <h2 className='tab tab4'>CONTACT</h2>
                <h2 className='tab tab5'>ABOUT</h2>
                
                <Link id="home" to="/" className='hide-D'> </Link>
                <Link id="profile" to="/profile" className='hide-D'> </Link>
                
            </div>
    )
}
}