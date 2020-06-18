import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Product from '../components/Product'

export default function product({ data }) {
  const product = data.stripeProduct
  const productPrice = data.allStripePrice.nodes
  return (
    <Layout>
      <Product product={product} price={productPrice} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    stripeProduct(id: { eq: $id }) {
      name
      slug
      images
      description
      id
    }
    allStripePrice(filter: { product: { eq: $id } }) {
      nodes {
        product
        unit_amount
        currency
        created
        id
      }
    }
  }
`
