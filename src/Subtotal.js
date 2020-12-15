import React from 'react';
import './css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBagTotal } from './Reducer';

function Subtotal() {

    const [state, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({state.bag.length} items):
                                <strong> {value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2} //allows 2 digits of decimal number
                value={getBagTotal(state.bag)} // Part of homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button>Proceed to Checkout</button>
        </div>
        
    )
}

export default Subtotal
