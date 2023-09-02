import React from "react";
import prodImage from "../assets/product.png";

const ProductCard = ({product}) => {

  return (
    <div className="w-[269px] border-[1px] rounded-[8px] border-[rgba(38,57,237,0.20)] p-3 pb-[12px] cursor-pointer hover:scale-110">
      <div className="flex items-center justify-center">
        <img src={product.image} className="h-[140px] object-contain" />
      </div>
      <div className="px-[12px] pt-[20px]">
        <p className="text-[18px] font-[600]">{product.prodname}</p>
        <p className="text-[14px] text-[#757575] font-[400]">{product.company}</p>
      </div>
    </div>
  );
};

export default ProductCard;
