import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearBasket } from '../../../redux/cartRedux'
import './style.scss'

function Basket() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function handleClick() {
        dispatch(clearBasket())
        navigate("/shop")
    }
    return (
        <section className='cartSection'>
            <div className='cartSectionMain'>
                {cart.products.map((product, index) => (
                    <div key={index} className='Cart'>
                        <img src={product.img1} alt='foto' />
                        <div className='cartItemTexts'>
                            <h2 id='cartItemH2'>{product.productname}</h2>
                            <p id='cartItemP'>{product.tags}</p>
                            <p id='cartItemP'>${product.price}.00</p>
                        </div>
                        <div>
                            <div id='cartItemCount'>
                                <h4>{product.quantity}x</h4>
                            </div>
                            <h3 id='cartItemH3'>${product.price * product.quantity}.00</h3>
                        </div>
                    </div>
                ))
                }
                <h2 id='cartTotalPrice'>Toplam: ${cart.total}.00</h2>
                {localStorage.getItem('username') ?
                    <button onClick={handleClick} style={{ cursor: "pointer", background: "none", border: "2px solid gold", width: "150px", height: "40px", borderRadius: "10px", fontSize: "20px" }}>Onayla</button>
                    : <Link to={'/login'}><button style={{ cursor: "pointer", background: "none", border: "2px solid gold", width: "150px", height: "40px", borderRadius: "10px", fontSize: "20px" }}>Onayla</button></Link>
                }
            </div>
        </section>
    )
}

export default Basket