"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await authClient.signUp({
        email,
        password,
      });

      if (res.error) {
        setError(res.error.message);
        setLoading(false);
        return;
      }

      router.push("/home");
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen justify-center items-center p-6">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm p-6 rounded-xl shadow-lg border space-y-4"
      >
        <h1 className="text-2xl font-semibold">Create Account</h1>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <input
          className="w-full p-2 border rounded-md"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full p-2 border rounded-md"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-md"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a className="underline" href="/auth/login">Login</a>
        </p>
      </form>
    </div>
  );
}
