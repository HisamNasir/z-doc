import Image from "next/image";
import React from "react";

interface SubMenuProps {
  items: string[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div className=" p-2 w-full h-full text-white relative">
      <Image
        width={1000}
        height={3000}
        src={"/Assets/sidebarSub/mainpanel.png"}
        className="flex h-[95%] w-auto max-h-full max-w-full "
        alt={""}
      />
      <button className=" absolute bottom-4 hover:text-blue-400 transition-all duration-500 right-4 uppercase text-xs tracking-widest flex items-center gap-2">
        <span>all products</span>
        <Image
          className=" h-auto"
          width={29}
          height={12}
          alt=""
          src={"/Assets/sidebarSub/arrow.png"}
        />
      </button>
    </div>
  );
};

export default SubMenu;
