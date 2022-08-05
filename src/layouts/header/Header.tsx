import User from './User'
import Brand from './Brand'
import { CartIconMd, LogOut } from 'assets'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

  const { pathname } = useLocation()

  return (
    <div className="container mx-auto p-4 w-full sticky z-10 bg-white top-0">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="flex items-center sm:w-3/4">
          <Brand />
          <span className="title ml-3 text-4xl font-bold">Fashion point</span>
        </Link>

        <span className="flex justify-end items-center">
          <User />
          {pathname === '/cart' ? '' : <Link to="/cart">
            <div className="relative">
              <span className="cart-badge">4</span>
              <img src={CartIconMd} alt="cart" title="Cart" className="cursor-pointer w-7 ml-7" />
            </div>
          </Link>}
          <img src={LogOut} alt="logout" className="cursor-pointer w-7 ml-7" title="Logout" />
        </span>
      </div>
    </div>
  )
}
