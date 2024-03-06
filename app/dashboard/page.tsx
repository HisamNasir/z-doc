import React from "react";
import Sidebar from "./ui/Sidebar";
import Layout from "./layout";
import Image from "next/image";
import LocationDateFlag from "./ui/LocationDateFlag";
import ProfileButton from "./ui/ProfileButton";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Layout>
      <div className="relative h-screen">
        <nav className=" py-11 px-16 ">
          <div className=" relative">
            <div className=" h-[59px] flex relative items-center">
              <Image
                className="fixed hidden sm:flex w-[70px] lg:w-[90px] xl:w-[129px]"
                alt=""
                width={129}
                height={60}
                src={"/Assets/ZDoc.svg"}
              />
              <Image
                className=" w-[120px] absolute hidden left-[50%] right-[50%] bottom-0  md:flex items-end justify-center lg:w-[143px] xl:w-[183px]"
                alt=""
                width={204}
                height={50}
                src={"/Assets/avav.svg"}
              />
              <div className="flex items-center gap-4 md:gap-6 lg:gap-10 absolute right-0">
                <LocationDateFlag />
                <ProfileButton />
              </div>
            </div>
            <div className="absolute top-16 right-0">
              <Image
                className="w-[143px] md:w-[183px]"
                alt=""
                width={183}
                height={40}
                src={"/Assets/zima.svg"}
              />
            </div>
            <h1 className="absolute top-28 right-0 animate-pulse-slow">
              try for free
            </h1>
          </div>
        </nav>
        <Image
          className=" absolute bottom-0 right-0 w-5/6 sm:w-[510px] xl:w-[370px] 2xl:w-[541px]"
          alt=""
          width={541}
          height={841}
          src={"/Assets/mainpanel.png"}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
