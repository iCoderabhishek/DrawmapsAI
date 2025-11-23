"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await authClient.signIn({
        email,
        password,
      });

      if (res.error) {
        setError(res.error.message);
        setLoading(false);
        return;
      }

      router.push("/home"); // redirect after login
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen justify-center items-center p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-6 rounded-xl shadow-lg border space-y-4"
      >
        <h1 className="text-2xl font-semibold">Login</h1>

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
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <a className="underline" href="/auth/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}
