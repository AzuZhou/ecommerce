import { ADD_TO_CART, DELETE_PRODUCT } from '../actions/types'

function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          _id: action.data._id,
          price: action.data.price,
          picture: action.data.picture,
          name: action.data.name,
          company: action.data.company,
          description: action.data.description,
          index: action.index
        }
      ]
    case DELETE_PRODUCT:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default:
      return state
  }
}

export default cart
