
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import courses from "../data/courses";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [enrolledIds, setEnrolledIds] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      const all = JSON.parse(
        localStorage.getItem("eduverse-enrollments") || "{}"
      );

      const saved = all[user.email.toLowerCase()];
      setEnrolledIds(Array.isArray(saved) ? saved.map(String) : []);
    } catch {
      setEnrolledIds([]);
    }
  }, [user, navigate]);

  const enrolledCourses = courses.filter((course) =>
    enrolledIds.includes(String(course.id))
  );

  const firstName = user?.name?.trim().split(" ")[0] || "Student";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container-main py-10">

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-600 p-8 text-white shadow-xl sm:p-12"
        >
          <p className="font-semibold text-violet-200">
            STUDENT DASHBOARD
          </p>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Welcome back, {firstName}! 👋
          </h1>

          <p className="mt-3 max-w-xl text-violet-100">
            Continue your learning journey and discover new skills with EDUVERSE.
          </p>

          <Link
            to="/courses"
            className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-violet-700 transition hover:-translate-y-1"
          >
            Explore Courses →
          </Link>
        </motion.section>

        <section className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { label: "Enrolled Courses", value: enrolledCourses.length, icon: "📚" },
            { label: "Completed Courses", value: 0, icon: "🏆" },
            { label: "Learning Progress", value: "0%", icon: "📈" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="mt-4 text-sm font-medium text-slate-500">
                {item.label}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                {item.value}
              </h2>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                My Learning
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your enrolled courses
              </p>
            </div>

            <Link
              to="/courses"
              className="font-bold text-violet-700 hover:text-violet-900"
            >
              Browse All →
            </Link>
          </div>

          {enrolledCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {enrolledCourses.map((course) => (
                <article
                  key={course.id}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5">
                    <p className="text-xs font-bold uppercase text-violet-600">
                      {course.category}
                    </p>

                    <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {course.instructor || "EDUVERSE Instructor"}
                    </p>

                    <Link
                      to={`/courses/${course.id}`}
                      className="mt-5 block rounded-xl bg-violet-600 px-4 py-3 text-center font-bold text-white transition hover:bg-violet-700"
                    >
                      Continue Learning →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-violet-200 bg-white px-6 py-14 text-center">
              <div className="text-5xl">📖</div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                No courses enrolled yet
              </h3>
              <p className="mt-2 text-slate-500">
                Explore our courses and start learning today.
              </p>
              <Link
                to="/courses"
                className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 font-bold text-white hover:bg-violet-700"
              >
                Explore Courses
              </Link>
            </div>
          )}
        </section>

        <section className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-extrabold text-slate-900">
            My Account
          </h2>
          <p className="mt-3 text-slate-700">
            <strong>Name:</strong> {user?.name}
          </p>
          <p className="mt-2 text-slate-700">
            <strong>Email:</strong> {user?.email}
          </p>
        </section>
      </div>
    </main>
  );
}
