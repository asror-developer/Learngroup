import React from 'react'
import video from '../../assets/video.svg'
const Contact = () => {
    return (
        <div>
            <div className='container'>
                <div className='contact-container'>
                  
                        <div className='contact-box'>
                            <p className='contact-box'>О компании  <p className='contact-rang'>LEANGROUP</p></p>
                        </div>
                        <div className='contact-wrap'>
                        <div className='contact-img'>
                        <img src={video} alt="" />
                        </div>
                        <div className='contact-stel'>
                            <p className='contact-name'>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.

                                Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.

                                С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact