import React, { useEffect, useState } from 'react'
import './css/Orders.css'
import { db } from './Firebase';
import Order from './Order';
import { useStateValue } from './StateProvider';

function Orders() {
    const [state, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (state.user) { // If there's a user, run the following code
            db
                .collection('users')
                .doc(state.user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                })))
            })
        } else {
            setOrders([])
        }

    }, [state.user])

    return (
        <div className='orders'>
            <h1>Orders here</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
