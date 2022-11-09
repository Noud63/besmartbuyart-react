import React, { useState } from 'react'
import checkoutstyles from './Checkout.module.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


const Checkout = () => {

    let { total, price, vat, units, userName } = useGlobalContext();

    const history = useHistory()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [paymentMethod, setPaymentMethod] = useState('')

    const onSubmit = data => {
        if (paymentMethod === '') {
            alert('Choose paymentMethod')
            return
        }
        if(userName === ""){
                alert('Login first to complete checkout!')
                history.push('/signin');

        } else {
            data = { ...data, 
                      paymentMethod: paymentMethod, 
                      shippingAddress: {
                            name: data.name2,
                            address: data.address2,
                            number: data.number2,
                            city: data.city2,
                            zip: data.zip,
                            country: data.country2
            }}
            console.log(data)
            reset()
            history.push('/payment');
        }

    };

    const onErrors = errors => console.error(errors);

    return (

        <div className={checkoutstyles.wrapper}>
            <div className={checkoutstyles.cartContainer}>

                <div className={checkoutstyles.itemsInCart}>
                    <span className={checkoutstyles.inCartCircle}>{units}</span>
                    <span className={checkoutstyles.inCart}>items ordered</span>
                </div>

                <div className={checkoutstyles.cartFooter}>
                    <div className={checkoutstyles.totals}>
                        <div className={checkoutstyles.totalPrice}>
                            <span className={checkoutstyles.price}>Price (VAT excl):</span>
                            <span className={checkoutstyles.euro}>
                                <span className={checkoutstyles.currency}>&euro;&nbsp;</span>
                                <span className={checkoutstyles.euroPrice}>{price.toFixed(2)}</span>
                            </span>
                        </div>

                        <div className={checkoutstyles.totalVat}>
                            <span className={checkoutstyles.vat}>VAT 15%</span>
                            <span className={checkoutstyles.totalInclVat}>
                                <span className={checkoutstyles.currency}>&euro;&nbsp;</span>
                                <span className={checkoutstyles.euroPrice}>{vat.toFixed(2)}</span>
                            </span>
                        </div>

                        <div className={checkoutstyles.totalPriceIncVat}>
                            <span className={checkoutstyles.price}>Total price:</span>
                            <span className={checkoutstyles.euro}>
                                <span className={checkoutstyles.currency}>&euro;&nbsp;</span>
                                <span className={checkoutstyles.euroPrice}>{total.toFixed(2)}</span>
                            </span>
                        </div>
                    </div>

                    <div className={checkoutstyles.titles}>
                        <div className={checkoutstyles.shippingAddress}>Shipping address</div>
                        <div className={checkoutstyles.paymentDetails}>Payment Method</div>
                    </div>


                    <div className={checkoutstyles.payment}>

                        <div className={checkoutstyles.formContainer}>

                            <form onSubmit={handleSubmit(onSubmit, onErrors)} className={checkoutstyles.form}>

                                <div className={checkoutstyles.registerAndPayBox}>
                                    <div className={checkoutstyles.register}>

                                        <div className={checkoutstyles.labelField}>
                                            <div className={checkoutstyles.label}><label htmlFor="name">Name: </label>
                                                <ErrorMessage errors={errors} name="name2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                            </div>
                                            <div className={checkoutstyles.labelInput}>
                                                <input type="text" name="name2" {...register("name2", { required: 'name required!' })} />
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.labelField}>
                                            <div className={checkoutstyles.label}><label htmlFor="address">Address: </label>
                                                <ErrorMessage errors={errors} name="address2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                                </div>
                                            <div className={checkoutstyles.addressbar}>
                                                <div className={checkoutstyles.addresslabelInput}>
                                                    <input type="text" name="address2" {...register("address2", { required: 'address required!' })} />
                                                </div>
                                            </div>
                                            <div className={checkoutstyles.label2}><label htmlFor="number">Num: </label>
                                                <ErrorMessage errors={errors} name="number2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                                </div>
                                            <div className={checkoutstyles.numberbar}>
                                                <div className={checkoutstyles.numberlabelInput}>
                                                    <input type="text" name="number2" {...register("number2", { required: 'number required!' })} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.labelField}>
                                            <div className={checkoutstyles.label}><label htmlFor="city">city: </label>
                                                <ErrorMessage errors={errors} name="city2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                                </div>
                                            <div className={checkoutstyles.labelInput}>
                                                <input type="text" name="city2" {...register("city2", { required: 'city required!' })} />
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.labelField}>
                                            <div className={checkoutstyles.label}><label htmlFor="zip">ZIP Code: </label>
                                                <ErrorMessage errors={errors} name="zip" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                                </div>
                                            <div className={checkoutstyles.labelInput}>
                                                <input type="text" name="zip" {...register("zip", { required: 'zip required!' })} />
                                            </div>
                                        </div>


                                        <div className={checkoutstyles.labelField}>
                                            <div className={checkoutstyles.label}><label htmlFor="country">Country: </label>
                                                <ErrorMessage errors={errors} name="country2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                                </div>
                                            <div className={checkoutstyles.labelInput}>
                                                <input type="text" name="country2" {...register("country2", { required: 'country required!' })} />
                                            </div>
                                        </div>

                                        {/* <div className={checkoutstyles.labelField}>
                                            <div className={checkoutstyles.label}><label htmlFor="email">E-mail: </label>
                                                <ErrorMessage errors={errors} name="email2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                                </div>
                                            <div className={checkoutstyles.labelInput}>
                                                <input type="email" name="email2" {...register("email2", { required: 'email required!' })} />
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.labelField}>
                                            <div className={checkoutstyles.label}><label htmlFor="telephone">Tel: </label>
                                                <ErrorMessage errors={errors} name="telephone2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                            </div>
                                            <div className={checkoutstyles.labelInput}>
                                                <input type="text" name="telephone2" {...register("telephone2", { required: 'telephone required!' })} />
                                            </div>
                                        </div> */}

                                    </div>


                                    <div className={checkoutstyles.paymentDetails2}>Payment Method</div>
                                    <div className={checkoutstyles.checkboxes}>

                                        <div className={checkoutstyles.radioField}>

                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}>
                                                    <input type="radio" name="paymentMethod" value={'iDeal'} style={{ width: '15px' }} onChange={(e) => setPaymentMethod(e.target.value)} />
                                                </div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/ideal.png'} alt="cart" style={{ width: '40px' }} /></div>
                                            </div>

                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}>
                                                    <input type="radio" name="paymentMethod" value={'Paypal' || ""} style={{ width: '15px' }} onChange={(e) => setPaymentMethod(e.target.value)} />
                                                </div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/paypal.png'} alt="cart" style={{ width: '40px' }} /></div>
                                            </div>

                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}>
                                                    <input type="radio" name="paymentMethod" value={'Mastercard' || ""} style={{ width: '15px' }} onChange={(e) => setPaymentMethod(e.target.value)} />
                                                </div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/mastercard.png'} alt="cart" style={{ width: '43px' }} /></div>
                                            </div>

                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}>
                                                    <input type="radio" name="paymentMethod" value={'Visa' || ""} style={{ width: '15px' }} onChange={(e) => setPaymentMethod(e.target.value)} />
                                                </div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/visa.png'} alt="cart" style={{ width: '43px' }} /></div>
                                            </div>

                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}>
                                                    <input type="radio" name="paymentMethod" value={'Maestro' || ""} style={{ width: '15px' }} onChange={(e) => setPaymentMethod(e.target.value)} />
                                                </div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/maestro.png'} alt="cart" style={{ width: '43px' }} /></div>
                                            </div>

                                        </div>
                                    </div>

                                </div>


                                <div className={checkoutstyles.confirm}><button type="submit" className={checkoutstyles.btn}>Continue</button></div>

                            </form>

                        </div>


                    </div>

                </div>

                <div className={checkoutstyles.leavecheckout}>
                    <Link to="/" className={checkoutstyles.continueLink} style={{ textDecoration: 'none', color: 'rgb(221, 125, 0)' }}>Home</Link>
                </div>
            </div>
        </div>


    )
}

export default Checkout
