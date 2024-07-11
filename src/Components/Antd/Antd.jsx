import React from 'react'
import logo from '../../assets/logo.svg'
import social from '../../assets/social1.svg'
const Antd = () => {
  return (
    <div className='container'>
      <div className='antd-container'>
        <div className='antd-box'>
        <img src={logo} alt="" />
        <img src={social} alt="" />
        </div>
        <hr className='antd-hr'/>
      </div>
    </div>
  )
}

export default Antd
