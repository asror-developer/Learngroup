import React from 'react'
import logo from '../../assets/logo.svg'
import { Dropdown, Space } from 'antd';
const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Ламинатные тубы
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Экструзионные тубы
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Другая упаковка
        </a>
      ),
    },
  ];
const Header = () => {
  return (
    <div className='container'>
      <div className='header-container'>
        <div className='header-box'>
            <img className='header-logo' src={logo} alt="" />
        </div>
        <ul className='header-list'>
            <li>
            <Space direction="vertical">
    <Space wrap>
    
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <a style={{color:'orange'}}  className='header-link' href="#">Продукция
            </a>
      </Dropdown>
     
    </Space>
    <Space wrap>
    
    
    
    </Space>
  </Space>
               </li>
            <li>
            <Space direction="vertical">
    <Space wrap>
    
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
       <a className='header-link' href="#">Сертификаты
            </a>
      </Dropdown>
     
    </Space>
    <Space wrap>
    
    
    
    </Space>
  </Space>
               </li>
            <li>       <Space direction="vertical">
    <Space wrap>
    
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
       <a className='header-link' href="#">Наша команда
            </a>
      </Dropdown>
     
    </Space>
    <Space wrap>
    
    
    
    </Space>
  </Space>
              
               </li>
            <li> <Space direction="vertical">
    <Space wrap>
    
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
      <a className='header-link' href="#">О нас
            </a>
      </Dropdown>
     
    </Space>
    <Space wrap>
    
    
    
    </Space>
  </Space>
              
               </li>
            <li>
            <Space direction="vertical">
    <Space wrap>
    
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
         <a className='header-link' href="#">Новости
            </a>
      </Dropdown>
     
    </Space>
    <Space wrap>
    
    
    
    </Space>
  </Space>
               </li>
            <li>       <Space direction="vertical">
    <Space wrap>
    
      <Dropdown
        menu={{
          items,
        }}
       
      >
  <a className='header-link' href="#">Вакансии
            </a>
      </Dropdown>
     
    </Space>
    <Space wrap>
    
    
    
    </Space>
  </Space>
               </li>
            <li>
            <Space direction="vertical">
    <Space wrap>
    
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <a className='header-link' href="#">Контакты
            </a>
      </Dropdown>
     
    </Space>
    <Space wrap>
    
    
    
    </Space>
  </Space>
               </li>
               <li>
                <div className='header-stel'>

                <span>uz</span>
                <p>Ru</p>
                </div>
               </li>
        </ul>
      </div>
    </div>
  )
}

export default Header




