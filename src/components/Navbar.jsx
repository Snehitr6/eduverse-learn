
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  ...(user ? [{ name: "Dashboard", path: "/dashboard" }] : []),
  { name: "Contact", path: "/contact" },
];

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-xl text-white shadow-lg">
            📚
          </span>
          <span className="text-2xl font-extrabold text-slate-900">
            EDU<span className="text-violet-600">VERSE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-violet-700"
                    : "text-slate-600 hover:text-violet-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <span className="text-sm font-semibold text-slate-700">
                Hi, {user.name}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl bg-red-50 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-3 text-sm font-bold text-slate-700 transition hover:text-violet-700"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                Get Started →
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg bg-violet-50 px-4 py-2 text-2xl text-violet-700 transition hover:bg-violet-100 lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="space-y-2 border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 font-semibold transition ${
                  isActive
                    ? "bg-violet-50 text-violet-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="border-t border-slate-100 pt-4">
            {user ? (
              <div className="space-y-3">
                <p className="px-3 font-semibold text-slate-700">
                  Hi, {user.name}
                </p>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full rounded-xl bg-red-50 px-4 py-3 text-left font-semibold text-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="rounded-xl border border-violet-200 py-3 text-center font-bold text-violet-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="rounded-xl bg-violet-600 py-3 text-center font-bold text-white"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
