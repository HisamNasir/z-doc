import React from "react";
interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}
const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <>
      <input
        className="p-2 px-4 w-full  rounded-lg bg-black focus:outline-none focus:bg-slate-900 text-white placeholder:text-gray-600"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
