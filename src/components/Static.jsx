// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const StaticSignup = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const staticData = {
//       fullname: "John Doe",
//       email: "1@gmail.com",
//       password: "rajnish@123",
//       graduationCertificate: "https://example.com/certificate.pdf",
//       branch: "Computer Science",
//       graduationYear: "2024",
//       bio: "Passionate about technology and AI.",
//       degree: "B.Tech",
//       city: "New York",
//     };

//     try {
//       const token = localStorage.getItem("authToken"); // Get token if needed

//       const response = await axios.post(
//         "https://alumni-fuia.onrender.com/api/v1/register",
//         staticData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       console.log("response----------->",response)
//       toast.success(response.data.message);
//       navigate("/login");
//     } catch (error) {
//       console.error("Signup Error:", error);
//       toast.error(error.response?.data?.message || "Signup failed.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold text-center mb-4">Static Signup</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
//           >
//             Submit Static Data
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StaticSignup;