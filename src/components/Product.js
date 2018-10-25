import React from 'react'
import { addToCart, deleteProduct } from '../actions/actionCreators'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { notify } from 'react-notify-toast'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

function handleNotifications() {
  notify.show('Item added successfully!', 'success', 1200)
}

class Product extends React.Component {
  render() {
    const addBtn = (
      <Button
        className="addBtn"
        variant="contained"
        color="secondary"
        onClick={() =>
          this.props.addProduct(this.props.product, this.props.index) && handleNotifications()
        }
      >
        <img
          id="add-cart-logo"
          src={'/assets/add_shopping_cart.png'}
          alt="cart"
          height="20px"
          width="20px"
        />
      </Button>
    )
    const delBtn = (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => this.props.deleteProduct(this.props.index)}
      >
        <img id="delete-logo" src={'/assets/delete.png'} alt="delete" height="20px" width="20px" />
      </Button>
    )

    return (
      <Card className="product" id={`product-${this.props.type}`}>
        <img
          className="photo"
          src={this.props.product.picture}
          alt="pic"
          height="320px"
          width="320px"
        />
        <CardContent className="column">
          <div className="product-details">
            <h4>{this.props.product.name}</h4>
            <h4>{this.props.product.price}</h4>
          </div>
          <p>{this.props.product.description}</p>

          <div className="product-details">
            <h4>
              By&#160;
              {this.props.product.company}
            </h4>
            {this.props.type === 'catalog' ? addBtn : delBtn}
          </div>
        </CardContent>
      </Card>
    )
  }
}

const mapDispatch = dispatch => ({
  addProduct: (data, index) => dispatch(addToCart(data, index)),
  deleteProduct: index => dispatch(deleteProduct(index))
})

export default connect(
  null,
  mapDispatch
)(Product)
