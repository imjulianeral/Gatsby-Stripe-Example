import React from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'

function NavConnected({ shoppingCart }) {
  return <Nav shoppingCart={shoppingCart} />
}

const mapStateToProps = ({ shoppingCart }) => ({ shoppingCart })
export default connect(mapStateToProps, {})(NavConnected)
