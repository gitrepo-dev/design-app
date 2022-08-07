import React from "react";
import { productProps } from "./product.types";
import { useSelector } from 'react-redux'
import { getProductCustomizeProps } from 'redux/reducers/productReducer'
import { ProductCollar, ProductOuterr, ProductShadow } from 'assets'

const Product: React.FC<productProps> = ({ foo }) => {

  const { color, caption_color, caption_position_x, caption_position_y, caption, size } = useSelector(getProductCustomizeProps)

 
  return (
    <div className="flex h-72 items-center justify-center">
      <div className={`relative flex w-full justify-center items-start`} style={{ height: `${size <= 0 ? '250' : size * 2}px`, width: `${size <= 0 ? '250' : size * 2}px` }}>
        <div className={`flex caption-wrapper text-xs z-10 ${caption_position_y} ${caption_position_x}`} style={{color: caption_color}}>{caption}</div>
        <img src={ProductCollar} alt="coller" className='h-full absolute opacity-25' />

        <img src={ProductOuterr} alt="outerr" className='h-full absolute' style={{ backgroundColor: `${color}` }} />
        <img src={ProductShadow} alt="shadow" className='h-full absolute' />
      </div>
    </div>
  );
}

export default Product;
