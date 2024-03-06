import React from "react";
import Clock from "../lib/Clock";
import CountryFlag from "../lib/CountryFlag";

const LocationDateFlag = () => {
  return (
    <div className=" ">
      <div className="w-full gap-10 flex items-center">
        <Clock />
        <div className=" hidden lg:block">
          <CountryFlag />
        </div>
      </div>
    </div>
  );
};

export default LocationDateFlag;
