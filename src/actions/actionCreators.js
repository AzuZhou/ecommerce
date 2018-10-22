import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, ADD_TO_CART, DELETE_PRODUCT } from './types'
import axios from 'axios'

export function fetchProducts() {
  return function(dispatch) {
    dispatch({ type: FETCH_PRODUCTS })
    return axios.get('https://api.myjson.com/bins/wyjyh').then(({ data }) => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data })
    })
  }
}

export function addToCart(_id, price, picture, name, company, description) {
  return {
    type: ADD_TO_CART,
    _id,
    price,
    picture,
    name,
    company,
    description
  }
}

export function deleteProduct(_id) {
  return {
    type: DELETE_PRODUCT,
    _id
  }
}