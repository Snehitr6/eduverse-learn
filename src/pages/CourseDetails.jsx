
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import courses from "../data/courses";
import { getCourseVideo } from "../data/courseVideos";
import { useAuth } from "../context/AuthContext";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const course = courses.find(
    (item) => String(item.id) === String(id)
  );

  const video = getCourseVideo(course);
  const lessons = video?.lessons || [];

  const [activeLesson, setActiveLesson] = useState(0);
  const [enrollMessage, setEnrollMessage] = useState("");

  if (!course) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-28 text-center">
        <h1 className="text-3xl font-extrabold">Course Not Found</h1>
        <Link
          to="/courses"
          className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 font-bold text-white"
        >
          Browse Courses
        </Link>
      </div>
    );
  }

  const currentLesson = lessons[activeLesson];

  const handleEnroll = () => {
    if (!user) {
      navigate("/login", {
        state: { from: `/courses/${course.id}` },
      });
      return;
    }

    try {
      const existing = JSON.parse(
        localStorage.getItem("eduverse-enrollments") || "[]"
      );

      const alreadyEnrolled = existing.some(
        (item) =>
          String(item.courseId) === String(course.id) &&
          item.email === user.email
      );

      if (alreadyEnrolled) {
        setEnrollMessage("You are already enrolled in this course.");
        return;
      }

      existing.push({
        courseId: course.id,
        title: course.title,
        email: user.email,
        enrolledAt: new Date().toISOString(),
      });

      localStorage.setItem(
        "eduverse-enrollments",
        JSON.stringify(existing)
      );

      setEnrollMessage("Successfully enrolled! Start learning now.");
    } catch {
      setEnrollMessage("Unable to save enrollment. Please try again.");
    }
  };

  const changeLesson = (index) => {
    if (index >= 0 && index < lessons.length) {
      setActiveLesson(index);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* COURSE HERO */}
      <section className="bg-gradient-to-br from-violet-950 via-violet-900 to-indigo-950 px-5 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/courses"
            className="text-sm text-violet-200 hover:text-white"
          >
            ← Back to Courses
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-violet-200">
                {course.category}
              </span>

              <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl leading-8 text-violet-100">
                {course.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm text-violet-100">
                <span>★ {course.rating || "New"} Rating</span>
                <span>◷ {course.duration}</span>
                <span>♙ {course.students ?? 0} Students</span>
                <span>{course.level}</span>
              </div>

              <p className="mt-5 text-sm text-violet-200">
                Instructor: {course.instructor}
              </p>
            </motion.div>

            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2">
              <img
                src={course.image}
                alt={course.title}
                className="h-56 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE VIDEO LESSONS */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_350px]">

          <div>
            <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
              {video && currentLesson ? (
                <div className="aspect-video w-full">
                  <iframe
                    key={`${video.videoId}-${activeLesson}`}
                    title={`${course.title} - ${currentLesson.title}`}
                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}?start=${currentLesson.start}&rel=0&controls=1`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center p-6 text-center text-white">
                  <span className="text-5xl">🎬</span>
                  <h3 className="mt-4 text-xl font-bold">
                    Video coming soon
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    We haven't added an online video for this course yet.
                  </p>
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(course.title + " full course")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white"
                  >
                    Find Course Videos on YouTube ↗
                  </a>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              {video && currentLesson ? (
                <>
                  <p className="text-sm font-semibold text-violet-600">
                    NOW PLAYING · LESSON {activeLesson + 1}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                    {currentLesson.title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Online educational video by {video.source}
                  </p>

                  <div className="mt-7 flex flex-wrap justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => changeLesson(activeLesson - 1)}
                      disabled={activeLesson === 0}
                      className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                    >
                      ← Previous Lesson
                    </button>

                    <button
                      type="button"
                      onClick={() => changeLesson(activeLesson + 1)}
                      disabled={activeLesson === lessons.length - 1}
                      className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white hover:bg-violet-700 disabled:opacity-40"
                    >
                      Next Lesson →
                    </button>
                  </div>
                </>
              ) : (
                <h2 className="text-xl font-bold text-slate-900">
                  {course.title}
                </h2>
              )}
            </div>

            {/* COURSE DESCRIPTION */}
            <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                About This Course
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {course.description}
              </p>

              {Array.isArray(course.outcomes) &&
                course.outcomes.length > 0 && (
                  <>
                    <h3 className="mt-7 text-lg font-bold text-slate-900">
                      What You'll Learn
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {course.outcomes.map((outcome, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <span className="font-bold text-violet-600">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
            </div>
          </div>

          {/* LESSON SIDEBAR */}
          <aside className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:sticky lg:top-24">
            <div className="bg-violet-950 p-5 text-white">
              <p className="text-sm text-violet-300">YOUR LEARNING PATH</p>
              <h2 className="mt-2 text-xl font-bold">Course Lessons</h2>
              <p className="mt-2 text-sm text-violet-200">
                {lessons.length} video chapters
              </p>
            </div>

            <div className="max-h-[550px] overflow-y-auto p-3">
              {lessons.length > 0 ? (
                lessons.map((lesson, index) => (
                  <button
                    key={`${lesson.start}-${index}`}
                    type="button"
                    onClick={() => changeLesson(index)}
                    className={`mb-2 flex w-full items-center gap-3 rounded-xl p-4 text-left transition ${
                      activeLesson === index
                        ? "bg-violet-50 ring-1 ring-violet-200"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        activeLesson === index
                          ? "bg-violet-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {activeLesson === index ? "▶" : index + 1}
                    </span>

                    <span className="text-sm font-bold text-slate-800">
                      {lesson.title}
                    </span>
                  </button>
                ))
              ) : (
                <p className="p-4 text-sm text-slate-500">
                  No embedded lessons are available for this course yet.
                </p>
              )}
            </div>
          </aside>
        </div>

        {/* ENROLLMENT */}
        <div className="mt-10 flex flex-col justify-between gap-5 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-500">Course price</p>
            <h2 className="mt-1 text-3xl font-extrabold text-violet-700">
              ₹{Number(course.price || 0).toLocaleString("en-IN")}
            </h2>
            {course.originalPrice && (
              <p className="mt-1 text-sm text-slate-400 line-through">
                ₹{Number(course.originalPrice).toLocaleString("en-IN")}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <button
              type="button"
              onClick={handleEnroll}
              className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white transition hover:bg-violet-700"
            >
              Enroll Now →
            </button>

            {enrollMessage && (
              <p className="text-sm text-violet-700">{enrollMessage}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
