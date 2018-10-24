import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

class Cart extends React.Component {
  render() {
    const { cart } = this.props

    return (
      <div className="cart">
        {cart.map((product, i) => (
          <li className="cart-product" key={i}>
            <Product product={product} index={i} type="cart" key={i} />
          </li>
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart
})

export default connect(mapState)(Cart)
