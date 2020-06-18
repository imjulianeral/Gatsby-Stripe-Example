import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-6xl">Hello world!</div>
    </Layout>
  )
}
