import React from 'react'
import name from '../../assets/name.svg'
import rasm from '../../assets/icon.svg'
const Card = () => {
    return (
      
            <div className='container'>
                <div className='card-container'>
                    <div className='card-box'>
                        <span className='card-item'>Получить подробную  <span className='cards'>информацию</span></span>
                        <p className='card-text'>Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
                        <div className='card-list'>
                            <div className='card-name'>
                                <img src={name} alt="" />
                                <input className='card-input' type="text" required placeholder='Ваше имя' />
                            </div>
                            <div className='card-name1'>
                                <img src={rasm} alt="" />
                                <input className='card-input' type="text" required placeholder='+375 (29) 0000000' />
                            </div>
                            
                        </div>
                        <input className='card-stel' type="text" required placeholder='comment' /> 
</div>                   <div className='card-btn'>
<button className='card-button'>Получить информацию</button>
</div>
                    
                    </div>
                    </div>
                
                
    )
}
            
export default Card
