import React from 'react'
import './css/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Checkout() {
    const [state, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src='https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png'
                    alt=''
                />

                <div>
                    <h3>Hello, {(state.user)?.email}!</h3>
                    <h2 className='checkout__title'>
                        Your Shopping Bag</h2>
                    {/* {console.log(state.bag)} */}
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

            <div className='checkout__right'>
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
