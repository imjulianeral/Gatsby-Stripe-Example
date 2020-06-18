import React from 'react'
import { Link } from 'gatsby'

import { IoMdCart } from 'react-icons/io'
import { IconContext } from 'react-icons'

const navItems = [
  { caption: 'Home', href: '/' },
  { caption: 'Products', href: '/products' },
]
export default function Nav({ shoppingCart }) {
  return (
    <header className="bg-blue-900 text-blue-100 shadow-md">
      <nav className="flex">
        <ul className="flex flex-1">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                className="hover:bg-blue-700 inline-block px-6 py-4"
                to={item.href}
              >
                {item.caption}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="cart"
          className="hover:bg-blue-700 bg-blue-500 inline-block px-6 py-4"
        >
          <IconContext.Provider
            value={{ className: 'inline-block mr-2 text-xl' }}
          >
            <IoMdCart />
          </IconContext.Provider>
          {shoppingCart.length}
        </Link>
      </nav>
    </header>
  )
}
