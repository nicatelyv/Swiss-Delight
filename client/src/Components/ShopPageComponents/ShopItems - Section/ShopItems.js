import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function ShopItems() {

    //Fetch Data
    const [data, setData] = useState([])
    function getData() {
        fetch("http://localhost:5555/api/products/")
            .then(res => res.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        getData()
    }, [])


    //Live Search
    const [search, setSearch] = useState("")

    //High to low price
    function handleHightoLowPrice() {
        setData([...data.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))])
    }

    //Low to high price
    function handleLowtoHighPrice() {
        setData([...data.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
    }

    //Filter Delicious
    function handleDelicious() {
        setData([...data.sort((a) => a.category === "Delicious")])
    }
    return (
        <section className='shopItemsSection'>
            <div className='shopItemsMain'>

                {/* Filters  start*/}
                <div className='filters'>
                    <ul className='filtersUl'>
                        <li>TÜMÜ</li>
                        <li onClick={() => handleDelicious()}>DELICIOUS</li>
                        <li>NOUGAT</li>
                        <li>PRALINE</li>
                        <li>TRUFFLES</li>
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

                <div className='ShopItems'>
                    {/* Items Start */}
                    {data.filter(data => data.productname.toLocaleLowerCase().includes(search)).map((element, index) => (
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
                    ))}
                    {/* Items End */}
                </div>
            </div>
        </section>
    )
}

export default ShopItems