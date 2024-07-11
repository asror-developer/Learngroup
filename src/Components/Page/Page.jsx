import React from 'react'
import page1 from '../../assets/page1.svg'
import page2 from '../../assets/page2.svg'
import page3 from '../../assets/page3.svg'
import page4 from '../../assets/page4.svg'
import page5 from '../../assets/page5.svg'
const Page = () => {
  return (
    <div className='container'>
       <div className='page-container'>
        <div className='page-menu'>
            <p className='page-menu'>Наша <p className='page1'>команда</p></p>
        </div>
        <ul className='page-list'>
            <li className='page-item'>
                <img className='page-img' src={page1} alt="" />
                <h4 className='page-title'>Мисько Екатерина</h4>
                <p className='page-text'>Заместитель директора по продажам</p>
                <p className='page-name'>+375 (17) 270-53-77 (317)
+375 00 000 00 00</p>
               
            </li>
            <li className='page-item'>
                <img className='page-img' src={page2} alt="" />
                <h4 className='page-title'>Войнич Дарья</h4>
                <p className='page-text'>Начальник отдела сопровождения</p>
                <p className='page-name'>+375 (17) 270-53-77 (115)
 +375 29 112-73-48</p>
                <a className='page-href' href="">k.melnichenko@leangroup.by</a>
            </li>
            <li className='page-item'>
                <img className='page-img' src={page3} alt="" />
                <h4 className='page-title'>Дмитроченко Дмитрий</h4>
                <p className='page-text'>Начальник отдела допечатной подготовки</p>
                <p className='page-name'>+375 (17) 270-53-77 (317)
+375 00 000 00 00</p>
                <a className='page-href' href="">dmitrochenko@leangroup.by</a>
            </li>
            <li className='page-item'>
                <img className='page-img' src={page4} alt="" />
                <h4 className='page-title'>Антух Евгений</h4>
                <p className='page-text'>Начальник отдела снабжения</p>
                <p className='page-name'>+375 (17) 270-53-77 (317)
+375 00 000 00 00</p>
                <a className='page-href' href="">j.antuh@leangroup.by</a>
            </li>
            <li className='page-item'>
                <img className='page-img' src={page5} alt="" />
                <h4 className='page-title'>Мисник Елена</h4>
                <p className='page-text'>Специалист по работе с клиентами</p>
                <p className='page-name'>+375 (17) 270-53-77 (317)
+375 00 000 00 00</p>
                <a className='page-href' href="">e.misnik@leangroup.by</a>
            </li>
        </ul>
        <div className='btn'>
        <button className='page-button'>Наша команда</button>
        </div>      
        </div>
    </div>
  )
}

export default Page
