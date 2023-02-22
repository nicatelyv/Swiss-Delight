import React from 'react'
import './style.scss'

function HistorySection() {
    return (
        <section className='HistorySection'>
            <span className='line'></span>
            <div className='HistoryTextsMainDiv'>
                <img src='https://swissdelight-qodeinteractive-com.translate.goog/wp-content/uploads/2021/02/history-img-1.png?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=wapp' alt='foto' />
                <div className='HistoryTextsDiv'>
                    <h4 id='HistoryTextH4'>1930</h4>
                    <div id='HistoryTextDiv'>
                        <h5 id='HistoryTextH5'>ÇİKOLATA TARİHİ</h5>
                        <h3 id='HistoryTextH3'>ERKEN BAŞLANGIÇ</h3>
                        <p id='HistoryTextP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco</p>
                    </div>
                </div>
            </div>

            <div className='HistoryTextsMainDiv'>
                <div className='HistoryTextsDiv'>
                    <div id='HistoryTextDiv'>
                        <h5 id='HistoryTextH5'>SÜREÇ</h5>
                        <h3 id='HistoryTextH3'>FABRİKA KURULDU</h3>
                        <p id='HistoryTextP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco</p>
                    </div>
                    <h4 id='HistoryTextH4'>1960</h4>
                </div>
                <img src='https://swissdelight-qodeinteractive-com.translate.goog/wp-content/uploads/2021/02/history-img-2.png?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=wapp' alt='foto' />
            </div>

            <div className='HistoryTextsMainDiv'>
                <img src='https://swissdelight-qodeinteractive-com.translate.goog/wp-content/uploads/2021/03/history-img-3.jpg?_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=wapp' alt='foto' />
                <div className='HistoryTextsDiv'>
                    <h4 id='HistoryTextH4'>2021</h4>
                    <div id='HistoryTextDiv'>
                        <h5 id='HistoryTextH5'>ORİJİNAL LEZZET</h5>
                        <h3 id='HistoryTextH3'>BUGÜN DÜKKANLAR</h3>
                        <p id='HistoryTextP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistorySection