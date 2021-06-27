import gsap from 'gsap/gsap-core'
import React from 'react'
import TypeIt from 'typeit-react'
export default class Home extends React.Component {

    componentDidMount(){
        gsap.from('.home',{display:'none',delay:4})
        
    // new TypeIt("#type1", {
    //     speed: 120,
    //     loop: true,
    //     waitUntilVisible: true
    // })
    //     .type("MOBILE QUALITY ASSURANCE ENGINEER", { delay: 400 })
    //     .pause(500)
    //     .delete(33)
    //     .type("SOFTWARE ENGINEER", { delay: 400 })
    //     .pause(500)
    //     .delete(17)
    //     .go();
        }
    render(){

    return (
        <div className='section home'>
                <h2 className='sec-title'>Hello, my name is</h2>
                <h1> JAD AMER</h1>
                    <TypeIt className='type'
                    options={{
                        speed: 120,
                        loop: true,
                        waitUntilVisible: true,
                        strings: ["And I am a "]
                      }}
                    getBeforeInit={instance => {
                            instance
                            .type("MOBILE QUALITY ASSURANCE ENGINEER")
                            .pause(500)
                            .delete(33)
                            .type("SOFTWARE ENGINEER", { delay: 400 })
                            .pause(500)
                            .delete(17)
                            return instance;
                        }}
                        />
               
        </div>
    )
}
}