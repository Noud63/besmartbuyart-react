import React from 'react';
import { useGlobalContext } from '../Context';
import cartStyles from './Cart.module.css';
import NumberOfUnits from './NumberOfUnits'
import CartFooter from './CartFooter'

const Cart = () => {

    let { cart, setCart, total, price, vat } = useGlobalContext()

    const removeItemFromCart = (_id) => {
        cart = cart.filter(item => {
            return item._id !== _id;
        });
        setCart(cart)
        localStorage.setItem("CART", JSON.stringify(cart))
    }

    const showDelete = (_id, e) => {
        if (cart.find(item => item._id === _id))
            e.target.parentNode.children[0].style.display = "flex"
    }

    const hideDelete = (_id, e) => {
        if (cart.find(item => item._id === _id))
            e.target.parentNode.children[0].style.display = "none"
    }

    return (
        <div className={cartStyles.wrapper}>
            <div className={cartStyles.cartContainer}>
                <div className={cartStyles.itemsInCart}>
                    <span className={cartStyles.inCartCircle}>{cart.length}</span>
                    <span className={cartStyles.inCart}>items in cart</span>
                </div>
                {cart.map(item => {
                    const { _id, name, price, imgSrc, numberOfUnits, artNr } = item;
                    return (
                        <div className={cartStyles.cartItem} key={_id} id={_id}>
                            <div className={cartStyles.itemInfo} onClick={() => removeItemFromCart(_id)}>
                                <div className={cartStyles.deleteImage}>
                                    <span className={cartStyles.deleteIcon}><span>X</span><span>delete</span></span>
                                    <img src={imgSrc} alt={name} className={cartStyles.picInCart} onMouseOver={(e) => showDelete(_id, e)} onMouseOut={(e) => hideDelete(_id, e)} />
                                </div>
                                <span className={cartStyles.name}>{name}</span>
                            </div>

                            <NumberOfUnits id={_id} cart={cart} setCart={setCart} numberOfUnits={numberOfUnits} price={price} artNr={artNr} />

                        </div>
                    )
                })}

                <CartFooter price={price} vat={vat} total={total} cart={cart}/>

            </div>
        </div>
    )
}

export default Cart
