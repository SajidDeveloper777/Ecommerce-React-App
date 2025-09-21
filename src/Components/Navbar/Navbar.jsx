import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, Links } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'




const Navbar = () => {
    const [manu, setManu] = useState('shop')
    const {getTotalCartItems} = useContext(ShopContext);
     const [isOpen, setIsOpen] = useState(false);
    const manuRef = useRef();
    const hamburgerToggle = (e)=>{
        manuRef.current.classList.toggle('manu-visible');
        setIsOpen(!isOpen);

    }


    return (
        <div className='navbar'>
            <i onClick={hamburgerToggle} className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} hamburger`}></i>
            <div className="logo">
                <img src={logo} alt="error loading" />
                <p>WearNWalk</p>
            </div>

            <ul ref={manuRef} className='nav-links'>
                <li onClick={() => { setManu('shop') }}><Link style={{ textDecoration: 'none' }} to='/shop'>shop </Link>  {manu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setManu('mens') }}><Link style={{ textDecoration: 'none' }} to='/mens'>men </Link> {manu === 'mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setManu('womens') }}><Link style={{ textDecoration: 'none' }} to='/womens'>women </Link> {manu === 'womens' ? <hr /> : <></>}</li>
                <li onClick={() => { setManu('kids') }}><Link style={{ textDecoration: 'none' }} to='/kids'>kids</Link> {manu === 'kids' ? <hr /> : <></>}</li>

            </ul>
            <div className="nav-login-cart">

                <Link to='/login'><button>login</button> </Link>
                <Link to='/cart'>  <img src={cart_icon} alt="error loading" /> </Link>
                <div className="cart-icon-count">{getTotalCartItems()}</div>

            </div>
        </div>
    )
}

export default Navbar