import React from 'react'
import checkoutstyles from './Checkout.module.css';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../Context';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


const Checkout = () => {

    let { total, price, vat, units } = useGlobalContext();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
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

                    <div className={checkoutstyles.payment}>
                        <div className={checkoutstyles.register}>
                            <div className={checkoutstyles.shippingAddress}>Shipping address</div>
                            <div className={checkoutstyles.formContainer}>
                                <form action="" onSubmit={handleSubmit(onSubmit, onErrors)} className={checkoutstyles.form}>

                                    <div className={checkoutstyles.labelField}>
                                        <div className={checkoutstyles.label}><label htmlFor="name">Name: </label>
                                        <ErrorMessage errors={errors} name="name2" render={({ message }) => <div className={checkoutstyles.errormessage}>{message}</div>} />
                                        </div>
                                        <div className={checkoutstyles.labelInput}><input type="text" name="name2" {...register("name2", { required: 'name required!' })} /></div>
                                    </div>
                                    
                                    <div className={checkoutstyles.labelField}>
                                        <div className={checkoutstyles.label}><label htmlFor="address">Address: </label></div>
                                        <div className={checkoutstyles.addressbar}>
                                            <div className={checkoutstyles.addresslabelInput}><input type="text" name="address2" {...register("address2", { required: 'address and number required!' })} /></div>
                                        </div>
                                        <div className={checkoutstyles.label2}><label htmlFor="number">Num: </label></div>
                                        <div className={checkoutstyles.numberbar}>
                                            <div className={checkoutstyles.numberlabelInput}><input type="text" name="number2" {...register("number2", { required: 'number required!' })} /></div>
                                        </div>
                                    </div>

                                    <div className={checkoutstyles.labelField}>
                                        <div className={checkoutstyles.label}><label htmlFor="city">city: </label></div>
                                        <div className={checkoutstyles.labelInput}><input type="text" name="city2" {...register("city2", { required: 'city required!' })} /></div>
                                    </div>

                                    <div className={checkoutstyles.labelField}>
                                        <div className={checkoutstyles.label}><label htmlFor="country">Country: </label></div>
                                        <div className={checkoutstyles.labelInput}><input type="text" name="country2" {...register("country2", { required: 'country required!' })} /></div>
                                    </div>

                                    <div className={checkoutstyles.labelField}>
                                        <div className={checkoutstyles.label}><label htmlFor="email">E-mail: </label></div>
                                        <div className={checkoutstyles.labelInput}><input type="email" name="email2" {...register("email2", { required: 'email required!' })} /></div>
                                    </div>

                                    <div className={checkoutstyles.labelField}>
                                        <div className={checkoutstyles.label}><label htmlFor="telephone">Tel: </label></div>
                                        <div className={checkoutstyles.labelInput}><input type="text" name="telephone2" {...register("telephone2", { required: 'telephone required!' })} /></div>
                                    </div>

                                    <div className={checkoutstyles.confirm}><button type="submit" className={checkoutstyles.btn}>Confirm</button></div>

                                </form>
                            </div>
                        </div>

                        <div className={checkoutstyles.pay}>
                            <div className={checkoutstyles.details}>
                                <div className={checkoutstyles.paymentDetails}>Payment Details</div>
                                <div className={checkoutstyles.paymentContainer}>
                                    <form action="" className={checkoutstyles.payContainer}>

                                        <div className={checkoutstyles.radioField}>
                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}><input type="radio" name="ideal" style={{ width: '15px' }} /></div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/ideal.png'} alt="cart" style={{ width: '40px' }} /></div>
                                            </div>

                                            <div className={checkoutstyles.selectBank}>
                                                <select data-testid="bank-select"><option value="default" disabled="">Choose your bank</option>
                                                    <option value="ABNANL2A">ABN AMRO</option>
                                                    <option value="ASNBNL21">ASN Bank</option>
                                                    <option value="BUNQNL2A">Bunq bank</option>
                                                    <option value="INGBNL2A">ING</option>
                                                    <option value="KNABNL2H">Knab bank</option>
                                                    <option value="RABONL2U">Rabobank</option>
                                                    <option value="RBRBNL21">RegioBank</option>
                                                    <option value="SNSBNL2A">SNS Bank</option>
                                                    <option value="TRIONL2U">Triodos Bank</option>
                                                    <option value="FVLBNL22">Van Lanschot</option>
                                                    <option value="HANDNL2A">Handelsbanken</option>
                                                    <option value="REVOLT21">Revolut</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className={checkoutstyles.radioField}>
                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}><input type="radio" name="ideal" style={{ width: '15px' }} /></div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/paypal.png'} alt="cart" style={{ width: '40px' }} /></div>
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.radioField}>
                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}><input type="radio" name="ideal" style={{ width: '15px' }} /></div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/mastercard.png'} alt="cart" style={{ width: '43px' }} /></div>
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.radioField}>
                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}><input type="radio" name="ideal" style={{ width: '15px' }} /></div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/visa.png'} alt="cart" style={{ width: '43px' }} /></div>
                                            </div>
                                        </div>

                                        <div className={checkoutstyles.radioField}>
                                            <div className={checkoutstyles.radioBtnIdealIcon}>
                                                <div className={checkoutstyles.radioBtn}><input type="radio" name="ideal" style={{ width: '15px' }} /></div>
                                                <div><img src={process.env.PUBLIC_URL + '/icons/maestro.png'} alt="cart" style={{ width: '43px' }} /></div>
                                            </div>
                                        </div>
                                        <div className={checkoutstyles.confirmAndPay}><button type="submit" className={checkoutstyles.btn}>Pay</button></div>
                                    </form>
                                </div>
                            </div>

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
