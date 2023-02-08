import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function HomeHeader() {
  return (
    <header>
      <img id='heeaderphoto' src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/slide-02.png' alt='headerphoto'/>
      <div className='w3-container w3-center w3-animate-bottom'>
        <p id='headerP'>Sevgi ile yapıldı...</p>
        <h1 id='headerH1'>HAYATINIZI DAHA TATLI HALE GETİRİN</h1>
        <h3 id='headerH3'>Çikolatalarımız fabrika makinaları ile değil, çikolatanın eritilip mermer üzerinde soğuması sürecini kapsayan geleneksel temperleme yöntemi ile üretilmektedir</h3>
        <NavLink id='headerlink' to={'/about-us'}>READ MORE</NavLink>
      </div>
    </header>
  )
}

export default HomeHeader