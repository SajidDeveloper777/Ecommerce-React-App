import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            {getTotalCartAmount() > 0 ? (
                <>
                    <div className="cartitems-format-main cartitems-header">
                        <p>Products</p>
                        <p>Titles</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />

                    {all_product.map((e) => {
                        if (cartItems[e.id] > 0) {



                            return <div>
                                <div className="cartitem-format cartitems-format-main">
                                    <img src={e.image} alt="" className="format-img" />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img className='remove-icon-fromcart' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                                </div>
                                <hr />
                            </div>

                        }

                        return null;
                    })}

                    <div className="cartitem-down">
                        <div className="cartitem-total">
                            <h1>Cart Totals</h1>
                            <div>
                                <div className="cartitem-total-items">
                                    <p>Subtotal</p>
                                    <p>${getTotalCartAmount()}</p>

                                </div>
                                <hr />
                                <div className="cartitem-total-items">
                                    <p>Shipping Free</p>
                                    <p>Free</p>

                                </div>
                                <hr />

                                <div className="cartitem-total-items">
                                    <h3>Total</h3>
                                    <h3>${getTotalCartAmount()}</h3>
                                </div>
                            </div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>

                </>
            ) : (
                <h2 style={{ textAlign: "center", marginTop: "2rem", fontWeight: 500, marginBottom: "6rem" }}>
                    Your cart is empty 🛒
                </h2>
            )}


        </div>
    )
}

export default CartItems


