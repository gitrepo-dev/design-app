import React, { useEffect } from "react";
import { historyProps } from "./history.types";
import PurchasedOrder from 'components/purchasedorder'
import { onProductPurchasedHistory } from "redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "redux/reducers/productReducer";
import Header from "layouts/header";

const History: React.FC<historyProps> = ({ foo }) => {

  // init
  const { defaultStates, data: { data: productData } } = useSelector(getProductData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onProductPurchasedHistory())
  }, [dispatch])

  return (
    <>
      <Header />
      <PurchasedOrder productData={productData} defaultStates={defaultStates} />
    </>
  )
};

export default History;
