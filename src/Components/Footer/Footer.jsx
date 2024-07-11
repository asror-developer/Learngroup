import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer-container'>
        <div className='footer-box'>
            <ul className='footer-list'>
                <li className='footer-item'>
                    <span className='footer-title'>Продукция</span>
                    <p className='footer-text'>Ламинатные тубы</p>
                    <p className='footer-text'>Экструзионные тубы</p>
                    <p className='footer-text'>Другая упаковка</p>
                </li>
                <li className='footer-item'>
                    <span className='footer-title'>Компания</span>
                    <p className='footer-text'>О нас</p>
                    <p className='footer-text'>Наша команда</p>
                    <p className='footer-text'>Сертификаты</p>
                </li>
                <li className='footer-item'>
                    <span className='footer-title'>Разделы</span>
                    <p className='footer-text'>Контакты</p>
                    <p className='footer-text'>Новости</p>
                    <p className='footer-text'>Вакансии</p>
                </li>
                <div>
                <li className='footer-menu1'>
                    <span className='footer-name'>Беларусь</span>
                    <p className='footer-text1'>+375 (17) 270 53 77</p>
                    <p className='footer-text2'>+375 (17) 270 53 78</p>
                </li>
                <li className='footer-menu2'>
                    <span className='footer-name'>Москва</span>
                    <p className='footer-text1'>+7 (495) 280 73 44</p>
                    <p className='footer-text2'>+7 (495) 280 73 44</p>
                </li>
                </div>
                <div>
                <li className='footer-menu3'>
                    <span className='footer-name'>Европа</span>
                    <p className='footer-text2'>+48 73 1111 044</p>
                </li>
                <li className='footer-menu4'>
                    <span className='footer-name'>Екатеринбург</span>
                    <p className='footer-text2'>+7 (343) 346 82 06</p>
                </li>
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
