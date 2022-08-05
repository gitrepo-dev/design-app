import React from "react";
import { descriptionProps } from "./description.types";
import {Like, Cmt} from 'assets'

const Description: React.FC<descriptionProps> = () => {
  return(
      <div>
        <h2 className="font-bold mb-4 text-xl">@Jay Sean</h2>
        <p className="text-gray-500 md:max-w-lg text-md">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
        <span className="flex font-bold mt-5 md:mt-10">
          2.5k <img src={Like} alt="like" className="w-7 mr-4 ml-1" />
          5k <img src={Cmt} alt="comment" className="w-7 ml-1" />
        </span>
      </div>
  );
}

export default Description;
