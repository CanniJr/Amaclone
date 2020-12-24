import React, { useState } from 'react'
import './css/Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [state, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div className='orders'>
            <h1>Orders here</h1>
        </div>
    )
}

export default Orders
