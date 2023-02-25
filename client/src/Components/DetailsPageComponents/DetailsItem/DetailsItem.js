import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

function DetailsItem() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [detailImg, setDetailImg] = useState(details.img1)
    const [counter, setCounter] = useState(1)

    async function getData() {
        await axios.get(`http://localhost:5555/api/products/find/${id}`)
            .then(res => {
                setDetails(res.data)
                setDetailImg(res.data.img1)
            })
    }
    useEffect(() => {
        getData();
    }, [id])

    function Increment() {
        setCounter(counter + 1)
    }
    function Decrement() {
        if (counter !== 1) {
            setCounter(counter - 1)
        }
    }
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

                <div className='detailsItemTexts'>
                    <h1 id='detailsH2'>{details.productname}</h1>
                    <h5 id='detailsH5'>$ {details.price}.00</h5>
                    <p id='detailsP'>{details.desc}</p>
                    <div id='detailsToBasket'>
                        <button onClick={Decrement} id='detailscounter'>-</button>
                        <p id='detailsbasketcount'>{counter}</p>
                        <button onClick={Increment} id='detailscounter'>+</button>
                        <button id='addtobasket'>Add to basket</button>
                    </div>
                    <i id='addtowishlist' class="fa-regular fa-heart"></i>
                    <h3 id='detailsH3'>SKU: {details.sku}</h3>
                    <h3 id='detailsH3'>Category: {details.category}</h3>
                    <h4 id='detailsH4'>Tags: {details.tags}</h4>
                </div>

            </div>
        </section>
    )
}

export default DetailsItem