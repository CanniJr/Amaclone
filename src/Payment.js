import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from './Axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './css/Payment.css'
import { getBagTotal } from './Reducer'
import { useStateValue } from './StateProvider'
import { db } from './Firebase'


function Payment() {
    const [state, dispatch] = useStateValue();
    const history = useHistory()

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currency sub-units
                url: `/payments/create?total=${getBagTotal(state.bag) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [state.bag])

    console.log('THE SECRET IS >>>>', clientSecret)
    console.log( '😎' , state.user)

    const submitHandler = async (e) => {
        // stripe codes
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
            .then(({ paymentIntent }) => {
                // paymentIntent = Payment confirmation (Code from Stripe)

                db    // NoSQL database
                    .collection('users')
                    .doc(state.user?.uid)
                    .collection('orders') 
                    .doc(paymentIntent.id)
                    .set({
                        bag: state.bag,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    })

                
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET'
                })
                            
                history.replace('/orders')
        })

    }

    const changeHandler = e => {
        // listen for changes in the CardElement
        // displays errors as customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{state.bag?.length} items</Link>)
                </h1>

                {/* Payment section -> Address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{ state.user?.email}</p>
                        <p>123 Cooper Street</p>
                        <p>Brooklyn, NY</p>
                    </div>

                </div>
              
                {/* Payment section -> Review Bag */}
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h3>Review your bag</h3>
                    </div>
                    <div className='payment__items'>
                        {state.bag.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
              
              
                {/* Payment section -> Payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe payment Magic ;) */}
                        
                        <form onSubmit={submitHandler}>
                            <CardElement onChange={changeHandler} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>  
                                        </>
                                    )}
                                    decimalScale={2} //allows 2 digits of decimal number
                                    value={getBagTotal(state.bag)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Place Order"}</span>
                                </button>
                            </div>
                            {/*Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
