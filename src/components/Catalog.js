import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

class Catalog extends React.Component {
  render() {
    const { products } = this.props
    let newList = 0
    return (
      <div className="catalog">
        <h1>Catalog</h1>
        <ul>
          {products.map((product, i) => {
            if (i % 3 === 0) {
              newList = products.slice(newList + 3, newList + 5)
              return (
                <ul id={`row${i}`}>
                  <li key={product._id}>
                    <Product product={product} type="catalog" key={product._id} />
                  </li>
                  {newList.map(product => {
                    return (
                      <li key={product._id}>
                        <Product product={product} type="catalog" key={product._id} />
                      </li>
                    )
                  })}
                </ul>
              )
            }
            return null
          })}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products.list
})

export default connect(mapState)(Catalog)
