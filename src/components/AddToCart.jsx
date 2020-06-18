import React from 'react'
import { GoPlus } from 'react-icons/go'
import { IconContext } from 'react-icons'

export default function AddToCart({ addProduct }) {
  return (
    <button onClick={addProduct} className="app-btn text-xl">
      <IconContext.Provider value={{ className: 'inline-block mr-2 text-xl' }}>
        <GoPlus />
      </IconContext.Provider>
      Add to Cart
    </button>
  )
}
