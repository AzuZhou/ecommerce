import React from 'react'
import { addToCart, deleteProduct } from '../actions/actionCreators'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class Product extends React.Component {
  render() {
    const addBtn = (
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          this.props.addProduct(
            this.props.product._id,
            this.props.product.price,
            this.props.product.picture,
            this.props.product.name,
            this.props.product.company,
            this.props.product.description,
            this.props.index
          )
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
      <div className="product" id={`product-${this.props.type}`}>
        <img
          className="photo"
          src={this.props.product.picture}
          alt="pic"
          height="320px"
          width="320px"
        />
        <div className="column">
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
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  addProduct: (_id, price, picture, name, company, description, index) =>
    dispatch(addToCart(_id, price, picture, name, company, description, index)),
  deleteProduct: index => dispatch(deleteProduct(index))
})

export default connect(
  null,
  mapDispatch
)(Product)
