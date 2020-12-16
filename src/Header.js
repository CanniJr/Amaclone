// 'rfce' is the shortcut to print all the function code.
import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function Header() {
    const [state, dispatch] = useStateValue();

    const signInHandler = () => {
        if (state.user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
            <img
                className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
                alt='Amaclone' />
            
            </Link>

            <div className='header__search'>
                <input
                className='header__searchInput' 
                    type='text'
                    placeholder='Amaclone!!!'
                />
                <i className='fas fa-search header__searchIcon'></i>

            </div>

            <div className='header__nav'>
                <Link to={!state.user && '/login'}>
                <div onClick={signInHandler} className='header__option'>
                    <span className='header__optionLineOne'>{state.user ? `Hello ${state.user.email}` : 'Hello Guest'}</span>
                    <span className='header__optionLineTwo'>{state.user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <Link to='/checkout' >
                    <div className='header__optionBag'>
                        <i className="fas fa-shopping-bag"></i>
                        <span className='header__optionLineTwo header__bagCount'>
                            {state.bag?.length}
                        </span>
                        
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
