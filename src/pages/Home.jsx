
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

const categories = [
  { name: "Development", icon: "💻", count: "25+ Courses" },
  { name: "UI/UX Design", icon: "🎨", count: "18+ Courses" },
  { name: "Data Science", icon: "📊", count: "15+ Courses" },
  { name: "Marketing", icon: "📱", count: "12+ Courses" },
];

const benefits = [
  {
    number: "01",
    title: "Expert Instructors",
    description:
      "Learn directly from experienced professionals and industry experts.",
    icon: "🎓",
  },
  {
    number: "02",
    title: "Learn at Your Pace",
    description:
      "Access your lessons anytime and learn according to your schedule.",
    icon: "⏰",
  },
  {
    number: "03",
    title: "Practical Projects",
    description:
      "Build real-world projects and develop skills employers value.",
    icon: "🚀",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    review:
      "EDUVERSE helped me improve my development skills and build projects that made me confident in my career.",
    avatar: "PS",
  },
  {
    name: "Rahul Kumar",
    role: "UI/UX Designer",
    review:
      "The courses are easy to follow, practical, and taught by knowledgeable instructors.",
    avatar: "RK",
  },
  {
    name: "Ananya Rao",
    role: "Data Analyst",
    review:
      "A great learning platform. I gained practical knowledge and improved my professional skills.",
    avatar: "AR",
  },
];

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="overflow-hidden bg-white">

      {/* PREMIUM HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#170b36] text-white">

        {/* Background effects */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(124,58,237,0.38),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(79,70,229,0.3),transparent_40%)]" />

        <div className="absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />

        <div className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-white/[0.08] px-4 py-2 text-xs font-semibold tracking-wide text-violet-100 shadow-lg backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              YOUR FUTURE STARTS WITH LEARNING
            </div>

            <h1 className="mt-8 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[64px]">
              Unlock Your
              <span className="mt-1 block bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent">
                True Potential.
              </span>
              <span className="mt-1 block">
                Learn. Grow.
                <span className="text-violet-300"> Succeed.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Build in-demand skills with expert-led courses, practical
              projects, and flexible learning designed to move your career
              forward.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/courses"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-800 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-50"
              >
                Explore Courses
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/10"
              >
                Discover EDUVERSE
                <span>↗</span>
              </Link>
            </div>

            {/* TRUST STATISTICS */}
            <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/15">
              <div className="pr-4">
                <h3 className="text-2xl font-extrabold sm:text-3xl">
                  10K+
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  Happy Learners
                </p>
              </div>

              <div className="px-4">
                <h3 className="text-2xl font-extrabold sm:text-3xl">
                  100+
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  Expert Courses
                </p>
              </div>

              <div className="pl-4">
                <h3 className="text-2xl font-extrabold sm:text-3xl">
                  4.9/5
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  Learner Rating
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            {/* Image glow */}
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-500/30 to-indigo-500/20 blur-2xl" />

            {/* Image frame */}
            <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-2.5 shadow-2xl backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85"
                  alt="Students collaborating and learning together"
                  className="h-[330px] w-full object-cover sm:h-[430px] lg:h-[470px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#160b31]/65 via-transparent to-transparent" />

                {/* Image label */}
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  ✨ LEARN WITHOUT LIMITS
                </div>

                {/* Image heading */}
                <div className="absolute bottom-48 left-6 right-6 text-white sm:left-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    YOUR NEXT CHAPTER
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                    Knowledge creates opportunities.
                  </h3>
                </div>

                {/* Floating progress card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Your learning journey
                      </p>

                      <h3 className="mt-1 text-base font-extrabold sm:text-lg">
                        Keep Growing!
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-2xl">
                      🚀
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.3, delay: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
                    />
                  </div>

                  <p className="mt-2 text-[11px] font-medium text-slate-500 sm:text-xs">
                    Every lesson brings you closer to your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-16 hidden rounded-2xl border border-white/20 bg-[#28154e]/90 p-4 shadow-xl backdrop-blur-xl sm:block md:-right-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-xl">
                  🎓
                </span>

                <div>
                  <p className="text-sm font-extrabold text-white">
                    Learn Every Day
                  </p>

                  <p className="mt-1 text-xs text-violet-200">
                    Build your future
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="font-semibold text-violet-600">
              LEARN YOUR WAY
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Explore Top Categories
            </h2>

            <p className="mt-3 text-slate-500">
              Find the perfect learning path for your future.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to="/courses"
                  className="group block rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-3xl transition group-hover:bg-violet-600">
                    <span className="transition group-hover:scale-110">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.count}
                  </p>

                  <span className="mt-5 inline-block font-semibold text-violet-600">
                    Explore →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="font-semibold text-violet-600">
                POPULAR LEARNING
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Featured Courses
              </h2>

              <p className="mt-3 text-slate-500">
                Handpicked courses to help you get ahead.
              </p>
            </div>

            <Link
              to="/courses"
              className="font-bold text-violet-600 transition hover:text-violet-800"
            >
              View All Courses →
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EDUVERSE */}
      <section className="bg-violet-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="font-semibold text-violet-600">
              WHY CHOOSE US
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A Better Way to Learn
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl border border-violet-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-4xl">{benefit.icon}</span>

                <p className="mt-6 text-sm font-bold text-violet-500">
                  {benefit.number}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="font-semibold text-violet-600">
              SUCCESS STORIES
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What Our Students Say
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="text-xl tracking-widest text-amber-400">
                  ★★★★★
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  "{item.review}"
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                    {item.avatar}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-700 px-6 py-16 text-center text-white sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Start Your Learning Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-violet-100">
            Take the next step toward your goals. Explore our courses and
            discover what you can achieve.
          </p>

          <Link
            to="/courses"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-violet-700 shadow-lg transition hover:-translate-y-1 hover:bg-violet-50"
          >
            Get Started Today →
          </Link>
        </div>
      </section>

    </main>
  );
}
