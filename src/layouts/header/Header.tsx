import User from './User'
import Brand from './Brand'
import { CartIconMd, LogOut } from 'assets'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from 'redux/reducers/cartReducer'
import { useEffect } from 'react'
import { onGetCartData } from 'redux/actions/cartActions'

export default function Header() {

  // init
  const { pathname } = useLocation()
  const { data: { data: cartData } } = useSelector(getCartData)
  const dispatch = useDispatch()
  // dispatching action to getting cart products
  useEffect(() => {
    dispatch(onGetCartData())
  }, [])

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
              {cartData?.length > 0 &&
                <span className="cart-badge">{cartData?.length}</span>}
              <img src={CartIconMd} alt="cart" title="Cart" className="cursor-pointer w-7 ml-7" />
            </div>
          </Link>}
          <img src={LogOut} alt="logout" className="cursor-pointer w-7 ml-7" title="Logout" />
        </span>
      </div>
    </div>
  )
}
