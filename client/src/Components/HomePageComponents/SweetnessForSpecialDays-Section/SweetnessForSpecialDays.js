import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function SweetnessForSpecialDays() {
    return (
        <section className='specialDays'>
            <h6 id='sDaysH6'>ÇİKOLATA AŞKI</h6>
            <h2 id='sDaysH2'>ÖZEL GÜNLERE TATLILIK</h2>
            <div className='sDaysItems'>
                <div className='sDaysItem'>
                    <Link to={'/our-menu'}><img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/h1-icon1.png' alt='foto' /></Link>
                    <Link to={'/our-menu'}><h3 id='sDaysH3'>Şekerlemeler</h3></Link>
                    <p id='sDaysP'>"Kendi bitiyor, tadı kalıyor" sloganıyla tüketicilere seslenen Swiss Delight üstelik sadece 99 Kuruş özel fiyatı ile çikolata sevenlere buluşuyor.</p>
                </div>

                <div className='sDaysItem'>
                    <Link to={'/our-menu'}><img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/01/h1-icon-img2.png' alt='foto' /></Link>
                    <Link to={'/our-menu'}><h3 id='sDaysH3'>Kutlamalar</h3></Link>
                    <p id='sDaysP'>Sevdiklerinizi Swiss Delight’ın büyüleyici dünyasından seçeceğiniz özel çikolatalar ile sevindirin.</p>
                </div>

                <div className='sDaysItem'>
                    <Link to={'/our-menu'}><img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/h1-icon3.png' alt='foto' /></Link>
                    <Link to={'/our-menu'}><h3 id='sDaysH3'>%100 Çikolata</h3></Link>
                    <p id='sDaysP'>Geleneksel olmaktan vazgeçmedik çünkü, çikolatada "lezzet" kakao çekirdeği ile kakao yağının nasıl buluştuğudur.Swiss Delight’ın sihri burada yatar.</p>
                </div>
            </div>
        </section>
    )
}

export default SweetnessForSpecialDays