import { ADD_ITEM, CLEAR_CART } from '../actions/actionTypes'

export default (state = [], action) => {
  const shoppingCart = state
  if (action.type === ADD_ITEM) {
    const skuIfAny = shoppingCart.find(sku => sku.id === action.payload.id)
    if (skuIfAny) {
      return shoppingCart.map(product => {
        if (product.id === skuIfAny.id)
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        return product
      })
    }
    return shoppingCart.concat([{ ...action.payload, quantity: 1 }])
  }

  if (action.type === CLEAR_CART) {
    return []
  }

  return shoppingCart
}
