import React from "react";
import { profileheaderProps } from "./profileHeader.types";

const ProfileHeader: React.FC<profileheaderProps> = () => {
  return(
      <div className="profileHeader flex justify-center py-3 md:pt-14 md:pb-5">
          <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&h=200&q=50" alt="jay" className="rounded-full" />
      </div>
  );
}

export default ProfileHeader;
