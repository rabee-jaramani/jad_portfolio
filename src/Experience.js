import React from 'react'

export default class Experience extends React.Component {



    componentDidMount(){

    }
    render(){
    return (
        <div className='experience section'>
            <div className='flex-exp'>

                <div className='samsung'>
                    <h4 className='companey-name'>SAMSUNG ELECTRONICS GULF</h4>
                    <h5 className='date'>Dubai Jan 2018 - Present</h5>
                    <p className='content'>
                        <h5 className='content-title'>Field Testing Engineer (Mobile Quality)</h5>
                        As Field Test Engineer, I am managing the MR (Maintenance Releases) soware of all Samsung mobile product in Middle East and South Africa.<br/>
                        Role and Responsibilies: <br/>
                        • Reviewing the changes of all MR in order to verify the new soware/hardware changes. <br/>
                        • Cover and test the new applied services, technology and telecommunicaons network technologies (such Volte, VoWiFi and 5G) for GCC countries’ operators. <br/>
                        • Test the new Samsung ﬂagship models before unpacking. <br/>
                        • Managing the User Trial program of UAE by guiding and training the parcipants (Samsung employees) on new products, and technology used in mobile phones. <br/>
                        • Verifying local market requirements including language integrity, local operator and government regulaons. <br/>
                        • Review Market’s issues and verify the soluons.<br/>
                    </p>
                </div>

                <div className='dunkin'>
                     <h4 className='companey-name'>EET GROUP (DUNKIN DONUTS)</h4>
                    <h5 className='date'>Dubai Oct 2015 - Dec 2017</h5>
                    <p className='content'>
                        <h5 className='content-title'>Senior System\Web Engineer</h5>
                        • Provide technical support of markeng and analysis team. <br/>
                        • Planning, design, documentaon, and implementaon of various informaon systems
                         to include servers, network equipment, and soware applicaons. <br/>
                        • Manage web hosng and social networks plaorms. <br/>
                        • Troubleshoong E-Commerce plaorm (Woocommerce, Magento). <br/>
                        • Create, develop and manage websites.<br/>
 
                    </p>
                </div>

                <div className='iguana'>
                    <h4 className='companey-name'>IGUANA ADVERTISEMENT</h4>
                    <h5 className='date'>Dubai Jul 2014 - Sep 2015</h5>
                    <p className='content'>
                        <h5 className='content-title'>Social Media Markeng Manager</h5>
                        • Provide an expert support to the clients. <br/>
                        • Assets with managers and designers to deliver the company’s image to customers. <br/>
                        • SEO (search engine opmizaon) and generaon of inbound traﬃc. <br/>
                        • Manage website hosng (locally\Cloud). <br/>
                        • Content management. <br/>
                        • Manage social media pages.<br/>
                    </p>
                </div>

            </div>
        </div>
    )
}
}