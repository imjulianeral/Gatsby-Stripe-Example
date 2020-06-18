import React from 'react'

import SEO from './SEO'
import NavConnected from './NavConnected'

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <NavConnected />
      <main className="max-w-4xl mx-auto">{children}</main>
    </>
  )
}
