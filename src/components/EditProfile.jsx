import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Rajnish Manda");
  const [tagline, setTagline] = useState("I Love Alumini");
  const [profilePic, setProfilePic] = useState("/images/profile.png");

 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="py-[10%] flex flex-col items-center relative h-[45%] text-white">
      
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-200 text-3xl"
      >
        {isEditing ? <IoClose /> : <FaRegEdit />}
      </button>

      
      <div className="flex flex-col items-center justify-center">
        
        <label htmlFor="profile-pic" className="cursor-pointer">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-400"
          />
        </label>
        {isEditing && (
          <input id="profile-pic" type="file" className="hidden" onChange={handleImageChange} />
        )}

        {/* Name */}
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 p-2 rounded-md border border-gray-600 w-48 text-center text-white mt-2"
          />
        ) : (
          <h1 className="font-medium text-xl mt-3">{name}</h1>
        )}

        {/* Tagline */}
        {isEditing ? (
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="bg-gray-800 p-2 rounded-md border border-gray-600 w-48 text-center text-white mt-2"
          />
        ) : (
          <p className="text-sm">{tagline}</p>
        )}

        {/* Save Button (Only in Edit Mode) */}
        {isEditing && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-3"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
        )}
      </div>

      <div className="absolute w-full h-[2px] bg-[#3C3C3C] bottom-0"></div>
    </div>
  );
};

export default EditProfile;
