import React from "react";

const CategoryCard = () => {
  return (
    <div className="min-w-[110px]">
      <div className="bg-white">
        <img
          src="mobileB/shirt.png"
          className="w-full h-[82px] object-contain"
          alt="shirt"
        />
        <h4 className="text-center pb-2 text-sm">Jerseys</h4>
      </div>
      <div className="bg-white mt-1">
        <img
          src="mobileB/shirt.png"
          className="w-full h-[82px] object-contain"
          alt="shirt"
        />
        <h4 className="text-center pb-2 text-sm">Jerseys</h4>
      </div>
    </div>
  );
};

export default CategoryCard;
