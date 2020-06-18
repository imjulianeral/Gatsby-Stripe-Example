import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Products from '../components/Products'
import SEO from '../components/SEO'

export default function products({ data }) {
  const products = data.allStripeProduct.nodes
  return (
    <Layout>
      <SEO title="Products" />
      <Products products={products} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allStripeProduct {
      nodes {
        name
        id
        slug
      }
    }
  }
`
