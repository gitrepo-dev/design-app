import React from "react";
import { imgholderProps } from "./imgHolder.types";

const ImgHolder: React.FC<imgholderProps> = () => {
  return(
      <>
          <img src="https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-auto" />
      </>
  );
}

export default ImgHolder;
