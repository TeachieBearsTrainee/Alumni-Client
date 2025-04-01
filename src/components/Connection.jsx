import React from "react";
import { IoIosSearch } from "react-icons/io";
import ConnectionRequests from "./ConnectionRequests";

const Connection = () => {
  const newLocal = ">@msmccoy";
  return (
    <div className="h-screen w-full">
      <div className="h-[90%] ">
        <div className="relative w-full bg-[#303030] flex h-12 mt-3 rounded-[0.3rem]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-white">
            <IoIosSearch />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter Name"
            required
            className="pl-12 bg-transparent text-white w-full py-2 px-3"
          />
        </div>
        <div className="mt-7">
          <h4 className="text-white ">Requests come</h4>
          <ConnectionRequests username = {"Rajnish Manda"} userid = {"@msmccoy"}/>
          <ConnectionRequests username = {"Rajnish Manda"} userid = {"@msmccoy"}/>
          <ConnectionRequests username = {"Rajnish Manda"} userid = {"@msmccoy"}/>
          <ConnectionRequests username = {"Rajnish Manda"} userid = {"@msmccoy"}/>
          <ConnectionRequests username = {"Rajnish Manda"} userid = {"@msmccoy"}/>
          <ConnectionRequests username = {"Rajnish Manda"} userid = {"@msmccoy"}/>

        </div>
      </div>


    </div>
  );
};

export default Connection;
