import React from 'react'
import hexa from './assets/Icon.png'
import tech from './assets/Icon2.png'
import estate1 from './assets/Icon3.png'
import estate2 from './assets/Icon4.png'
import estate3 from './assets/Icon5.png'

const Home = () => {
  return (
    <>
    <div className='home-section'>
        <div className='home-text'>
            <p className='investor'> INVESTORS </p>
            <h1 className='home-title'> Invest in Medical <br/>
                equipment for African <br/> 
                Healthcare and get ROI 
            </h1>
            <p className='home-para'>We provide African healthcare facilities with <br/> 
                cutting-edge medical equipment to provide <br/>
                the best quality of care to their patients - with <br/>
                financing, maintenance and support.
            </p>


            <button className='btn-one'><span> Get Started </span></button>
            <button className='btn-two'><span> Read More </span></button> 
        </div>
    </div>
    
    <div className='about-us_section'>
        <div className='about-us_left'>
            <img src="./assets/Theatre.png" alt="Operation room" className='theatre_img' />
        </div>
        <div className='about-us_right'>
            <div className='arrow'>
                <img src="./assets/Arrow.png" alt="arrow" />
                <p className='about-us_arrow'> Know More </p>
            </div>
            <h1 className='about-us_title'>
                Changing the <br/>
                View of Medical <br/>
                Equipment Financing.</h1>
            <p className='about-us_para'>
                We provide African healthcare facilities with cutting- <br/>
                edge medical equipment to provide the best quality of <br/>
                care to their patients - with financing, maintenance and <br/>
                support.
            </p>
        </div>
    </div>

    <div className='explore_section'>
        <div className='explore_up'>
            <div className='explore_top_left'>
                <img src="./assets/consultation.png" alt="Consultation" className='consultation_img'/>
            </div>
            <div className='explore_top_right'>
                <h1 className='explore_title'> Explore our Product </h1>
                <p className='explore_para'> 
                    Nunc convallis semper justo quis tempor. Praesent molestie, lorem <br/>
                    sed imperdiet tempor, libero urna semper urna, facilisis vulputate <br/>
                    velit arcu vitae mi. Donec ac nisi ex. 
                </p>
            </div>
        </div>
        <div className='explore_down'>
            <div className='explore_container'>
                <img src= {hexa} alt="" className='explore_icon'/>
                <h5 className='container_title'>CE Support </h5>
                <p className='container_para'>
                    Donec mi lorem, consequat a quam <br/>
                    nec, pellentesque pulvinar sem. Morbi <br/>
                    lacus magna.
                </p>
                <div className='explore_arrow '>
                    <p className='explore_arrow_para'> Know More </p>
                    <img src="./assets/ArrowRight.png" alt="arrow" />
                </div>
            </div>
            <div className='explore_container shadow'>
                <img src={tech} alt="" className='explore_icon'/>
                <h5 className='container_title'>CE Invest </h5>
                <p className='container_para'>
                    Donec mi lorem, consequat a quam <br/>
                    nec, pellentesque pulvinar sem. Morbi <br/>
                    lacus magna.
                </p>
                <div className='explore_arrow'>
                    <p className='explore_arrow_para bottom'> Know More </p>
                    <img src="./assets/ArrowRight.png" alt="arrow" className='bottom' />
                </div>
            </div>
            <div className='explore_container'>
                <img src={estate1} alt="" className='explore_icon'/>
                <h5 className='container_title'>CE ConnectEHR </h5>
                 <p className='container_para'>
                    Donec mi lorem, consequat a quam <br/>
                    nec, pellentesque pulvinar sem. Morbi <br/>
                    lacus magna.
                </p>
                <div className='explore_arrow'>
                    <p className='explore_arrow_para'> Know More </p>
                    <img src="./assets/ArrowRight.png" alt="arrow" />
                </div>
            </div>
            <div className='explore_container'>
                <img src={estate2} alt="" className='explore_icon'/>
                <h5 className='container_title'>CE Marketplace </h5>
                 <p className='container_para'>
                    Donec mi lorem, consequat a quam <br/>
                    nec, pellentesque pulvinar sem. Morbi <br/>
                    lacus magna.
                </p>
                <div className='explore_arrow'>
                    <p className='explore_arrow_para'> Know More </p>
                    <img src="./assets/ArrowRight.png" alt="arrow" />
                </div>
            </div>
            <div className='explore_container'>
                <img src={estate3} alt="" className='explore_icon'/>
                <h5 className='container_title'>CE Flow </h5>
                 <p className='container_para'>
                    Donec mi lorem, consequat a quam <br/>
                    nec, pellentesque pulvinar sem. Morbi <br/>
                    lacus magna.
                </p>
                <div className='explore_arrow'>
                    <p className='explore_arrow_para'> Know More </p>
                    <img src="./assets/ArrowRight.png" alt="arrow" />
                </div>
            </div>
        </div>
    </div>

    <div className='subscribe'>
        <div className='subscribe_container'>
            <h3 className='subscribe_title'>Enter your e-mail address and get started <br/> for free</h3>
            <p className='subscribe_para'>Stay up to date with the most relevant information, our new <br/> collections, news and special offers!</p>

            <div className='input_field'>
                <form action="">
                    <label htmlFor="email"></label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Your e-mail address'
                    style={{
                        padding: '10px',
                        margin: '40px 16px 0 0',
                        borderRadius: '8px',
                        border: 'none',
                        width: '270px',
                        height: '44px',
                        boxSizing: 'border-box',
                      }}
                    />
                </form>

                <button className='btn-one sub'><span className='text'> Subscribe </span></button>
                
            </div>

        </div>

    </div>

    <div className='partners'>
        <div className='d-flex align-items-center gap-15'>
            <img src='./assets/Hexa Logo.png' alt="Partners" />
        </div>     
        <div>
            <img src='./assets/Tech Logo.png' alt="Partners" />
        </div>
        <div>
            <img src='./assets/Real Estate Logo.png' alt="Partners" />
        </div>
        <div>
            <img src='./assets/Real Estate Logo2.png' alt="Partners" />
        </div>
        <div>
            <img src='./assets/Real Estate Logo3.png' alt="Partners" />
        </div>
    </div>


    </>
  )
}

export default Home