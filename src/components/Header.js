import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends React.Component {
  render() {
    const { cart } = this.props

    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Catalogue</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
              {cart.length}
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

const mapState = state => ({
  cart: state.cart
})

export default connect(mapState)(Header)
