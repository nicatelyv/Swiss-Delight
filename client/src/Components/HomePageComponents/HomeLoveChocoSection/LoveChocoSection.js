import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function LoveChocoSection() {
  return (
    <section className='lovechocoSection'>
      <div className='loveChocoMain'>
        <h5 id='lchocoH5'>ÇİKOLATAYI SEVİYORUM</h5>
        <h3 id='lchocoH3'>HER LOKMADA AŞKA DAHA YAKIN</h3>
        <Link to={'/our-history'}><button id='lchocobtn'>Devamını oku <i className="fa-solid fa-arrow-right-long"></i></button></Link>
      </div>
    </section>
  )
}

export default LoveChocoSection
