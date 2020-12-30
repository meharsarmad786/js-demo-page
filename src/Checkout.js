import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider"

function Checkout() {

  const [{basket}] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_image" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1dmf4PRr0gK0jSZFnXXbRRXXa.png" />
        {
          basket?.length === 0 ? (
            <div>
              <h1>You Shopping Cart is empty.</h1>
              <p>You have no items in your Basket. To buy one or more items, click "ADD_TO_BASKET" next to the item.</p>
            </div>
          ):(
            <div>
              <h2 className="checkout_title">Your Shopping Cart</h2>
              {
                basket.map(item => (
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                   />
                ))
              }

            </div>
          )
        }
      </div>
      {
        basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )
      }
    </div>
  )
}

export default Checkout
