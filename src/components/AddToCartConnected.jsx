import React from 'react'
import { connect, useDispatch } from 'react-redux'

import { addToCart } from '../state/actions/shoppingCart'
import AddToCart from './AddToCart'

function AddToCartConnected({ price }) {
  const dispatch = useDispatch()
  const addProductToCart = () => {
    dispatch(addToCart(price))
  }
  return <AddToCart addProduct={addProductToCart} />
}

export default connect(null, { addToCart })(AddToCartConnected)
