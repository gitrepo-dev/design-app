import React, { useEffect } from "react";
import { cartProps } from "./cart.types";
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from "redux/reducers/cartReducer";
import { onGetCartData, onRemoveItemToCart } from "redux/actions/cartActions";
import { CartIconMd, Halign, Hcenter, ProductCollar, ProductOuterr, ProductShadow, Valign, Vcenter } from 'assets'
import { cartData } from 'interfaces';
import { Link } from "react-router-dom";
import { onCheckout } from "redux/actions/productActions";

const Cart: React.FC<cartProps> = ({ foo }) => {

  // initializing
  const { defaultStates: { isLoading, message }, data: { data: cartData } } = useSelector(getCartData)
  const dispatch = useDispatch()

  // dispatching action to getting cart products
  useEffect(() => {
    dispatch(onGetCartData())
  }, [])
  let totalAmt = 0

  const handleCheckout = () => {
    dispatch(onCheckout(cartData))
  }

  return (
    <>
      {isLoading && <div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
      <div className="container mx-auto px-5 my-5 md:my-10">
        <Link to="/"> Home</Link> {'>'} cart
        <div className="grid gap-4 md:grid-5 md:grid-cols-4">
          <div className="md:col-span-3">
            <div className="grid gap-4 grid-cols-2 p-4 md:p-8 my-4 lg:my-8 bg-white rounded-md">
              {cartData?.map(({ uuid, caption, caption_color, caption_position_x, caption_position_y, price, color, size }: cartData) => (
                <div className="md:col-span-3" key={uuid}>
                  <div className="grid gap-4 grid-cols-2 p-4 md:p-8 my-4 lg:my-8 bg-white rounded-md">
                    <div className="flex h-72 items-center justify-center">
                      <div className={`relative flex w-full justify-center items-start`} style={{ height: `${size <= 0 ? '250' : size * 2}px`, width: `${size <= 0 ? '250' : size * 2}px` }}>
                        <div className={`flex caption-wrapper text-xs z-10 ${caption_position_y} ${caption_position_x}`} style={{ color: caption_color }}>{caption}</div>
                        <img src={ProductCollar} alt="coller" className='h-full absolute opacity-25' />

                        <img src={ProductOuterr} alt="outerr" className='h-full absolute' style={{ backgroundColor: `${color}` }} />
                        <img src={ProductShadow} alt="shadow" className='h-full absolute' />
                      </div>
                    </div>
                    <div>
                      <ul className="capitalize">
                        <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Caption: </span>
                          <span className="sm:col-span-2 md:col-span-4 text-gray-700">{caption}</span></li>
                        <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Alignment: </span>
                          <span className="sm:col-span-2 md:col-span-4 flex text-gray-700">
                            <span className="mr-3">
                              <img src={caption_position_x === 'justify-start' ? Halign : caption_position_x === 'justify-center' ? Hcenter : Halign} alt="Alignment" className={`cursor-pointer border-2 border-slate-500 w-8 bg-white px-2 py-2 cursor-pointer ${caption_position_x === 'justify-end' && `rotate-180`}`} title={`${caption_position_x === 'justify-start' ? 'Left' : caption_position_x === 'justify-center' ? 'Center' : 'Right'}`} />
                            </span>
                            <span>
                              <img src={caption_position_y === 'items-start' ? Valign : caption_position_y === 'items-center' ? Vcenter : Valign} alt="Alignment" className={`cursor-pointer border-2 border-slate-500 w-8 bg-white px-2 py-2 cursor-pointer ${caption_position_y === 'items-start' && `rotate-180`}`} title={`${caption_position_y === 'items-start' ? 'Top' : caption_position_y === 'items-center' ? 'Center' : 'Bottom'}`} />
                            </span>
                          </span>
                        </li>
                        <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Size: </span>
                          <span className="sm:col-span-2 md:col-span-4  text-gray-600">
                            {size === 110 ? 'Small' : size === 120 ? 'Medium' : size === 130 ? 'Large' : 'Extra Large'}
                          </span>
                        </li>
                        <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Color: </span>
                          <span className="sm:col-span-2 md:col-span-4"><span title={color} style={{ backgroundColor: `${color}` }} className="h-6 w-6 rounded-md cursor-pointer inline-block"></span></span></li>
                        <li className="grid sm:grid-cols-3 md:grid-cols-5"><span className="font-bold">Price: </span>
                          <span className="sm:col-span-2 md:col-span-4 text-gray-700">${price}</span></li>
                      </ul>
                      <button type="button" onClick={() => dispatch(onRemoveItemToCart(uuid))} className={`mt- md:mt-5 bg-red-500 hover:bg-red-700 rounded-md py-2 flex items-center justify-center text-white px-5`}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {cartData?.length === 0 && message}
            </div>
          </div>
          <div className="md:mt-8 bg-white p-5">
            <ul className="capitalize">
              <li className="grid sm:grid-cols-2 mb-3">
                <span className="font-bold">Items: </span>
                <span className="text-gray-700">{cartData?.length ? cartData?.length : 0}</span>
              </li>
              <li className="grid sm:grid-cols-2 mb-3">
                <span className="font-bold">Sub Total: </span>
                <span className="text-gray-700">${
                  cartData?.length && cartData?.map((data: any) => {
                    totalAmt += data.price
                  })} {totalAmt !== 0 && totalAmt}</span>
              </li>
              <li className="grid sm:grid-cols-2 py-3 border-gray-400 border-b-2">
                <span className="font-bold">Custome Details: </span>
              </li>
              <li className="grid sm:grid-cols-2 my-3">
                <span className="">Name: </span>
                <span className="text-gray-700 text-sm">Jay sean</span>
              </li>
              <li className="grid sm:grid-cols-2 my-3">
                <span className="">Contact: </span>
                <span className="text-gray-700 text-sm">+1 9856965874</span>
              </li>
              <li className="grid sm:grid-cols-2 my-3">
                <span className="">Address: </span>
                <span className="text-gray-700 text-sm">11 street new your city USA 202154</span>
              </li>
            </ul>
            <button type="button" onClick={handleCheckout} className={`bg-blue-500 hover:bg-blue-700 rounded-md py-2 flex items-center justify-center text-white w-full`}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
