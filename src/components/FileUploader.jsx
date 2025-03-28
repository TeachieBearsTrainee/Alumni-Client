// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const SignUp2 = () => {
//   const location = useLocation();
//   const responseData = location.state?.updatedData || {};
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const [certificateFile, setCertificateFile] = useState(null);

//   const handleFileChange = (event) => {
//     setCertificateFile(event.target.files[0]);
//   };

//   const onSubmit = async (data) => {
//     try {
//       const finalData = { ...responseData, ...data };

//       if (!certificateFile) {
//         toast.error("Please upload your graduation certificate.");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("fullname", finalData.fullname);
//       formData.append("profilePic", finalData.profilePic);
//       formData.append("branch", finalData.branch);
//       formData.append("graduationYear", finalData.graduationYear);
//       formData.append("bio", finalData.bio);
//       formData.append("degree", finalData.degree);
//       formData.append("city", finalData.city);
//       formData.append("certificate", certificateFile);

//       console.log("🚀 Sending Data:", formData);

//       const token = localStorage.getItem("authToken");

//       await axios.post("https://alumni-fuia.onrender.com/api/v1/register", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//         withCredentials: true,
//       })
//       .then((response) => {
//         toast.success(response.data.message);
//         navigate("/login");
//       })
//       .catch((error) => {
//         console.error("❌ Axios Error:", error.response?.data);
//         toast.error(error.response?.data?.message || "Signup failed.");
//       });
//     } catch (error) {
//       console.error("❗ Unexpected Error:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       {/* Removed nested <form> */}
//       <div className="w-full max-w-4xl bg-gray-800 text-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

//         <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//           <div className="grid grid-cols-2 gap-6">
//             <div className="flex flex-col space-y-4">
//               <div>
//                 <label className="block text-gray-300">Full Name</label>
//                 <input className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("fullname", { required: "Please enter your name" })}
//                 />
//                 {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-300">Profile Picture (URL)</label>
//                 <input className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("profilePic")}
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-300">Branch</label>
//                 <input className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("branch", { required: "Please enter your branch" })}
//                 />
//                 {errors.branch && <p className="text-red-500">{errors.branch.message}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-300">Graduation Year</label>
//                 <input className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("graduationYear", { required: "Please enter your graduation year" })}
//                 />
//                 {errors.graduationYear && <p className="text-red-500">{errors.graduationYear.message}</p>}
//               </div>
//             </div>

//             <div className="flex flex-col space-y-4">
//               <div>
//                 <label className="block text-gray-300">Bio</label>
//                 <input className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("bio", { required: "Please enter a bio" })}
//                 />
//                 {errors.bio && <p className="text-red-500">{errors.bio.message}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-300">Degree</label>
//                 <input className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("degree")}
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-300">City</label>
//                 <input className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   {...register("city")}
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-300">Graduation Certificate (PDF/IMG)</label>
//                 <input type="file" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   accept=".pdf,.png,.jpg,.jpeg"
//                   onChange={handleFileChange}
//                 />
//                 {!certificateFile && <p className="text-red-500">Certificate is required.</p>}
//               </div>
//             </div>
//           </div>

//           <button type="submit"
//             className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp2;
