import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SliderImages from '../../../Assets/SliderImages'
import './style.scss'

function SlicerWorkSelection() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return (
        <section className='OurChefSlider'>
            <h5 id='OurChefSliderH5'>EN İYİSİ</h5>
            <h2 id='OurChefSliderH2'>İŞ SEÇİMİ</h2>
            <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className='ourChefCarousel' >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 3000 + width, left: - 3200 }}
                    className='inner-ourChefCarousel'>
                    {SliderImages.map(image => {
                        return (
                            <motion.div key={image} className='itemCarousel'>
                                <img src={image.imgUrl} alt='foto' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section >
    )
}

export default SlicerWorkSelection