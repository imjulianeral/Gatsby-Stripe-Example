import React from 'react'
import { Link } from 'gatsby'

export default function ProductCard({ product }) {
  return (
    <article className="card p-4">
      <header>
        <Link
          className="font-bold uppercase text-2xl"
          to={`/products/${product.slug}`}
        >
          {product.name}
        </Link>
      </header>
    </article>
  )
}
