import React from 'react'
import Price from './Price'

export default function Total({ shoppingCart }) {
  const total = shoppingCart.reduce(
    (total, product) => product.unit_amount * product.quantity + total,
    0
  )
  return (
    <div>
      <p className="uppercase text-blue-200">total</p>
      <Price unit_amount={total} currency="MXN" className="text-2xl" />
    </div>
  )
}
