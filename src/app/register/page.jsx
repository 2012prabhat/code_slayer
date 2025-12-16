"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// Assuming you created this file at '@/lib/axiosInstance.js'
import api from '@/lib/axiosInstance'; 

// --- 1. Validation Schema using Yup ---
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username cannot be longer than 30 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirming your password is required"),
});


function SignupPage() {
  const [apiError, setApiError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper to apply error styling
  const getFieldClasses = (name) =>
    formik.touched[name] && formik.errors[name]
      ? "border-red-500 focus-within:border-red-500"
      : "border-zinc-800 focus-within:border-mainCol";


  // --- 3. Formik Hook ---
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setApiError(null);
      setIsSubmitting(true);
      
      // Prepare the payload (exclude confirmPassword)
      const registrationData = {
          username: values.username,
          email: values.email,
          password: values.password,
      };

      try {
        // CORRECT USAGE: api.post(URL_STRING, DATA_OBJECT)
        const response = await api.post('/auth/register', registrationData); 
        
        // Handle successful registration response
        console.log("Registration successful:", response.data);
        alert(`Account created successfully for ${response.data.user.username}!`);
        // Optional: Redirect the user here
        
      } catch (error) {
        console.error("Registration failed:", error);
        
        // BETTER ERROR HANDLING: Access nested message from the API response
        let errorMessage = "An unexpected error occurred during signup.";
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message; // e.g., "Email already exists"
        } else if (error.message) {
            errorMessage = error.message; // e.g., "Network Error"
        }
        setApiError(error?.response?.data?.error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 shadow-xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Join <span className="text-mainCol">CodeSlayer</span>
          </h1>
          <p className="mt-2 text-zinc-400">Create your account and start slaying problems</p>
        </div>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center gap-3 border border-zinc-700 hover:border-mainCol/70 py-3 rounded-xl mb-6 transition">
          <FcGoogle size={22} />
          <span className="font-medium text-white">Sign up with Google</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-zinc-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* API Error Message */}
        {apiError && (
          <div className="bg-red-900/30 border border-red-700 text-red-400 p-3 rounded-lg mb-5 text-sm">
            {apiError}
          </div>
        )}

        {/* Signup Form using Formik's handleSubmit */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm mb-1 text-zinc-400">
              Username
            </label>
            <div
              className={`flex items-center gap-2 bg-zinc-950 border rounded-xl px-4 py-3 transition-colors ${getFieldClasses(
                "username"
              )}`}
            >
              <User size={18} className="text-zinc-500" />
              <input
                id="username"
                type="text"
                placeholder="Your unique username"
                className="bg-transparent outline-none w-full text-sm text-white"
                {...formik.getFieldProps("username")}
              />
            </div>
            {formik.touched.username && formik.errors.username && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-zinc-400">
              Email
            </label>
            <div
              className={`flex items-center gap-2 bg-zinc-950 border rounded-xl px-4 py-3 transition-colors ${getFieldClasses(
                "email"
              )}`}
            >
              <Mail size={18} className="text-zinc-500" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none w-full text-sm text-white"
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm mb-1 text-zinc-400">
              Password
            </label>
            <div
              className={`flex items-center gap-2 bg-zinc-950 border rounded-xl px-4 py-3 transition-colors ${getFieldClasses(
                "password"
              )}`}
            >
              <Lock size={18} className="text-zinc-500" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none w-full text-sm text-white"
                {...formik.getFieldProps("password")}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm mb-1 text-zinc-400">
              Confirm Password
            </label>
            <div
              className={`flex items-center gap-2 bg-zinc-950 border rounded-xl px-4 py-3 transition-colors ${getFieldClasses(
                "confirmPassword"
              )}`}
            >
              <Lock size={18} className="text-zinc-500" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none w-full text-sm text-white"
                {...formik.getFieldProps("confirmPassword")}
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formik.isValid}
            className={`w-full py-3 rounded-xl font-semibold transition text-white ${
              isSubmitting || !formik.isValid
                ? "bg-zinc-600 cursor-not-allowed"
                : "bg-mainCol hover:opacity-90"
            }`}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="text-mainCol hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignupPage;