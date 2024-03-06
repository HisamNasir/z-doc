import Image from "next/image";
import React from "react";

interface SubMenuProps {
  items: string[];
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div className=" p-2 pr-3 flex flex-col justify-between pb-9 w-full h-full text-white relative ">
      <div className="flex relative" id="content">
        <div className="flex flex-col gap-3.5 items-center  ">
          <Image
            className=" w-[6px] sm:w-[7px] lg:w-[8px] 2xl:w-[10px] h-auto"
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
        <div className="flex w-full justify-center absolute bottom-0">
          <Image
            className="w-[70px] lg:w-[90px] xl:w-[129px]  invert"
            alt=""
            width={129}
            height={60}
            src={"/Assets/ZDoc.svg"}
          />
        </div>
      </div>
      <h1 className=" text-4xl tracking-[0.2em] text-[#ffffff37]">Products</h1>
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col gap-3">
          <p className="text-end  text-[10px]">signature</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">ELECTRONIC SIGNATURE</h3>
              <p className="  text-[#ffffff57]">
                WORLDS MOST SECURE WAY TO SIGN AND SEND
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">E-WITNESS</h3>
              <p className="  text-[#ffffff57]">
                WITNESS & SIGN CONFIDENTIAL AND HIGH VALUE AGREEMENTS/CONTRACTS
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">IDENTITY VERIFICATION</h3>
              <p className="  text-[#ffffff57]">
                WORKING SEAMLESSLY WITH AES 256-BIT ENCRYPTION AND ZIMO MEET
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <p className="text-end text-[10px] ">CONTRACTS</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">CONTRACT/AGREEMENT MANAGEMENT</h3>
              <p className="  text-[#ffffff57] text-right">
                ORGANISED, AUTOMATED DUCUMENT WORKFLOWS
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">DOCUMENT GENERATION</h3>
              <p className="  text-[#ffffff57]">
                GENERATE DOCUMENTS SEAMLESSLY THROUGH YOUR DEDICATED PORTAL
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">DATA SECURITY</h3>
              <p className="  text-[#ffffff57]">
                ALL SIGNATURES, CONTRACTS, AGREEMENTS, DOCUMENTS AND WITNESS
                STATEMENTS KEPT UNDER AES 256-BIT ENCRYPTION FOR THE DURATION OF
                YOUR MEMBERSHIP
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <p className="text-end text-[10px] ">HISTORY</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">DOC.SAFE</h3>
              <p className="  text-[#ffffff57]">
                SEARCH, VIEW, DOWNLOAD AND SHARE EVERY SIGNATURE, CONTRACT,
                AGREEMENT, AND DOCUMENT FROM YOUR PORTAL
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <p className="text-end text-[10px] ">more</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">PAYMENTS</h3>
              <p className="  text-[#ffffff57]">
                AGREE, SIGN AND MAKE PAYMENT(S) IN A SINGLE CLICK
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">CLICKWRAPS</h3>
              <p className="  text-[#ffffff57]">
                CAPTURE CONSENT WITH A SINGLE CLICK
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className=" text-[10px]">WEB FORMS</h3>
              <p className="  text-[#ffffff57]">
                INCORPORATE DATA COLLECTION AND SPEED UP SIGNING
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className=" fixed bottom-4 hover:text-blue-400 transition-all duration-500 right-4 uppercase text-xs tracking-widest flex items-center gap-2">
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
