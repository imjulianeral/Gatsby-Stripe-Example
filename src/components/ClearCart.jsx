import React from 'react'
import { FiDelete } from 'react-icons/fi'
import { IconContext } from 'react-icons'

export default function ClearCart({ clear }) {
  return (
    <button className="app-btn-flat" onClick={clear}>
      Clear Cart
      <IconContext.Provider value={{ className: 'inline-block ml-2 text-xl' }}>
        <FiDelete />
      </IconContext.Provider>
    </button>
  )
}
