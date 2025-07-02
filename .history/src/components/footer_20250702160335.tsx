import React from "react";

export default function Footer() {
  return (
    <div className="w-full top-0 bg-[#535353] text-white">
      <div className="flex items-center justify-between px-20 py-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-8 md:gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
            <h3 className="text-2xl font-bold">SIRI SERVICE</h3>

            <p className="text-base">&copy; 2025 All Rights Reserved.</p>
            {/* Social Icons */}
          </div>
          <div className="flex flex-col gap-2 text-center md:text-right">
            <p className="font-medium text-lg  cursor-pointer">
              Xiangda Village, Xaysettha District, Vientiane Capital
            </p>
            <p className="font-medium text-lg  cursor-pointer">
              Sales@siriservice.com
            </p>
            <p className="font-medium text-lg  cursor-pointer">
              +856-20-9437-1405
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
