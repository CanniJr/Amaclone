import React, { useEffect } from 'react';
import './css/App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './Firebase'
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the App component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the User just/was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
    