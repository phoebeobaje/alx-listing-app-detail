import { PillProps } from "@/interfaces";
import React from "react";


const Pill: React.FC<PillProps> = ({ label, selected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2 rounded-full text-sm font-medium border transition-colors duration-200
        ${selected
          ? "bg-black text-white border-black"
          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"}
      `}
    >
      {label}
    </button>
  );
};
export default Pill;
