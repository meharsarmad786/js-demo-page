import React from 'react'
import Button from "@material-ui/core/Button"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"
import "./Subtotal.css"
import {getBasketTotal} from "./Reducer"

function Subtotal() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subTotal">

      <CurrencyFormat

        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox"/>This order contains a gift.
            </small>
          </>
        )}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Button
       variant="contained"
       color="primary"
      >
      Proceed to checkout
      </Button>
    </div>
  )
}

export default Subtotal
