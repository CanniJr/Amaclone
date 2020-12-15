import React, { useState } from 'react'
import './css/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signInHandler = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
            history.push('/')
            })
        .catch(error => alert(error.message))
    }

    const registrationHandler = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                
            // If new user is succesfully created
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
        })
            .catch(error => alert(error.message))
            }
    

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''
                />  
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                   
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signInHandler}
                        className='login__signInButton'>Sign In
                    </button>
                </form>

                <p>
                    By signing up, you agree to the AMACLONE Terms & Conditions! Please see our Privacy Notice, our Cookies Notice and interest-based Ads Notice soon to be added here :D 
                </p>

                <button onClick={registrationHandler}
                    className='login__registrationButton'>
                    Create Your Amaclone Account!
                </button>

            </div>
        </div>
    )
}

export default Login
