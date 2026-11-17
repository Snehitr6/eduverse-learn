
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />

          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />

          <Route path="/courses" element={<AnimatedPage><Courses /></AnimatedPage>} />

          <Route path="/courses/:id" element={<AnimatedPage><CourseDetails /></AnimatedPage>} />

          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />

          <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />

          <Route path="/signup" element={<AnimatedPage><Signup /></AnimatedPage>} />

          {/* STUDENT DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <AnimatedPage>
                <Dashboard />
              </AnimatedPage>
            }
          />

          <Route
            path="*"
            element={
              <AnimatedPage>
                <div className="mx-auto max-w-7xl px-5 py-32 text-center">
                  <h1 className="text-5xl font-extrabold">404</h1>
                  <p className="mt-4 text-gray-500">Page not found.</p>
                  <Link
                    to="/"
                    className="mt-7 inline-block rounded-full bg-violet-600 px-7 py-3 text-sm font-bold text-white"
                  >
                    Back to Home
                  </Link>
                </div>
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return <AppContent />;
}
