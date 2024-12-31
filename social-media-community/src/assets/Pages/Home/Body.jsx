import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { CiCalendar, CiGrid42, CiUser } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
import TabContainer from "../ClubDetails/TabContainer";

const Body = () => {


  return (
    <>
      {/* Main section */}
      <div className="flex flex-row gap-8">
        {/* About us section */}
        <div className="text-start px-10 pb-10 shadow-lg">
          <h1 className="text-3xl font-bold my-4">About Us</h1>
          <p className="flex justify-start items-center gap-3">
            <CiCalendar></CiCalendar> Established on 12 December 2022
          </p>
          <p className="flex justify-start items-center gap-3">
            <CiUser></CiUser> Members: 100
          </p>
          <p className="flex justify-start items-center gap-3">
            <CiGrid42></CiGrid42> Departments: 3
          </p>
          <p className="flex justify-start items-center gap-3">
            <BsCalendar2Event></BsCalendar2Event> Events Did: 3
          </p>
          <h4 className="font-bold text-xl text-start py-7">
            Contact Information
          </h4>
          <p className="flex justify-start items-center gap-3">
            <FaFacebook className="text-gray-600"></FaFacebook> Visit on
            Facebook
          </p>
          <button className="bg-black text-white  font-semibold  py-1.5 px-4 rounded my-5">
            Register Now
          </button>
        </div>
        <div>
        <TabContainer></TabContainer>
        </div>
      </div>
    </>
  );
};

export default Body;
