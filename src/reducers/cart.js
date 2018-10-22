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
          description: action.description
        }
      ]
    case DELETE_PRODUCT:
      return state.filter(id => id._id !== action._id)
    default:
      return state
  }
}

export default cart

//[...state.slice(0, action.i), ...state.slice(action.i + 1)]
