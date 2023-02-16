import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

function DetailsItem() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [detailImg, setDetailImg] = useState(details.img1)
    console.log(detailImg);
    useEffect(() => {
        axios.get(`http://localhost:5555/api/products/find/${id}`)
            .then(res => {
                setDetails(res.data)
            })
    }, [id])
    return (
        <section className='detailPage'>
            <div className='detailpageMain'>

                <div className='detailImgs'>
                    <div id='imgmsItem'>
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={details.img1} alt='foto' />
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={details.img2} alt='foto' />
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={details.img3} alt='foto' />
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={details.img4} alt='foto' />
                    </div>
                    <img src={detailImg} alt='foto' />
                </div>

                <div className='detailsItem'>

                </div>

            </div>
        </section>
    )
}

export default DetailsItem