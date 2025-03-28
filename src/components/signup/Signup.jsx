import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("✅ Collected Data:", data);

        // Remove `password2` and store the necessary fields
        const updatedData = {
            email: data.email,
            password: data.password, // Store password for the backend
        };

        console.log("🚀 Final Data to Pass:", updatedData);
        navigate("/signup2", { state: { updatedData } });
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-900">
            <form
                className="bg-gray-800 p-8 rounded-xl shadow-lg w-[350px] flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-semibold text-white text-center">
                    Sign Up
                </h2>

                {/* Email Field */}
                <div className="flex flex-col">
                    <label className="text-gray-300">Email</label>
                    <input
                        type="email"
                        className={`p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 ${
                            errors.email ? "border-2 border-red-500" : ""
                        }`}
                        {...register("email", {
                            // required: "Please enter email",
                            // minLength: { value: 5, message: "Minimum length is 5" },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col">
                    <label className="text-gray-300">Password</label>
                    <input
                        type="password"
                        className={`p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 ${
                            errors.password ? "border-2 border-red-500" : ""
                        }`}
                        {...register("password", {
                            // required: "Please enter password",
                            // minLength: { value: 8, message: "Minimum length is 8" },
                            // maxLength: { value: 12, message: "Maximum length is 12" },
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col">
                    <label className="text-gray-300">Confirm Password</label>
                    <input
                        type="password"
                        className={`p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 ${
                            errors.password2 ? "border-2 border-red-500" : ""
                        }`}
                        {...register("password2", {
                            // required: "Please confirm your password",
                            // minLength: { value: 8, message: "Minimum length is 8" },
                            // maxLength: { value: 18, message: "Maximum length is 18" },
                            // validate: (value) =>
                            //     value === watch("password") || "Passwords do not match",
                        })}
                    />
                    {errors.password2 && (
                        <p className="text-red-500 text-sm">{errors.password2.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
                >
                    Next
                </button>
            </form>
        </div>
    );
};

export default Signup;
