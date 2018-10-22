import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../actions/types'

const initialState = {
  list: [],
  syncing: false
}

function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        syncing: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        syncing: false,
        list: action.payload
      }
    default:
      return state
  }
}

export default products
