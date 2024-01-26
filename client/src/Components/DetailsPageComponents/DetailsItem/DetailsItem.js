import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addProduct } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss'

function DetailsItem() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [detailImg, setDetailImg] = useState(product.img1)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();


    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
            quantity < 2 && notify()

        } else {
            setQuantity(quantity + 1)
        }
    }

    const notify = () => toast.warning("En az 1 ürün");


    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, }))
    }


    const getData = async () => {
        const response = await axios.get(`https://swiss-delight-api.vercel.app/api/products/find/${id}`);
        setProduct(response.data);
        setDetailImg(response.data.img1)
    };
    useEffect(() => {
        getData();
    }, [id])

    return (
        <section className='detailPage'>
            <div className='detailpageMain'>

                <div className='detailImgs'>
                    <div id='imgmsItem'>
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img1} alt='foto' />
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img2} alt='foto' />
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img3} alt='foto' />
                        <img onClick={(e) => { setDetailImg(e.target.src) }} src={product.img4} alt='foto' />
                    </div>
                    <img src={detailImg} alt='foto' />
                </div>

                <div className='detailsItemTexts'>
                    <h1 id='detailsH2'>{product.productname}</h1>
                    <h5 id='detailsH5'>$ {product.price}.00</h5>
                    <p id='detailsP'>{product.desc}</p>
                    <div id='addbasketDiv' style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <button onClick={() => handleQuantity("dec")} style={{ width: "30px", height: "30px", borderRadius: "100%", cursor: "pointer", background: "none", border: "1px solid gray" }}>-</button>
                        <p style={{ margin: "0", fontSize: "18px" }}>{quantity}</p>
                        <button onClick={() => handleQuantity("inc")} style={{ width: "30px", height: "30px", borderRadius: "100%", cursor: "pointer", background: "none", border: "1px solid gray" }}>+</button>
                        {localStorage.getItem('username') ?
                            <button onClick={handleClick} id='addtobasket'>Add to basket</button>
                            : <Link to={'/login'}><button id='addtobasket'>Add to basket</button></Link>
                        }
                    </div>
                    {localStorage.getItem('username') ?
                        <i id='addtowishlist' className="fa-regular fa-heart"></i>
                        : <Link to={'/login'}><i id='addtowishlist' className="fa-regular fa-heart"></i></Link>
                    }
                    <h3 id='detailsH3'>SKU: {product.sku}</h3>
                    <h3 id='detailsH3'>Kategori: {product.category}</h3>
                    <h4 id='detailsH4'>Etiketler: {product.tags}</h4>
                </div>

            </div>
            <ToastContainer />
        </section>
    )
}

export default DetailsItem