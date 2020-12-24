import React from 'react'
import './css/CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct(props) {
    const [state, dispatch] = useStateValue();

    //removes item from basket
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BAG',
            id: props.id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={props.image} alt='' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{props.title}
                </p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                {Array(props.rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))
                }
                </div>
                {!props.hideButton && (
                    <button onClick={removeFromBasket}>Remove from Bag</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
