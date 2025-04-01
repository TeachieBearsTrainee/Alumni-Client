import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://alumni-backend-kjdc.onrender.com/api/v1/login", data);

      const { accessToken, refreshToken } = response.data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      toast.success(response.data.message || "Login successful!");
      navigate("/home");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      console.error("Login Error:", err);
      if (err.message === "Network Error") {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div 
      className="flex h-screen justify-center items-center px-4 sm:px-6 lg:px-8 bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/loginback.jpg')" }}
    >
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg bg-opacity-90">
        <div className="text-white text-center text-3xl sm:text-4xl font-medium mb-6">
          <h1>Hello</h1>
          <h1>Welcome Back</h1>
        </div>

        <h2 className="text-white text-center text-xl sm:text-2xl mb-4">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-white">Email:</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full bg-gray-800 text-white h-12 mt-2 rounded px-3 ${errors.email ? "border-red-500 border-2" : ""}`}
              placeholder="Enter Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-white">Password:</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters." },
              })}
              className={`w-full h-12 mt-2 rounded px-3 ${errors.password ? "border-red-500 border-2" : "bg-gray-800 text-white"}`}
              placeholder="Enter Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting..." : "Submit"}
            className={`w-full h-12 rounded text-white font-bold transition-all duration-200 ${isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          />
        </form>

        <div className="text-center mt-5">
          <Link to="/signup" className="text-blue-400 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
