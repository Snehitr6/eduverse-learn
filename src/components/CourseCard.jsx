
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getCourseVideo } from "../data/courseVideos";

export default function CourseCard({ course }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const video = getCourseVideo(course);

  if (!course) return null;

  return (
    <>
      <motion.article
        whileHover={{ y: -6 }}
        className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
      >
        <div className="relative h-52 overflow-hidden bg-violet-100">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900";
            }}
          />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-violet-700 shadow">
            {course.category}
          </span>

          <span className="absolute bottom-4 right-4 rounded-lg bg-slate-950/80 px-3 py-1.5 text-sm font-bold text-white">
            ₹{Number(course.price || 0).toLocaleString("en-IN")}
          </span>

          {video && (
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100 focus:opacity-100"
            >
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-violet-700 shadow-xl">
                <span className="text-xl">▶</span>
                Watch Preview
              </span>
            </button>
          )}
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-amber-500">
              ★ {course.rating || "New"}
            </span>
            <span className="text-xs text-slate-500">{course.level}</span>
          </div>

          <h3 className="min-h-14 text-lg font-bold leading-7 text-slate-900 group-hover:text-violet-700">
            {course.title}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            By {course.instructor}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span>◷ {course.duration}</span>
            <span>♙ {course.students ?? 0} Students</span>
          </div>

          <div className="mt-5 flex items-center justify-between gap-2">
            <div>
              {course.originalPrice && (
                <span className="mr-2 text-sm text-slate-400 line-through">
                  ₹{Number(course.originalPrice).toLocaleString("en-IN")}
                </span>
              )}
              <span className="font-bold text-violet-700">
                ₹{Number(course.price || 0).toLocaleString("en-IN")}
              </span>
            </div>

            <Link
              to={`/courses/${course.id}`}
              className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
            >
              View Course ↗
            </Link>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {previewOpen && video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-950"
            >
              <div className="flex items-center justify-between gap-3 p-4 text-white">
                <div>
                  <p className="text-xs font-semibold text-violet-300">
                    COURSE VIDEO PREVIEW
                  </p>
                  <h3 className="mt-1 font-bold">{course.title}</h3>
                </div>

                <button
                  onClick={() => setPreviewOpen(false)}
                  className="rounded-full bg-white/10 px-3 py-2 text-xl hover:bg-white/20"
                  aria-label="Close video"
                >
                  ×
                </button>
              </div>

              <div className="aspect-video w-full bg-black">
                <iframe
                  title={`${course.title} preview`}
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&controls=1&rel=0`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center">
                <span className="text-sm text-slate-300">
                  Video by {video.source}
                </span>
                <Link
                  to={`/courses/${course.id}`}
                  onClick={() => setPreviewOpen(false)}
                  className="rounded-xl bg-violet-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-violet-700"
                >
                  Start Learning →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
