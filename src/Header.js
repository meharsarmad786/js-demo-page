import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue } from "./StateProvider"
import {auth} from "./firebase"

// to change the css of material ui we have to use !important otherwise material-ui will not allow changing.

function Header() {
  const [{basket, user}] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
       <Link to='/'>
         <img className="header_logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYyOTGLhLoTsIcLNw8rSaUOc_sZzuSTqIlnQ&usqp=CAU' />
       </Link>

       <div className="header_search">
         <input type="text" className="header_searchInput" />
         <SearchIcon className="hearder_icon" />
       </div>

 {/* Here we are creating the three link like signup checkout and basket etc */}

       <div className="header_nav">

         <Link className="header_link" to={!user && "/login"}>
           <div onClick={login} className="header_option">
             <span className="header_option1">Hello {user?.email}</span>
           <span className="header_option2">{user ? 'Sign out' : 'Sign in'}</span>
           </div>
         </Link>

         <Link className="header_link" to="/">
           <div className="header_option">
             <span className="header_option1">Return</span>
             <span className="header_option2">& orders</span>
           </div>
         </Link>

         <Link className="header_link" to="/">
           <div className="header_option">
             <span className="header_option1">Your</span>
             <span className="header_option2">Prime</span>
           </div>
         </Link>

        {/* Here we are creating basket taht keeps track of object added to cart.*/}
         <Link to="/checkout" className="header_link">
          <div className="basket">
            <ShoppingBasketIcon />
          <span className="counter">{basket?.length}</span>
          </div>
         </Link>

       </div>

    </nav>
  )
}

export default Header
