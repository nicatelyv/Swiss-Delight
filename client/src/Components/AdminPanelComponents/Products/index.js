import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function AdminPanelProductsComponent() {
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState("")
    const [editProduct, setEditProduct] = useState([]);

    const URL = "http://localhost:5555/api/products"

    const getData = async () => {
        const response = await axios.get(URL);
        setProduct(response.data);
    };
    useEffect(() => {
        getData();
    }, [])


    function handleEditProduct(id) {
        axios.put(`http://localhost:5555/api/products/${id}`).then((response) => {
            setEditProduct(response.data);
        });

    }

    async function handleDelete(id) {
        let result = window.confirm("Silmek istediğinden emin misin?")
        if (!result) return false
        let response = await axios.delete(URL + "/" + id)
        getData()
    }

    return (
        <section className='AdminPanelProducts'>
            <div className='AdminPanelProductsMain'>
                <input onChange={(e) => setSearch(e.target.value)} placeholder='Ürün arayın...' />
                {product ?
                    (product.filter(data => data.productname.toLocaleLowerCase().includes(search)).map((product, index) => (
                        <div key={index} className='AdminProduct'>
                            <img src={product.img1} alt='foto' />
                            <div id='AdminProductsTexts'>
                                <h3 id='AdminProductH3'>İsim: {product.productname}</h3>
                                <h4 >Kategori: {product.category}</h4>
                                <h4 id='AdminProductH4'>Fiyat: ${product.price}.00</h4>
                            </div>
                            <h6 id='AdminProductH6'><b>Hakkında:</b> {product.desc}</h6>
                            <div id='AdminProductBtns'>
                                <Link to={`/adminpanel/${product._id}`}><button onClick={() => handleEditProduct()}>Düzenle</button></Link>
                                <button style={{ borderColor: "red" }} onClick={() => handleDelete(product._id)}>Sil</button>
                            </div>
                        </div>)
                    )) : <img title='Data is loaded...' src='https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif' alt='Loading' />}
            </div>
        </section>
    )
}

export default AdminPanelProductsComponent