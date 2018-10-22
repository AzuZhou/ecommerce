import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

class Cart extends React.Component {
  render() {
    const { cart } = this.props

    return (
      <div className="cart">
        <h1>Cart</h1>
        <ul>
          {cart.map(product => (
            <li key={product._id}>
              <Product product={product} type="cart" key={product._id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart
})

export default connect(mapState)(Cart)
