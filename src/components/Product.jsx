import React from 'react'
import Price from './Price'
import AddToCartConnected from './AddToCartConnected'

export default function Product({ product, price }) {
  return (
    <article className="card">
      <header className="bg-blue-800 p-6 text-center">
        <div className="flex text-left">
          <div className="flex-1">
            {product && <img src={product.images[0]} alt={product.name} />}
          </div>
          <div className="flex-1 px-6">
            <p className="text-blue-300">Price</p>
            <Price {...price[0]} className="text-2xl" />
          </div>
        </div>
      </header>
      <div className="text-center p-6">
        <h1 className="text-3exl uppercase mb-4">{product.name}</h1>
        <AddToCartConnected price={{ ...product, ...price[0] }} />
      </div>
    </article>
  )
}
