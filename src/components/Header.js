import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'

class Header extends React.Component {
  render() {
    const { cart } = this.props

    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <Button variant="contained" color="primary" className="nav-btn">
                  <h4>Catalog</h4>
                </Button>
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <Badge badgeContent={cart.length} color="primary">
                  <img
                    id="cart-logo"
                    src={'/assets/shopping_cart.png'}
                    alt="cart"
                    height="30px"
                    width="30px"
                  />
                </Badge>
              </Link>
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
