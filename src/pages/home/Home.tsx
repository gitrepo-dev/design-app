import React from "react";
import { homeProps } from "./home.types";
import Header from 'layouts/header'
import ProductLayout from 'components/productlayout'
import Sidebar from "components/sidebar";
import { getProductData } from "redux/reducers/productReducer";
import { useSelector } from "react-redux";

const Home: React.FC<homeProps> = ({ foo }) => {
  const isData = useSelector(getProductData)
  return (
    <>
      {isData?.defaultStates?.isLoading && <div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>}
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
function userSelector(getProductData: any) {
  throw new Error("Function not implemented.");
}

