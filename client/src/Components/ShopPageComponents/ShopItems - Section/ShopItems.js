import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'


function ShopItems() {
    // const { wishList, setWishList } = useContext(MainContext)
    //Get Data
    const [product, setProduct] = useState(false, [])

    const getData = async () => {
        const response = await axios.get("https://swiss-delight-api.vercel.app/api/products");
        setProduct(response.data);
    };
    useEffect(() => {
        getData();
    }, [])


    // function toggleToWishList(id) {
    //     toast.dismiss()
    //     if (wishList.findIndex(x => x.id == id) > -1) {
    //         toast("Removed from wishlist successfully")
    //         setWishList([...wishList.filter(x => x.id != id),])
    //     } else {
    //         toast("Added to wishlist  successfully")
    //         setWishList([...wishList, { id: id, date: Date.now() }])
    //     }
    // }


    //Filters
    //Live Search
    const [search, setSearch] = useState("")

    //Filter
    const [filterList, setFilterList] = useState(false)
    function ListOpenClose() {
        setFilterList(!filterList)
    }
    //Filter All
    function filterAll() {
        axios.get("https://swiss-delight-api.vercel.app/api/products/")
            .then(res => {
                setProduct(res.data)
            })
    }
    //Filter Delicious
    function filterDelicious() {
        axios.get("https://swiss-delight-api.vercel.app/api/products?categories=Delicious")
            .then(res => {
                setProduct(res.data)
            })
    }
    //Filter Nougat
    function filterNougat() {
        axios.get("https://swiss-delight-api.vercel.app/api/products?categories=Nougat")
            .then(res => {
                setProduct(res.data)
            })
    }
    //Filter Praline
    function filterPraline() {
        axios.get("https://swiss-delight-api.vercel.app/api/products?categories=Praline")
            .then(res => {
                setProduct(res.data)
            })
    }
    //Filter Truffles
    function filterTruffles() {
        axios.get("https://swiss-delight-api.vercel.app/api/products?categories=Truffles")
            .then(res => {
                setProduct(res.data)
            })
    }

    //High to low price
    function filterHightoLowPrice() {
        setProduct([...product.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))])
    }
    //Low to high price
    function filterLowtoHighPrice() {
        setProduct([...product.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
    }
    //Filter product name
    function filterProductName() {
        setProduct([...product.sort((a, b) => (a.productname > b.productname) ? 1 : ((b.productname > a.productname) ? -1 : 0))])
    }
    //Filter product id
    function filterProductID() {
        setProduct([...product.sort((a, b) => (a._id > b._id) ? 1 : ((b._id > a._id) ? -1 : 0))])
    }
    //Filter product date
    function filterProductDate() {
        setProduct([...product.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0))])
    }


    return (
        <section className='shopItemsSection'>
            <div className='shopItemsMain'>
                {/* Filters  start*/}
                <div className='filters'>
                    <ul className='filtersUl'>
                        <li onClick={() => filterAll()}>Tümü</li>
                        <li onClick={() => filterDelicious()}>Delicious</li>
                        <li onClick={() => filterNougat()}>Nougat</li>
                        <li onClick={() => filterPraline()}>Praline</li>
                        <li onClick={() => filterTruffles()}>Truffles</li>
                    </ul>

                    <input onChange={(e) => setSearch(e.target.value)} id='livesearchInp' placeholder='Başlık girin...' />

                    <li onClick={ListOpenClose} id='filterLi'>Filtrele <i style={{ color: "black" }} className="fa-solid fa-sort"></i>
                        {filterList &&
                            <div id='filterListUl'>
                                <li onClick={() => filterAll()}>Varsayılan</li>
                                <li onClick={() => filterLowtoHighPrice()}>Düşükten yükseğe fiyat</li>
                                <li onClick={() => filterHightoLowPrice()}>Yüksekten düşüğe fiyat</li>
                                <li onClick={() => filterProductName()}>Başlık</li>
                                <li onClick={() => filterProductDate()}>Tarih</li>
                                <li onClick={() => filterProductID()}>İD</li>
                            </div>
                        }
                    </li>
                </div>
                {/* Filters End */}

                {/* Items Start */}
                <div className='ShopItems'>
                    {product ?
                        (product.filter(data => data.productname.toLocaleLowerCase().includes(search)).map((product, index) => {
                            product.quantity = 1;
                            return (
                                (
                                    <div className='shopItem' key={index}>
                                        <div className='shopImg'>
                                            <img src={product.img1} alt='foto' />

                                            {/* <div id='cardIcons'>
                                                <i onClick={handleClick} title='Add Basket' className="fa-solid fa-cart-shopping"></i>
                                                <i title='Favourite' className="fa-regular fa-heart"></i>
                                            </div> */}

                                            <div className='w3-container w3-center w3-animate-bottom' id='cardIcons' >
                                                <Link to={'/shop/' + product._id + '/details'}>
                                                    <i title='Details' className="fa-solid fa-magnifying-glass "></i>
                                                </Link>
                                                {/* {localStorage.getItem('username') ? <i title='Favoruite' className="fa-regular fa-heart"></i> : <Link to={'/login'}><i title='Favoruite' className="fa-regular fa-heart"></i></Link>} */}
                                            </div>
                                        </div>
                                        <h2 style={{ margin: "0" }} id='shopItemName'>{product.productname}</h2>
                                        <h5 style={{ margin: "0" }} id='shopItemCategory'>{product.category}</h5>
                                        <h3 style={{ margin: "0" }} id='shopItemPrice'>$ {product.price}.00</h3>
                                    </div>
                                )
                            )
                        })) : <img title='Data is loaded...' src='https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif' alt='Loading' />
                    }
                </div>
                {/* Items End */}
            </div>
        </section>
    )
}

export default ShopItems