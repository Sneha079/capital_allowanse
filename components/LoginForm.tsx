"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    let isValid = true;
    if (!email.trim()) {
      setEmailError("Enter your email or employee number.");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Enter your password.");
      isValid = false;
    }

    if (!isValid) return;
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact_email: email, password }),
      });
      const data = await response.json();
      

      if (!data.success) {
        setPasswordError(data.message);
        return;
      }
      router.push("/client");
    } catch (error) {
      console.error("Login failed:", error);
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#f3f5f7] flex justify-center items-center px-4">
      <div className="w-full max-w-[500px] bg-white rounded-2xl p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-medium">Sign in</h2>

          <div className="flex flex-col gap-2 mt-5">
            <label>Enter your email</label>

            <input
              type="text"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border rounded-xl outline-none ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-500">{emailError}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={`w-full p-3 border rounded-xl outline-none ${
                passwordError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {passwordError && (
              <p className="mt-1 text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3 bg-teal-700 text-white rounded-xl font-semibold cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
