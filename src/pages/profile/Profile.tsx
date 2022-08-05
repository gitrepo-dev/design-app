import React from "react";
import { profileProps } from "./profile.types";
import ProfileHeader from 'components/profileheader'
import Profilefeader from 'components/profilefooter'

const Profile: React.FC<profileProps> = ({ foo }) => (
  <>
    <ProfileHeader />
    <Profilefeader />
  </>
);

export default Profile;
