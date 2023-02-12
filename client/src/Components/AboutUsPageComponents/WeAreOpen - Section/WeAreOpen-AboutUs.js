import React from 'react'
import './style.scss'

function WeAreOpenAboutUs() {
    return (
        <section className='weareopenSection'>
            <div className='waopenMain'>
                <img src='https://swissdelight-qodeinteractive-com.translate.goog/wp-content/uploads/2021/02/about-us-img-9.jpg?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=wapp' alt='foto' />
                <div className='waopentexts'>
                    <h6 id='waopenH6'>ÇİKOLATA ZAMANI</h6>
                    <h3 id='waopenH3'>AÇIĞIZ</h3>
                    <div className='waopenWekkly'>
                        <h4 id='waopenH4'>Pazartesi - Cuma</h4>
                        <p id='waopenP'>10:00 - 18:00</p>
                    </div>
                    <div className='waopenWekkly'>
                        <h4 id='waopenH4'>Cumartesi</h4>
                        <p id='waopenP'>11:00 - 15:00</p>
                    </div>
                    <div className='waopenWekkly' style={{ borderBottom: "none" }}>
                        <h4 id='waopenH4'>Pazar</h4>
                        <p id='waopenP'>11:00 - 13:00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeAreOpenAboutUs