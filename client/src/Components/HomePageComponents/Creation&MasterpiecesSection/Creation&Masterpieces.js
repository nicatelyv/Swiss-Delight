import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function CreationMasterpiecesSection() {
    return (
        <section className='creation-masterpieces'>
            <div className='crtn-mstrpcsItem'>
                <div className='creationProductTexts'>
                    <h6 id='creationH6'>GANAJ</h6>
                    <h3 id='creationH3'>YARATILIŞ</h3>
                    <h5 id='creationH5'>Önceleri pastane ağırlıklı hizmet veren Swiss Delight Eylül 2021 yılında el yapımı çikolata üretimine de başlamıştır. İkinci şubesini İstinyepark AVM, üçüncü şubesini Akmerkez AVM ve dördüncü şubesini Vadistanbul AVM'de açtı. Üçüncü yemek kitabı ‘Swiss’ten Özel Tatlar’ 2022 yılında piyasaya çıktı. 2022 Aralık Time Out en iyi pastane ödülü aldı.</h5>
                    <NavLink id='crt-masterpcs-button' to={'/our-chef'}>Devamını oku</NavLink>
                </div>
                <div className='creationImages'>
                    <img id='crtimg1' src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/02/h2-img-1-bg.png' alt='foto' />
                    <img id='crtimg2' src='https://swissdelight-qodeinteractive-com.translate.goog/wp-content/uploads/2021/02/h2-img-1.png?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=wapp' alt='foto' />
                </div>
                <div className='creationProductTexts'>
                    <h6 id='creationH6'>ÇİKOLATA</h6>
                    <h3 id='creationH3'>ANA MALZEMELER</h3>
                    <h5 id='creationH5'>Bugün tüketilmekte olan çikolatanın büyük bir kısmı kakao kitlesi, kakao yağı veya diğer yağlar ve şekerin birleşiminden oluşan tatlı çikolata biçimindedir. Sütlü çikolata, ek olarak süt tozu veya yoğunlaştırılmış süt içeren tatlı bir çikolatadır. Beyaz çikolata ise kakao yağı, şeker ve süt içerir, ama kakao kitlesi içermez.</h5>
                    <NavLink id='crt-masterpcs-button' to={'/who-we-are'}>Devamını oku</NavLink>
                </div>

            </div>

            <div className='creationText'>
                <h6 id='creationH6'>ÇİKOLATA AROMASI</h6>
                <h2 id='creationH2'>KENDİ CENNET DİLİMİNİ AL</h2>
            </div>
        </section>
    )
}

export default CreationMasterpiecesSection