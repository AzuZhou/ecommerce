import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

class Cart extends React.Component {
  render() {
    const { cart } = this.props

    return (
      <div className="cart">
        {cart.length ? (
          cart.map((product, i) => (
            <li className="cart-product" key={i}>
              <Product product={product} index={i} type="cart" key={i} />
            </li>
          ))
        ) : (
          <h1>...Oops you don't have items in your cart!</h1>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart
})

export default connect(mapState)(Cart)
