import React from 'react'
import { useDispatch } from 'react-redux'

import { clearCart } from '../state/actions/shoppingCart'
import ClearCart from './ClearCart'

export default function ClearCartConnected() {
  const dispatch = useDispatch()
  const clear = () => {
    dispatch(clearCart())
  }
  return <ClearCart clear={clear} />
}
