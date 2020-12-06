import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>A Promised Land</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>45.00</strong>
                </p>
                <div className='product__rating'>
                    <p>⭐️</p>
                </div>
            </div>

                <img
                    src='https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg'
                    alt='product'
                />

                <button>Add to Bag</button>
        </div>
    );
}

export default Product 
