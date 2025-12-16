"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

// --- 1. Validation Schema using Yup ---
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

// --- 2. Mock API Call Function ---
// Replace this with your actual API endpoint logic (e.g., using fetch or axios)
const mockLoginApi = (values) => {
  return new Promise((resolve, reject) => {
    // Simulate a network delay
    setTimeout(() => {
      if (values.email === "test@example.com" && values.password === "password123") {
        resolve({ success: true, user: { id: 1, email: values.email } });
      } else if (values.email === "error@example.com") {
        reject({ success: false, message: "Server error occurred. Please try again later." });
      } else {
        reject({ success: false, message: "Invalid email or password." });
      }
    }, 1500);
  });
};

export default function LoginPage() {
  const [apiError, setApiError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- 3. Formik Hook ---
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setApiError(null);
      setIsSubmitting(true);
      try {
        const response = await mockLoginApi(values);
        // Handle successful login (e.g., store token, redirect user)
        console.log("Login successful:", response);
        alert(`Login Successful for ${response.user.email}!`); // Use a proper notification system in a real app
      } catch (error) {
        // Handle API errors
        console.error("Login failed:", error);
        setApiError(error.message || "An unexpected error occurred during login.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // Helper to check if an input field has been touched AND has an error
  const getFieldClasses = (name) =>
    formik.touched[name] && formik.errors[name]
      ? "border-red-500 focus-within:border-red-500" // Error state
      : "border-zinc-800 focus-within:border-mainCol"; // Default/Focus state

  // Note: Assuming 'mainCol' is defined in your Tailwind config or globally as the theme color.

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
            Code<span className="text-mainCol">Slayer</span>
          </h1>
          <p className="mt-2 text-zinc-400">Login to continue your slaying journey ⚔️</p>
        </div>

        {/* Google Login (Remains static as it's typically an external redirect) */}
        <button className="w-full flex items-center justify-center gap-3 border border-zinc-700 hover:border-mainCol/70 py-3 rounded-xl mb-6 transition">
          <FcGoogle size={22} />
          <span className="font-medium text-white">Continue with Google</span>
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

        {/* Login Form using Formik's handleSubmit */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
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
                // --- Formik props for controlled input ---
                {...formik.getFieldProps("email")}
              />
            </div>
            {/* Validation Error Message */}
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
                // --- Formik props for controlled input ---
                {...formik.getFieldProps("password")}
              />
            </div>
            {/* Validation Error Message */}
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-400">
              <input
                id="rememberMe"
                type="checkbox"
                className="accent-mainCol"
                // --- Formik props for checkbox ---
                {...formik.getFieldProps("rememberMe")}
              />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-mainCol hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formik.isValid}
            className={`w-full py-3 rounded-xl font-semibold transition text-white ${
              isSubmitting || !formik.isValid
                ? "bg-zinc-600 cursor-not-allowed" // Disabled state
                : "bg-mainCol hover:opacity-90" // Active state
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-zinc-400">
          Don’t have an account?{" "}
          <Link href="/register" className="text-mainCol hover:underline font-medium">
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
}