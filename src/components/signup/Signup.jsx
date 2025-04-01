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

        const updatedData = {
            email: data.email,
            password: data.password,
        };

        console.log("🚀 Final Data to Pass:", updatedData);
        navigate("/signup2", { state: { updatedData } });
    };

    return (
        <div
            className="h-screen w-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/images/loginback.jpg')" }}
        >
            <form
                className="bg-gray-800 p-8 rounded-xl shadow-lg w-[350px] flex flex-col gap-4 bg-opacity-90"
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
                        {...register("email")}
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
                        {...register("password")}
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
                        {...register("password2")}
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
