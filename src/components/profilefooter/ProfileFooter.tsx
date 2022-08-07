import React from "react";
import { profilefooterProps } from "./profileFooter.types";
import {Fb, Twt, Insta, BackArrow} from 'assets'
import { Link } from "react-router-dom";

const ProfileFooter: React.FC<profilefooterProps> = () => {
  return (
    <div className="max-w-lg text-center mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="mb-3 font-bold">Jay Sean</h2>
        <small className="text-gray-500 block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</small>
        <span className="flex justify-center items-center md:min-w-lg mt-5">
          <img src={Fb} alt="fb" className="w-10"  />
          <img src={Twt} alt="twt" className="w-10 mx-3 md:mx-5" />
          <img src={Insta} alt="insta" className="w-10" />
        </span>
        <Link to="/home"><img src={BackArrow} alt="back" className="w-10 mt-5 md:mt-10" title="Go back" /></Link>
      </div>
    </div>
  );
}

export default ProfileFooter;
