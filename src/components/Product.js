import React from 'react'
import { addToCart, deleteProduct } from '../actions/actionCreators'
import { connect } from 'react-redux'

class Product extends React.Component {
  render() {
    const addBtn = (
      <button
        onClick={() =>
          this.props.addProduct(
            this.props.product._id,
            this.props.product.price,
            this.props.product.picture,
            this.props.product.name,
            this.props.product.company,
            this.props.product.description
          )
        }
      >
        Add To Cart
      </button>
    )
    const delBtn = (
      <button onClick={() => this.props.deleteProduct(this.props.product._id)}>Delete</button>
    )

    return (
      <div id={this.props.key} className="product">
        <img src={this.props.product.picture} alt="pic" height="50px" width="50px" />
        <div>
          <h3>{this.props.product.company}</h3>
          <h3>{this.props.product.name}</h3>
          <h3>{this.props.product.price}</h3>
        </div>
        <p>{this.props.product.description}</p>
        {this.props.type === 'catalog' ? addBtn : delBtn}
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  addProduct: (_id, price, picture, name, company, description) =>
    dispatch(addToCart(_id, price, picture, name, company, description)),
  deleteProduct: _id => dispatch(deleteProduct(_id))
})

export default connect(
  null,
  mapDispatch
)(Product)
