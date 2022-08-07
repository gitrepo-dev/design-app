import React from "react";
import { singleProps } from "./single.types";
import Imgholder from 'components/imgholder'
import Description from "components/description";
import { BackArrow } from 'assets'
import { Link } from "react-router-dom";

const Single: React.FC<singleProps> = () => (
  <div className="container mx-auto px-3 md:px-10 lg:px-14 mb-10">
    <Link to="/home"><img src={BackArrow} alt="back" title="Go back" className="py-3 md:py-5 goback w-10" /></Link>
    <div className="grid sm:grid-cols-2 gap-6">
      <Imgholder />
      <Description />
    </div>
  </div>
);

export default Single;
