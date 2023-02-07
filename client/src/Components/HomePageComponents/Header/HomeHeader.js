import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function HomeHeader() {
  return (
    <header>
      <div className='w3-container w3-center w3-animate-bottom'>
        <p id='headerP'>Sevgi ile yapıldı...</p>
        <h1 id='headerH1'>HAYATINIZI DAHA TATLI HALE GETİRMEK</h1>
        <h3 id='headerH3'>Çikolatalarımız fabrika makinaları ile değil, çikolatanın eritilip mermer üzerinde soğuması sürecini kapsayan geleneksel temperleme yöntemi ile üretilmektedir</h3>
        <NavLink to={'/'}>
          <div id='headerbutton'>
            <h4>DEVAMINI OKU</h4>
            <i class="fa-solid fa-arrow-right-long"></i>
          </div>
        </NavLink>
      </div>
    </header>
  )
}

export default HomeHeader