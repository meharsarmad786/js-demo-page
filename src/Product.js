import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import {useStateValue} from "./StateProvider"

function Product({ id, title, price, rating, image}) {

  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>

        <p className="product_price">
         <small>$</small>
         <strong>{price}</strong>
        </p>
        <div className="product_rating">
         {
           Array(rating)
           .fill()
           .map((_) => (
             <p><StarIcon /></p>
           ))
         }
        </div>
      </div>

      <img src={image}/>
      <Button
      onClick={addToBasket}
      variant="contained"
      color="primary"
      >
      Add to Basket
      </Button>

    </div>
  )
}

export default Product
