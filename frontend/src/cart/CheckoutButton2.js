// import React from 'react'
// import { useGlobalContext } from '../Context';
// import axios from 'axios'
// import { useHistory } from 'react-router-dom'
// import cartStyles from './Cart.module.css'

// const CheckoutButton2 = ({ cart }) => {

//     let { loggedIn, userData } = useGlobalContext()

//     const { login } = userData

//     const history = useHistory()

//     const checkOut = async () => {
//         if (!loggedIn) {
//             alert('Login first')
//             return
//         }
//         history.push('/stripecheckout')
//     }
//     return (
//         <div className={cartStyles.checkout}>
//             <div className={cartStyles.proceedLink} onClick={checkOut} style={{ textDecoration: 'none', color: 'rgb(221, 125, 0)' }}>Proceed Checkout</div>
//         </div>
//     )
// }

// export default CheckoutButton2