import React from 'react'
import cartStyles from './Cart.module.css'

const NumberOfUnits = ({ id, cart, setCart, numberOfUnits, price }) => {

    const changeNumberOfUnits = (action, id) => {

        cart = cart.map(el => {
            if (el._id === id) {
                if (action === "plus" && el.numberOfUnits < el.instock) {
                    el.numberOfUnits++
                } else if (action === "minus" && el.numberOfUnits > 1) {
                    el.numberOfUnits--
                }
            }
            return el
        })
        setCart([...cart])
        localStorage.setItem('CART', JSON.stringify(cart))
    }
    
    return (
        <>
            <div className={cartStyles.unitsAndPrice}>
                <div className={cartStyles.units}>
                    <div className={cartStyles.btnMinus} onClick={() => changeNumberOfUnits('minus', id)}>
                        <img src={process.env.PUBLIC_URL + '/icons/minus.png'} alt="minus" />
                    </div>
                    <div className={cartStyles.number}>{numberOfUnits}</div>
                    <div className={cartStyles.btnPlus} onClick={() => changeNumberOfUnits('plus', id)}>
                        <img src={process.env.PUBLIC_URL + '/icons/plus.png'} alt="plus" />
                    </div>
                </div>
                <div className={cartStyles.unitPrice}>
                    &euro; {price * numberOfUnits},-
            </div>
            </div>

        </>
    )
}

export default NumberOfUnits
