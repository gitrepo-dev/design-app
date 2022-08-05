import React from "react";
import { homeProps } from "./home.types";
import Header from 'layouts/header'

const Home: React.FC<homeProps> = ({ foo }) => {
  return (
    <><Header /></>
  )
}

export default Home;
