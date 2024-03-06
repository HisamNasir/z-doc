import Image from "next/image";
import React from "react";

interface SubMenuProps {
  items: string[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div className=" p-2 w-full h-full text-white relative">
      <div className="flex " id="content">
        <div className="flex flex-col gap-2 items-center ">
          <Image
            className=" w-[6px] sm:w-[7px] lg:w-[8px] 3xl:w-[10px] h-auto"
            src={"/Assets/sidebarBtn/products.svg"}
            width={10}
            height={10}
            alt=""
          />

          <Image
            src={"/Assets/sidebarBtn/divider.svg"}
            className=" bg-black h-[1px] "
            width={18}
            height={1}
            alt=""
          />
        </div>
        <div className="flex items-end w-full pl-8">
          <Image
            className="w-[70px] lg:w-[90px] xl:w-[129px]  invert"
            alt=""
            width={129}
            height={60}
            src={"/Assets/ZDoc.svg"}
          />
        </div>
      </div>
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
