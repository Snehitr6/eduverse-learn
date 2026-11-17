
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, BookOpen, Star } from "lucide-react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => b.students - a.students);
    }

    return result;
  }, [search, category, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-violet-950 via-violet-900 to-indigo-900 px-5 py-20 text-white">
        <div className="container-main mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              Learn something new every day
            </span>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Explore our <span className="text-violet-300">courses</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100 sm:text-lg">
              Discover expert-led courses designed to help you build skills,
              grow your career, and achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-main mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              All Courses
            </h2>
            <p className="mt-2 text-slate-500">
              Find the right course for your learning journey.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100 sm:w-64"
              />
            </div>

            <div className="relative">
              <SlidersHorizontal
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-8 outline-none focus:border-violet-500 sm:w-52"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                category === item
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing <strong className="text-slate-900">{filteredCourses.length}</strong>{" "}
            courses
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <BookOpen size={17} />
            Expert-led learning
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <motion.div
            layout
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <Search size={35} className="mx-auto text-slate-300" />
            <h3 className="mt-4 text-xl font-bold text-slate-800">
              No courses found
            </h3>
            <p className="mt-2 text-slate-500">
              Try another search term or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
