import React from 'react'
import cartStyles from './Cart.module.css';
import { useHistory } from "react-router-dom";
import { useGlobalContext } from '../Context';
import axios from 'axios'


const CartFooter = ({ price, vat, total, cart }) => {

    let { loggedIn, userData } = useGlobalContext()
     
    const { login } = userData

    const history = useHistory()

    const checkOut = async () => {
      if(!loggedIn){
          alert('Login first')
          return
      }
      try {
           const res = await axios.post('/stripe/create-checkout-session', {cart, userId: login._id})
           const url = res.data.url
           if(url){
               window.location.href = url;
           }
           console.log(url)
      } catch (error) {
          console.log(error)
      }
     
    }

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
            <div className={cartStyles.checkout}>
                <div className={cartStyles.proceedLink} onClick={checkOut} style={{ textDecoration: 'none', color: 'rgb(221, 125, 0)' }}>Proceed Checkout</div>
            </div>
        </div>
    )
}

export default CartFooter
