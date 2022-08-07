import React from "react";
import { productlayoutProps } from "./productLayout.types";
import Product from 'components/product'

const ProductLayout: React.FC<productlayoutProps> = ({ foo }) => {
  return (
    <div className="p-4 md:p-8 my-4 lg:my-8 shadow-sm bg-white rounded-md">
      <div className="xl:w-72 mx-auto">
        <Product />
      </div>
    </div>
  );
}

export default ProductLayout;
