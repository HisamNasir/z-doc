import Image from "next/image";
import React from "react";

type Props = {};

const ProfileButton = (props: Props) => {
  return (
    <Image
      width={21}
      height={25}
      alt=""
      className="w-[21px] h-[25px]"
      src={"/Assets/profileLogo.svg"}
    />
  );
};

export default ProfileButton;
