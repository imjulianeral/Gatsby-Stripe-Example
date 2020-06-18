import { ADD_ITEM, CLEAR_CART } from './actionTypes'

export const addToCart = product => ({ type: ADD_ITEM, payload: product })

export const clearCart = () => ({ type: CLEAR_CART })
