import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Catalog from './Catalog'
import Cart from './Cart'
import { fetchProducts } from '../actions/actionCreators'
import CircularProgress from '@material-ui/core/CircularProgress'
import Notifications from 'react-notify-toast'

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { loading } = this.props

    return (
      <BrowserRouter>
        <div className="main">
          <Notifications options={{ top: '140px' }} />
          {loading ? (
            <CircularProgress className="loader" color="secondary" />
          ) : (
            <Fragment>
              <Header />
              <Switch>
                <Route path="/cart" component={Cart} />
                <Route path="/" component={Catalog} />
              </Switch>
            </Fragment>
          )}
        </div>
      </BrowserRouter>
    )
  }
}

const mapState = state => ({
  loading: state.products.syncing
})

const mapDispatch = { fetchProducts }

export default connect(
  mapState,
  mapDispatch
)(Main)
