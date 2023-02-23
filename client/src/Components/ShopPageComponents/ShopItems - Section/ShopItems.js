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
    function handleHightoLowPrice() {
        setData([...data.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))])
    }

    //Low to high price
    function handleLowtoHighPrice() {
        setData([...data.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
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

                    <select onChange={(e) => { e.target.value = '' }} aria-label='Filters' htmlFor='filterinp' name='filters' selected='default' id='filters' title='Filters' class="_9407 _5dba _9hk6 _8esg" aria-describedby='js_146'>
                        <option id='filterinp' name='filters' value='default' >Varsayılan</option>
                        <option onClick={() => handleLowtoHighPrice()} id='filterinp' name='filters' value='lowtohighPrice' >Düşükten yükseğe fiyat</option>
                        <option onClick={() => handleHightoLowPrice()} id='filterinp' name='filters' value='hightolowPrice' >Yüksekten düşüğe fiyat</option>
                        <option id='filterinp' name='filters' value='date' >Tarih</option>
                        <option id='filterinp' name='filters' value='title' >Başlık</option>
                        <option id='filterinp' name='filters' value='id' >İD</option>
                        <option id='filterinp' name='filters' value='menuOrder' >Menü Sırası</option>
                    </select>
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
                                        <Link to={'/shop/' + element._id + '/details'}><i className="fa-solid fa-magnifying-glass"></i></Link>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <i className="fa-regular fa-heart"></i>
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