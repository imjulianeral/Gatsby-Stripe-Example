import React from 'react'

export default function Checkout({ redirectToCheckout }) {
  return (
    <button onClick={redirectToCheckout} className="app-btn w-full text-xl">
      Checkout
    </button>
  )
}
