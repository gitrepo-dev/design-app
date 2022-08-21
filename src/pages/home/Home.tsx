import React from "react";
import { homeProps } from "./home.types";
import Header from 'layouts/header'
import ProductLayout from 'components/productlayout'
import Sidebar from "components/sidebar";

const Home: React.FC<homeProps> = ({ foo }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-3 md:gap-10">
          <div className="hidden xl:block"></div>
          <div className="flex items-center justify-content h-85vh"><ProductLayout /></div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Home;
