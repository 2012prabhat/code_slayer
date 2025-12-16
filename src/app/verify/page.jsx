"use client";

import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import api from "@/lib/axiosInstance";
import Link from "next/link";

// OTP Validation Schema
const OtpSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, "OTP must be a 6-digit number")
    .required("OTP is required"),
});

export default function VerifyOtpPage() {
  const [apiError, setApiError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OtpSchema,
    onSubmit: async (values) => {
      setApiError(null);
      setSuccessMsg(null);
      setIsSubmitting(true);

      try {
        const res = await api.post("/auth/verify", {
          otp: values.otp,
        });

        setSuccessMsg("Your account has been verified successfully! 🎉");
        console.log("OTP verified:", res.data);
        // Optional: redirect to login or dashboard
      } catch (error) {
        setApiError(
          error?.response?.data?.message || "Invalid or expired OTP"
        );
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
          <div className="flex justify-center mb-4 text-mainCol">
            <ShieldCheck size={36} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Verify Your <span className="text-mainCol">Account</span>
          </h1>
          <p className="mt-2 text-zinc-400">
            Enter the 6-digit OTP sent to your email
          </p>
        </div>

        {/* Success Message */}
        {successMsg && (
          <div className="bg-green-900/30 border border-green-700 text-green-400 p-3 rounded-lg mb-5 text-sm text-center">
            {successMsg}
          </div>
        )}

        {/* Error Message */}
        {apiError && (
          <div className="bg-red-900/30 border border-red-700 text-red-400 p-3 rounded-lg mb-5 text-sm text-center">
            {apiError}
          </div>
        )}

        {/* OTP Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm mb-1 text-zinc-400">
              One-Time Password (OTP)
            </label>
            <div
              className={`flex items-center gap-2 bg-zinc-950 border rounded-xl px-4 py-3 transition-colors ${
                formik.touched.otp && formik.errors.otp
                  ? "border-red-500"
                  : "border-zinc-800 focus-within:border-mainCol"
              }`}
            >
              <Mail size={18} className="text-zinc-500" />
              <input
                id="otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                className="bg-transparent outline-none w-full text-lg tracking-widest text-white text-center"
                {...formik.getFieldProps("otp")}
              />
            </div>
            {formik.touched.otp && formik.errors.otp && (
              <p className="mt-1 text-xs text-red-500 text-center">
                {formik.errors.otp}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formik.isValid}
            className={`w-full py-3 rounded-xl font-semibold transition  ${
              isSubmitting || !formik.isValid
                ? "bg-zinc-600 cursor-not-allowed"
                : "bg-mainCol hover:opacity-90"
            }`}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-zinc-400 space-y-2">
          <p>
            Didn’t receive the OTP?{" "}
            <button className="text-mainCol hover:underline font-medium">
              Resend OTP
            </button>
          </p>
          <p>
            Back to{" "}
            <Link href="/login" className="text-mainCol hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
