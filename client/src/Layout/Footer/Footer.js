import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Footer() {
  return (
    <footer>
      <div className='footertop'>
        <div className='ftopmain'>

          <Link to={'/get-in-touch'}>
            <div id='ftopitems'>
              <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/01/h1-icon-with-text-img1.png' alt='foto' />
              <h5 id='fitemH5'>Müşteri Servisi</h5>
            </div>
          </Link>

          <Link to={'/shop'}>
            <div id='ftopitems'>
              <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/01/h1-icon-with-text-img2.png' alt='foto' />
              <h5 id='fitemH5'>Çevrimiçi Çikolata Satın Alın</h5>
            </div>
          </Link>

          <Link to={'/contact-us'}>
            <div id='ftopitems'>
              <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/01/h1-icon-with-text-img3.png' alt='foto' />
              <h5 id='fitemH5'>Bizi Bul</h5>
            </div>
          </Link>

        </div>
      </div>

      <div className='footerbottom'>
        <ul className='fbottomMain'>
          <Link to={'/'}><img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/logo-mobile.png' alt='foto' /></Link>
          <li id='footerLi'>Kullanışlı Bağlantılar
            <ul>
              <li id='fdropdownLi'><Link to={'/about-us'}>Hakkımızda</Link></li>
              <li id='fdropdownLi'><Link to={'/our-history'}>Tarih</Link></li>
              <li id='fdropdownLi'><Link to={'/contact-us'}>Konumlarımız</Link></li>
              <li id='fdropdownLi'><Link to={'/our-menu'}>Günün Menüsü</Link></li>
              <li id='fdropdownLi'><Link to={'/blog'}>Blog</Link></li>
              <li id='fdropdownLi'><Link to={'/shop'}>Mağaza</Link></li>
            </ul>
          </li>

          <li id='footerLi'>Favori
            <ul>
              <li id='fdropdownLi'><Link to={'/'}>Orange Pralines</Link></li>
              <li id='fdropdownLi'><Link to={'/'}>Amaretti Oreo</Link></li>
              <li id='fdropdownLi'><Link to={'/'}>Choco Mousse</Link></li>
              <li id='fdropdownLi'><Link to={'/'}>Chocolate Truffles</Link></li>
              <li id='fdropdownLi'><Link to={'/'}>American Cake</Link></li>
            </ul>
          </li>

          <li id='footerLi'>Haber Bülteni
            <h6 id='footerH6'>Özel teklifler, ücretsiz hediyeler ve hayatta bir kez karşılaşabileceğiniz fırsatlardan yararlanmak için abone olun.</h6>
            <div id='ficons'>
              <Link target={'https://www.facebook.com/QodeInteractive/'} to={'https://www.facebook.com/QodeInteractive/'}><i className="fa-brands fa-facebook"></i></Link>
              <Link target={'https://twitter.com/QodeInteractive/'} to={'https://twitter.com/QodeInteractive/'}><i className="fa-brands fa-twitter"></i></Link>
              <Link target={'https://www.pinterest.com/qodeinteractive/'} to={'https://www.pinterest.com/qodeinteractive/'}><i className="fa-brands fa-pinterest"></i></Link>
              <Link target={'https://www.youtube.com/QodeInteractiveVideos'} to={'https://www.youtube.com/QodeInteractiveVideos'}><i className="fa-brands fa-youtube"></i></Link>
              <Link target={'https://www.instagram.com/qodeinteractive/'} to={'https://www.instagram.com/qodeinteractive/'}><i className="fa-brands fa-instagram"></i></Link>
            </div>
          </li>

        </ul>
      </div>

      <div className='footerbottomicons'>
        <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/footer-img-1.png' alt='footerimg' />
        <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/footer-img-2.png' alt='footerimg' />
        <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/footer-img-3.png' alt='footerimg' />
        <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/footer-img-4.png' alt='footerimg' />
        <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/footer-img-5.png' alt='footerimg' />
        <img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/footer-img-6.png' alt='footerimg' />
      </div>

      <p>© 2023 Swiss Delight , Tüm Hakları Saklıdır</p>
    </footer>
  )
}

export default Footer