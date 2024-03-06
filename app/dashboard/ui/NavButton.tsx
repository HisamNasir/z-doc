"use client";
import React from "react";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}
const NavButton = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-white uppercase  max-w-min -rotate-90  hover:bg-gray-700"
    >
      {text}
    </button>
  );
};

export default NavButton;
