import React from "react";
import { cartProps } from "./cart.types";
import { CartIconMd, Halign, Valign, Vcenter } from 'assets'
import { Link } from "react-router-dom";

const Cart: React.FC<cartProps> = ({ foo }) => {
  return (
    <div className="container mx-auto px-5 my-5 md:my-10">
      <Link to="/"> Home</Link> {'>'} cart
      <div className="grid gap-4 md:grid-5 md:grid-cols-4">
        <div className="md:col-span-3">
          <div className="grid gap-4 grid-cols-2 p-4 md:p-8 my-4 lg:my-8 bg-white rounded-md">

            {/* product */}
            <div className="">

              product image
              {/* <div className={`relative flex w-full justify-center items-start`} style={{ height: `${size <= 0 ? '' : size * 2}px`, width: `${size <= 0 ? '250' : size * 2}px` }}>
                <div className={`flex caption-wrapper text-xs z-10 ${caption_position_y} ${caption_position_x}`} style={{ color: caption_color }}>{caption}</div>
                <img src={ProductCollar} alt="coller" className='h-full absolute opacity-25' />

                <img src={ProductOuterr} alt="outerr" className='h-full absolute' style={{ backgroundColor: `${color}` }} />
                <img src={ProductShadow} alt="shadow" className='h-full absolute' />
              </div> */}

            </div>
            {/* end */}


            <div>
              <ul className="capitalize">
                <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Caption: </span>
                  <span className="sm:col-span-2 md:col-span-4 text-gray-700">React.js</span></li>
                <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Alignment: </span>
                  <span className="sm:col-span-2 md:col-span-4 flex text-gray-700">
                    <span className="mr-3">
                      <img src={Halign} alt="Top" title="Top" className="rotate-180 w-7 bg-gray-100 p-1 cursor-pointer border-2 border-slate-500" />
                    </span>
                    <span>
                      <img src={Vcenter} alt="Top" title="Top" className="rotate-180 w-7 bg-gray-100 p-1 cursor-pointer border-2 border-slate-500" />
                    </span>
                  </span>
                </li>
                <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Size: </span>
                  <span className="sm:col-span-2 md:col-span-4  text-gray-600">Medium</span></li>
                <li className="grid sm:grid-cols-3 md:grid-cols-5 mb-3"><span className="font-bold">Color: </span>
                  <span className="sm:col-span-2 md:col-span-4"><span className="h-6 w-6 rounded-md bg-red-500 inline-block"></span></span></li>
                <li className="grid sm:grid-cols-3 md:grid-cols-5"><span className="font-bold">Price: </span>
                  <span className="sm:col-span-2 md:col-span-4 text-gray-700">$100</span></li>
              </ul>
              <button  type="submit" className={`mt- md:mt-5 bg-red-500 hover:bg-red-700 rounded-md py-2 flex items-center justify-center text-white px-5`}>
              Remove
            </button>
            </div>
          </div>
        </div>
        <div className="md:mt-8 bg-white p-5">
          <ul className="capitalize">
            <li className="grid sm:grid-cols-2 mb-3">
              <span className="font-bold">Items: </span>
              <span className="text-gray-700">5</span>
            </li>
            <li className="grid sm:grid-cols-2 mb-3">
              <span className="font-bold">Sub Total: </span>
              <span className="text-gray-700">$100</span>
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
          <button  type="submit" className={`bg-blue-500 hover:bg-blue-700 rounded-md py-2 flex items-center justify-center text-white w-full`}>
              Checkout
            </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
