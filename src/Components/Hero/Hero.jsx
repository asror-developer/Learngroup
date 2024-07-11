import React from 'react'
import social from '../../assets/social.svg'
const Hero = () => {
  return (
    <div>
         <div className='stel'>
      <div className='container'>
       
        <div className='hero-container'>
            <div className='hero-box'>
            <h1 className='hero-title'>LEANGROUP - тубы и этикетки</h1>
            <p className='hero-text'>Ламинатные тубы</p>
            <p className='hero-text1'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
            <button className='hero-button'>Каталог</button>
            </div>
            {/* <div className='hero-img'>
                <img src={social} alt="" />
            </div> */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
