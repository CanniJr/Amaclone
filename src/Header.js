// 'rfce' is the shortcut to print all the function code.
import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img
                className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
                alt='Amaclone' />

            <div className='header__search'>
                <input
                className='header__searchInput' 
                    type='text'
                    placeholder='Amaclone!!!'
                />
                <i className='fas fa-search header__searchIcon'></i>

            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <div className='header__optionBag'>
                    <i className="fas fa-shopping-bag"></i>
                    <span className='header__optionLineTwo header__bagCount'>
                        0
                    </span>
                    
                </div>

            </div>
        </div>
    )
}

export default Header
