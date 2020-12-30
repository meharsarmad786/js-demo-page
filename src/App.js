import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// ./src/

function App() {

  const [{user}, dispatch] = useStateValue();

  // useEffect is just a piece of code that runs on a certain condition

  useEffect(() => {
      //effect
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user has logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //user has logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
      return () => {
          //cleanup
          unsubscribe();
      }
  }, [])

  console.log("User is >>",user);

  return (
    <Router>
      <div className="app">

      <Switch>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
