import Cart from "components/cart";
import Header from "layouts/header";
import React from "react";
import { cartpageProps } from "./cartpage.types";

const Cartpage: React.FC<cartpageProps> = ({ foo }) => (
  <div>
   <Header />
   <Cart />
  </div>
);

export default Cartpage;
