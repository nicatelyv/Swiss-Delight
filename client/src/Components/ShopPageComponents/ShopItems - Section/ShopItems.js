import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function ShopItems() {
    //Get Data
    const [data, setData] = useState([])
    async function getData() {
        await axios.get(`http://localhost:5555/api/products/`)
            .then(res => {
                setData(res.data)
            })
    }
    useEffect(() => {
        getData();
    }, [])


    //Filters
    //Live Search
    const [search, setSearch] = useState("")
    const [filterList, setFilterList] = useState(false)
    function ListOpenClose() {
        setFilterList(!filterList)
    }

    //Filter All
    function filterAll() {
        axios.get("http://localhost:5555/api/products/")
            .then(res => {
                setData(res.data)
            })
    }
    //Filter Delicious
    function filterDelicious() {
        axios.get("http://localhost:5555/api/products?categories=Delicious")
            .then(res => {
                setData(res.data)
            })
    }
    //Filter Nougat
    function filterNougat() {
        axios.get("http://localhost:5555/api/products?categories=Nougat")
            .then(res => {
                setData(res.data)
            })
    }
    //Filter Praline
    function filterPraline() {
        axios.get("http://localhost:5555/api/products?categories=Praline")
            .then(res => {
                setData(res.data)
            })
    }
    //Filter Truffles
    function filterTruffles() {
        axios.get("http://localhost:5555/api/products?categories=Truffles")
            .then(res => {
                setData(res.data)
            })
    }


    //High to low price
    function filterHightoLowPrice() {
        setData([...data.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))])
    }

    //Low to high price
    function filterLowtoHighPrice() {
        setData([...data.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
    }
    //Filter product name
    function filterProductName() {
        setData([...data.sort((a, b) => (a.productname > b.productname) ? 1 : ((b.productname > a.productname) ? -1 : 0))])
    }
    //Filter product id
    function filterProductID() {
        setData([...data.sort((a, b) => (a._id > b._id) ? 1 : ((b._id > a._id) ? -1 : 0))])
    }
    //Filter product date
    function filterProductDate() {
        setData([...data.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0))])
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

                    <li onClick={ListOpenClose} id='filterLi'>Filtrele <i style={{ color: "black" }} class="fa-solid fa-sort"></i>
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
                    {data ?
                        (data.filter(data => data.productname.toLocaleLowerCase().includes(search)).map((element, index) => (
                            <div className='shopItem' key={index}>
                                <div className='shopImg'>
                                    <img src={element.img1} alt='foto' />
                                    <div id='cardIcons'>
                                        <Link to={'/shop/' + element._id + '/details'}><i title='Details' className="fa-solid fa-magnifying-glass"></i></Link>
                                        <i title='Add Basket' className="fa-solid fa-cart-shopping"></i>
                                        <i title='Favourite' className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <h2 style={{ margin: "0" }} id='shopItemName'>{element.productname}</h2>
                                <h5 style={{ margin: "0" }} id='shopItemCategory'>{element.category}</h5>
                                <h3 style={{ margin: "0" }} id='shopItemPrice'>$ {element.price}.00</h3>
                            </div>
                        ))) : <h2 style={{ fontSize: "30px", color: "black" }}>Loading...</h2>
                    }
                </div>
                {/* Items End */}
            </div>
        </section>
    )
}

export default ShopItems