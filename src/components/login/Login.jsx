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
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://alumni-backend-kjdc.onrender.com/api/v1/login", data);

      const { accessToken, refreshToken } = response.data.data;

      // Store tokens securely
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      toast.success(response.data.message || "Login successful!");
      navigate("/home");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong. Please try again.";
      console.error("Login Error:", err);

      // Handle potential network errors
      if (err.message === "Network Error") {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="flex h-screen justify-center items-center relative">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-white w-auto h-4/5">
          {/* Welcome Section */}
          <div className="flex flex-col items-center text-6xl font-medium gap-1">
            <h1 className="text-white">Hello</h1>
            <h1>Welcome Back</h1>
          </div>

          {/* Sign In Title */}
          <div className="flex flex-col items-center text-3xl gap-3 mt-10">
            <h2>Sign In</h2>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 mt-5">
            {/* Email Input */}
            <div className="flex flex-col">
              <label>Email:</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                className={`w-full bg-[#262626] text-white h-12 mt-3 rounded-[0.3rem] px-3  
                  ${errors.email ? "border-red-500 border-2" : ""}`}
                placeholder="Enter Email Address"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="flex flex-col">
              <label>Password:</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
                className={`w-full h-12 mt-3 rounded-[0.3rem] px-3  
                  ${errors.password
                    ? "border-red-500 border-2"
                    : "bg-[#262626] text-white"
                  }`}
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Submitting..." : "Submit"}
              className={`w-full h-12 mt-3 rounded-[0.3rem] ${
                isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-[#262626]"
              }`}
            />

            {/* Signup Link */}
            <Link to="/signup">
              <button
                type="button"
                className="text-white mt-5 text-center hover:underline"
              >
                Don't have an account? Sign up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;