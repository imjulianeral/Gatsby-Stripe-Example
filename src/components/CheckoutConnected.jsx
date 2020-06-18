import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Checkout from './Checkout'

export default function CheckoutConnected({ shoppingCart }) {
  const [stripe, setStripe] = useState({})

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
  }, [])

  const redirectToCheckout = async e => {
    const response = await stripe.redirectToCheckout({
      lineItems: shoppingCart.map(product => ({
        price: product.id,
        quantity: product.quantity,
      })),
      mode: 'payment',
      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'http://localhost:8000/',
    })

    if (response.error) console.log(response.error.message)
  }

  return <Checkout redirectToCheckout={redirectToCheckout} />
}
