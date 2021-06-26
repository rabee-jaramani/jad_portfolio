import gsap from 'gsap/gsap-core'
import React from 'react'
import computer from './images/laptop.png'
import mobile from './images/mobile.png'
export default class Loading extends React.Component{

componentDidMount(){
    var loading_t = gsap.timeline();
    loading_t.to(".zeros-ones",{left:350,duration:2})
    .to(".zeros-ones",{left:-200,duration:2})
    // .to(".loading",{zoom:20,duration:1})
    .to(".loading",{display:'none'})

}
    render(){
    return (
        <div className='loading'>
            <div className='computer'><img alt='computer-img' className='computer-img' src={computer}/></div>
            <div className='zeros-ones'>010101010110101</div>
            <div className='mobile'><img alt='mobile-img' className='mobile-img' src={mobile}/></div>
        </div>
    )
}
}