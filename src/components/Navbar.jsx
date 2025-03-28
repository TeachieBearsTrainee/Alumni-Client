import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Navbar = () => {
 
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

    const logoutAlumini = () => {
        
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      
        navigate("/login")
        toast.success("User logged out successfully");
      };
      
    return (
        <div className="navbar w-full z-50 absolute py-[10px] top-0 left-0 bg-white/20 backdrop-blur-md ">
            <div className="h-16 px-6 lg:px-20 py-4 flex justify-between items-center text-white">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <RiGraduationCapFill className="size-8" />
                    <h1 className="text-2xl lg:text-3xl">Alumni</h1>
                </div>

                <div className="flex items-center gap-4 lg:hidden">
                    <a href="#" className="hover:text-blue-400 text-xl">
                        <FaRegUser />
                    </a>
                    <a href="#" className="hover:text-blue-400 text-xl">
                        <BiBell />
                    </a>
                    {isOpen ? (
                        <AiOutlineClose
                            className="text-2xl cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <AiOutlineMenu
                            className="text-2xl cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>


                <nav className="hidden lg:flex items-center gap-x-6">
                    <Link to="/home" className="hover:text-blue-400">Home</Link>
                    <Link to="/about" className="hover:text-blue-400">About Us</Link>
                    {/* <a href="#" className="hover:text-blue-400">Subscription</a> */}
                    <Link to="/aluminiConnections" className="hover:text-blue-400">Alumni Connections</Link>

                    {/* Icons
                    <a href="#" className="hover:text-blue-400 text-xl">
                        <FaRegUser />
                    </a>
                    <a href="#" className="hover:text-blue-400 text-xl">
                        <BiBell /> 
                    </a> */}

                    {/* Login Button */}
                        <button onClick={logoutAlumini} className="login-button px-5 py-2 bg-[#0f393b] text-white rounded-3xl">
                            Logout
                        </button> 
                </nav>
            </div>

            {/* Mobile Menu (Visible below 850px) */}
            <div
                className={`lg:hidden flex flex-col items-center gap-4 bg-[#0f393b] text-white py-5 transition-all ${isOpen ? "block" : "hidden"
                    }`}
            >
                <a href="#" className="hover:text-blue-400">Home</a>
                <a href="#" className="hover:text-blue-400">About Us</a>
                <a href="#" className="hover:text-blue-400">Subscription</a>
                <a href="#" className="hover:text-blue-400">Alumni Connections</a>
                <button className="login-button px-5 py-2 bg-white text-[#0f393b] rounded-3xl">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
