import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import Grid from '@material-ui/core/Grid'

class Catalog extends React.Component {
  render() {
    const { products } = this.props

    return (
      <div className="catalog">
        <Grid
          className="catalog-container"
          container
          spacing={40}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {products.map((product, i) => (
            <Grid className="catalog-product" item xs={4} key={i}>
              <Product product={product} type="catalog" key={i} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products.list
})

export default connect(mapState)(Catalog)
