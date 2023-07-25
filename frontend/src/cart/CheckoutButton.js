import React from 'react'
import { useGlobalContext } from '../Context';
import axios from 'axios'
import cartStyles from './Cart.module.css'

const CheckoutButton = ({ cart }) => {

    let { loggedIn, userData } = useGlobalContext()

    const { login } = userData

    console.log(userData)

    const checkOut = async () => {
        if (!loggedIn) {
            alert('Login first')
            return
        }
        try {
            const res = await axios.post('/stripe/create-checkout-session', { cart, userId: userData._id })
            const url = res.data.url
            console.log(url)
            if (url) {
                window.location.href = url;
            }
            console.log(url)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={cartStyles.checkout}>
            <div className={cartStyles.proceedLink} onClick={checkOut} style={{ textDecoration: 'none', color: 'rgb(221, 125, 0)' }}>Proceed Checkout</div>
        </div>
    )
}

export default CheckoutButton
