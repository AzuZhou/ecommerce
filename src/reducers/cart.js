import { ADD_TO_CART, DELETE_PRODUCT } from '../actions/types'

function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          _id: action._id,
          price: action.price,
          picture: action.picture,
          name: action.name,
          company: action.company,
          description: action.description,
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
