import React from 'react'
import cartStyles from './Cart.module.css';
import CheckoutButton from './CheckoutButton'

const CartFooter = ({ price, vat, total, cart }) => {

    return (
        <div className={cartStyles.cartFooter}>
            <div className={cartStyles.totals}>

                <div className={cartStyles.totalPrice}>
                    <span className={cartStyles.price}>Price (VAT excl):</span>
                    <span className={cartStyles.euro}>
                        <span className={cartStyles.currency}>&euro;&nbsp;</span>
                        <span className={cartStyles.euroPrice}>{price.toFixed(2)}</span>
                    </span>
                </div>

                <div className={cartStyles.totalVat}>
                    <span className={cartStyles.vat}>VAT 15%</span>
                    <span className={cartStyles.totalInclVat}>
                        <span className={cartStyles.currency}>&euro;&nbsp;</span>
                        <span className={cartStyles.euroPrice}>{vat.toFixed(2)}</span>
                    </span>
                </div>

                <div className={cartStyles.totalPriceIncVat}>
                    <span className={cartStyles.price}>Total price:</span>
                    <span className={cartStyles.euro}>
                        <span className={cartStyles.currency}>&euro;&nbsp;</span>
                        <span className={cartStyles.euroPrice}>{total.toFixed(2)}</span>
                    </span>
                </div>

            </div>
            <CheckoutButton cart={cart}/>
        </div>
    )
}

export default CartFooter

