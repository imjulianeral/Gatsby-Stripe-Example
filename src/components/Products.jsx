import React from 'react'
import ProductCard from './ProductCard'

export default function Products({ products }) {
  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}
