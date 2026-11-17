
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const result = signup(
      form.name,
      form.email,
      form.password
    );

    setLoading(false);

    if (!result.success) {
      setError(result.message || "Unable to create account.");
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <main className="flex min-h-[85vh] items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-5 py-14">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-violet-100 lg:grid-cols-2">

        <div className="hidden flex-col justify-between bg-gradient-to-br from-violet-700 to-indigo-600 p-12 text-white lg:flex">
          <div>
            <div className="text-3xl font-extrabold">
              EDUVERSE<span className="text-violet-200">.</span>
            </div>
            <p className="mt-3 text-violet-100">
              Your journey to knowledge starts here.
            </p>
          </div>

          <div>
            <div className="mb-6 text-7xl">🎓</div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Learn today.
              <br />
              Lead tomorrow.
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-violet-100">
              Discover new skills, explore expert-led courses, and build
              your future with EDUVERSE.
            </p>
          </div>

          <p className="text-sm text-violet-200">
            © 2026 EDUVERSE. All rights reserved.
          </p>
        </div>

        <div className="p-7 sm:p-12">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Start learning
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Join EDUVERSE and start learning today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Minimum 6 characters"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-20 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-violet-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-violet-600 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account →"}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-violet-600 hover:text-violet-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
