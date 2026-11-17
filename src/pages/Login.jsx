
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

function Icon({ name, size = 20 }) {
  const icons = {
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
    eyeOff: <><path d="m3 3 18 18" /><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" /><path d="M9.9 5.2A10.5 10.5 0 0 1 12 5c6.5 0 10 7 10 7a15 15 0 0 1-4 4.7" /><path d="M6.6 6.6C3.6 8.5 2 12 2 12s3.5 7 10 7a10 10 0 0 0 3-.5" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const result = login(form.email.trim(), form.password);

    setLoading(false);

    if (!result.success) {
      setError(result.message || "Invalid email or password.");
      return;
    }

    navigate(location.state?.from || "/", { replace: true });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden min-h-[650px] overflow-hidden bg-gradient-to-br from-violet-950 via-violet-800 to-indigo-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

          <Link to="/" className="relative flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Icon name="book" size={26} />
            </span>
            <span className="text-2xl font-extrabold">
              EDU<span className="text-violet-300">VERSE</span>
            </span>
          </Link>

          <div className="relative">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-violet-200">
              Welcome Back!
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight">
              Your next chapter
              <span className="block text-violet-300">starts here.</span>
            </h1>

            <p className="mt-6 max-w-md leading-8 text-violet-100">
              Continue learning, explore new opportunities, and build the
              future you have always dreamed of.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Access your enrolled courses",
                "Continue where you left off",
                "Track your learning progress",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-400/20 text-violet-200">
                    <Icon name="check" size={16} />
                  </span>
                  <span className="text-sm text-violet-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="relative text-sm text-violet-300">
            Learn without limits. Grow without boundaries.
          </p>
        </div>

        {/* LOGIN FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center p-6 sm:p-12 lg:p-16"
        >
          <div className="w-full max-w-md">

            <Link to="/" className="mb-10 flex items-center gap-2 lg:hidden">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Icon name="book" />
              </span>
              <span className="text-xl font-extrabold text-slate-900">
                EDU<span className="text-violet-600">VERSE</span>
              </span>
            </Link>

            <div className="mb-8">
              <span className="font-semibold text-violet-600">
                YOUR LEARNING JOURNEY
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Welcome Back
              </h2>
              <p className="mt-3 text-slate-500">
                Sign in to continue your learning journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Icon name="mail" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Icon name="lock" />
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600"
                  >
                    <Icon name={showPassword ? "eyeOff" : "eye"} />
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
                <Icon name="arrow" />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-violet-600 hover:text-violet-800"
              >
                Create Account
              </Link>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 text-center">
              <Link
                to="/"
                className="text-sm font-medium text-slate-500 transition hover:text-violet-600"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
