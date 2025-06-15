import React from "react";
import {PropertyProps } from "@/interfaces";

const Card: React.FC<PropertyProps> = ({ name, price, image, rating }) => {
  return (
    <div className="rounded-2xl shadow-lg p-4 bg-white max-w-sm">
      {image && <img src={image} alt={name} className="rounded-xl mb-4" />}
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-500 mb-2">Price: ${price}</p>
      <p className="mb-2">Rating: {rating} <span className="text-yellow-500 mb-2">★</span></p>
    </div>
  );
};

export default Card;
