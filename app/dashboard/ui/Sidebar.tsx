"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubMenu from "./SubMenu";
import Image from "next/image";

interface LeftSidebarProps {}

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [subMenuItems, setSubMenuItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleButtonClick = (items: string[]) => {
    setSubMenuItems(items);
    setShowSubMenu(!showSubMenu);
  };

  const submenuRef = useRef<HTMLDivElement>(null);

  const handleDivClick = (items: string[]) => {
    setSubMenuItems(items);
    setShowSubMenu((prev) => !prev); // Toggle submenu visibility
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      submenuRef.current &&
      !submenuRef.current.contains(event.target as Node)
    ) {
      setShowSubMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex  h-full max-h-screen ">
      <div className=" bg-black w-[34px] flex  h-full min-h-screen ">
        <div className=" grid grid-flow-row py-2 w-full justify-center items-center">
          <div
            className=" text-white  text-xs cursor-pointer flex justify-center"
            onClick={() =>
              handleButtonClick([
                "Submenu 1 - Item 1",
                "Submenu 1 - Item 2",
                "Submenu 1 - Item 3",
              ])
            }
          >
            <Image
              className=" w-[6px] sm:w-[7px] lg:w-[6px] 2xl:w-[10px] h-auto"
              src={"/Assets/sidebarBtn/products.svg"}
              width={10}
              height={10}
              alt=""
            />
          </div>

          <Image
            src={"/Assets/sidebarBtn/divider.svg"}
            className=" bg-black h-[1px] "
            width={18}
            height={1}
            alt=""
          />
          <div
            className=" text-white  text-xs cursor-pointer flex justify-center"
            onClick={() =>
              handleButtonClick([
                "Submenu 2 - Item 1",
                "Submenu 2 - Item 2",
                "Submenu 2 - Item 3",
              ])
            }
          >
            <Image
              className=" w-[6px] sm:w-[7px] lg:w-[6px] 2xl:w-[10px] h-auto"
              src={"/Assets/sidebarBtn/solutions.svg"}
              width={10}
              height={10}
              alt=""
            />
          </div>

          <Image
            src={"/Assets/sidebarBtn/divider.svg"}
            className=" bg-black h-[1px] "
            width={18}
            height={1}
            alt=""
          />
          <div
            className=" text-white  text-xs cursor-pointer flex justify-center"
            onClick={() =>
              handleButtonClick([
                "Submenu 3 - Item 1",
                "Submenu 3 - Item 2",
                "Submenu 3 - Item 3",
              ])
            }
          >
            <Image
              className=" w-[6px] sm:w-[7px] lg:w-[6px] 2xl:w-[10px] h-auto"
              src={"/Assets/sidebarBtn/documentations.svg"}
              width={10}
              height={10}
              alt=""
            />
          </div>

          <Image
            src={"/Assets/sidebarBtn/divider.svg"}
            className=" bg-black h-[1px] "
            width={18}
            height={1}
            alt=""
          />
          <div
            className=" text-white  text-xs cursor-pointer flex justify-center"
            onClick={() =>
              handleButtonClick([
                "Submenu 3 - Item 1",
                "Submenu 3 - Item 2",
                "Submenu 3 - Item 3",
              ])
            }
          >
            <Image
              className=" w-[6px] sm:w-[7px] lg:w-[6px] 2xl:w-[10px] h-auto"
              src={"/Assets/sidebarBtn/signature.svg"}
              width={10}
              height={10}
              alt=""
            />
          </div>

          <Image
            src={"/Assets/sidebarBtn/divider.svg"}
            className=" bg-black h-[1px] "
            width={18}
            height={1}
            alt=""
          />
          <div
            className=" text-white  text-xs cursor-pointer flex justify-center"
            onClick={() =>
              handleButtonClick([
                "Submenu 3 - Item 1",
                "Submenu 3 - Item 2",
                "Submenu 3 - Item 3",
              ])
            }
          >
            <Image
              className=" w-[6px] sm:w-[7px] lg:w-[6px] 2xl:w-[10px] h-auto"
              src={"/Assets/sidebarBtn/industries.svg"}
              width={10}
              height={10}
              alt=""
            />
          </div>

          <Image
            src={"/Assets/sidebarBtn/divider.svg"}
            className=" bg-black h-[1px] "
            width={18}
            height={1}
            alt=""
          />
          <div
            className=" text-white  text-xs cursor-pointer flex justify-center"
            onClick={() =>
              handleButtonClick([
                "Submenu 3 - Item 1",
                "Submenu 3 - Item 2",
                "Submenu 3 - Item 3",
              ])
            }
          >
            <Image
              className=" w-[6px] sm:w-[7px] lg:w-[6px] 2xl:w-[10px] h-auto"
              src={"/Assets/sidebarBtn/encryption.svg"}
              width={10}
              height={10}
              alt=""
            />
          </div>

          <Image
            src={"/Assets/sidebarBtn/divider.svg"}
            className=" bg-black h-[1px] "
            width={18}
            height={1}
            alt=""
          />
          <div
            className=" text-white  text-xs cursor-pointer flex justify-center"
            onClick={() =>
              handleButtonClick([
                "Submenu 3 - Item 1",
                "Submenu 3 - Item 2",
                "Submenu 3 - Item 3",
              ])
            }
          >
            <Image
              className=" w-[6px] sm:w-[7px] lg:w-[6px] 2xl:w-[10px] h-auto"
              src={"/Assets/sidebarBtn/pricing.svg"}
              width={10}
              height={10}
              alt=""
            />
          </div>
        </div>
      </div>
      <motion.div
        ref={submenuRef}
        className="w-[262px] bg-black z-10 py-2"
        initial={false}
        animate={{ x: showSubMenu ? -30 : -300 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence>
          {showSubMenu && <SubMenu key="submenu" items={subMenuItems} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LeftSidebar;
