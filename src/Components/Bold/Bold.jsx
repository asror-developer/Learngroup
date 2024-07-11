import React from 'react'
import create1 from '../../assets/create1.svg'
import create2 from '../../assets/create2.svg'
import create3 from '../../assets/create3.svg'
const Bold = () => {
  return (
    <div className='container'>
      <div className='bold-container'>
        <div className='boold-box'>
            <p className='bold-name'></p>
        </div>
        <ul className='bold-list'>
            <li className='bold-item'>
                <img src={create1} alt="" />
                <h5 className='bold-title'>28.01.2022</h5>
                <p className='bold-text'>"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </li>
            <li className='bold-item'>
                <img src={create2} alt="" />
                <h5 className='bold-title'>21.01.2022</h5>
                <p className='bold-text'>"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </li>
            <li className='bold-item'>
                <img src={create3} alt="" />
                <h5 className='bold-title'>16.12.2021</h5>
                <p className='bold-text'>Туба, как вид упаковки</p>
            </li>
        </ul>
        <div className='btn'>
        <button className='page-button'>Все новости</button>
        </div>
      </div>
    </div>
  )
}

export default Bold
