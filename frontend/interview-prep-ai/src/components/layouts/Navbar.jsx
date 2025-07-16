import React from 'react';
import { Link } from "react-router-dom";
import ProfileInfoCard from "../Cards/ProfileInfoCard";


const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-8 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard" className="flex items-center space-x-2">
          
          <h2 className="pl-2 text-lg md:text-xl font-semibold text-[#FF9324] leading-5">
            Interview Prep AI
          </h2>
        </Link>

        <div className="pr-8">
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
