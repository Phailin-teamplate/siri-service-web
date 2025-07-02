import React from "react";



export default function Footer() {
  return (
    <footer
      className=
        "bg-[#535353] text-white py-15 px-4"
     
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-12">
        {/* Left Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
          <h3 className="text-xl font-bold">SIRI SERVICE</h3>
       
          <p className="text-sm">&copy; 2025 All Rights Reserved.</p>
          {/* Social Icons */}
          
        </div>
        <div className="flex flex-col gap-2 text-center md:text-right">
          <h4 className="font-bold text-lg mb-2 cursor-pointer">Xiangda Village, Xaysettha District, Vientiane Capital</h4>
          <h4 className="font-bold text-lg mb-2 cursor-pointer">Sales@siriservice.com</h4>
          <h4 className="font-bold text-lg mb-2 cursor-pointer">+856-20-9437-1405</h4>
        </div>
      </div>
    </footer>
  );
}
