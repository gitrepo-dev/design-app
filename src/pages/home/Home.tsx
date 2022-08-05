import React from "react";
import { homeProps } from "./home.types";
import Header from 'layouts/header'
import ProductLayout from 'components/productlayout'
import ProductCustomization from 'components/productcustomization'

const Home: React.FC<homeProps> = ({ foo }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-5 md:mt-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 md:gap-10">
          <div className="hidden xl:block"></div>
          <ProductLayout />
          <ProductCustomization />
          <div className="hidden xl:block"></div>
        </div>
      </div>
    </>
  )
}

export default Home;
