// import React from 'react'
// import {
//     CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
// import { useGlobalContext } from '../Context';
// import axios from 'axios'

// //CardElement only shows cardnr, cvc, mm/yy
// //IdealBankElement shows list of banks

// const options = {

//     style: {
//         base: {
//             color: "#000",
//             fontSize: "16px",
//             fontFamily: "sans-serif",
//             fontSmoothing: "antialiased",
//             "::placeholder": {
//                 color: "gray"
//             }
//         },
//         invalid: {
//             color: "#e5424d",
//             ":focus": {
//                 color: "#303238"
//             }
//         }
//     }
// };

// const CheckoutForm = () => {

//     let { cart } = useGlobalContext()

//    const stripe = useStripe()
//    const elements = useElements()

//    const handleSubmit = async (e) => {
//         e.preventDefault();
//     if(!stripe || !elements){
//     return;
//     }

//     try {
//         const { clientSecret } = await axios.post('/create-payment-intent', {
//             body: JSON.stringify({
//                 paymentMethodType: 'card',
//                 currency: 'eur'
//             })
//         });

//         console.log(clientSecret)
//     } catch (error) {
//         console.log(error)
//     }
    
    
// }
//     return (
//         <div style={{maxWidth: '400px', height:'600px', margin: '200px auto'}}>
//                 <h1 style={{ color: 'lightGray' }}>Checkout</h1>
//                 <form onSubmit={handleSubmit} style={{ width: "100%", height:'600px', margin: "10px auto", backgroundColor: 'lightGray', color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
//                    <CardElement id="card-element"/>
//                     <button type="submit" disabled={!stripe} style={{ width: '100%' }}>pay</button>
//                 </form>
//         </div>
//     )
// }

// export default CheckoutForm
