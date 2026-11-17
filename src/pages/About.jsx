
import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    },
    {
      name: "Sarah Williams",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
    },
    {
      name: "David Miller",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
    },
    {
      name: "Emma Johnson",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      text: "To provide accessible, engaging and practical education that empowers people to achieve their personal and professional goals."
    },
    {
      icon: Eye,
      title: "Our Vision",
      text: "To build a world where everyone has the opportunity to learn, grow and create a better future through education."
    },
    {
      icon: Heart,
      title: "Our Values",
      text: "We value curiosity, quality, inclusivity, creativity and lifelong learning in everything we do."
    }
  ];

  return (
    <>
      <section className="bg-[#f7f6ff] py-20 text-center">
        <div className="container-main">
          <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#635bff]">
            WHO WE ARE
          </span>

          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            About <span className="gradient-text">EDUVERSE</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            We believe education has the power to transform lives. Our mission
            is to make quality learning accessible to everyone.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1100"
            alt="Students learning together"
            className="h-[420px] w-full rounded-[28px] object-cover"
          />

          <div>
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#635bff]">
              OUR STORY
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Making Quality Education Accessible to Everyone.
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              EDUVERSE is an online learning platform created to make skill
              development easier, more flexible and more engaging. We bring
              together passionate educators, practical lessons and a community
              of curious learners.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-500">
              From technology and creative design to business and marketing,
              our courses help learners build practical skills for a changing
              world.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div>
                <h3 className="text-3xl font-extrabold text-[#635bff]">25K+</h3>
                <p className="mt-1 text-xs text-gray-500">Happy Learners</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#635bff]">120+</h3>
                <p className="mt-1 text-xs text-gray-500">Online Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f7ff]">
        <div className="container-main grid gap-7 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0eeff] text-[#635bff]">
                <item.icon size={27} />
              </div>

              <h3 className="mt-6 text-xl font-extrabold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="mb-12 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#635bff]">
              OUR PEOPLE
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Meet Our Team
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Passionate people helping learners achieve more.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {team.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -7 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-5 text-center">
                  <h3 className="font-extrabold">{person.name}</h3>
                  <p className="mt-2 text-xs text-[#635bff]">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-main rounded-[28px] bg-[#17152d] p-9 text-white sm:p-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold">
                Learning That Moves You Forward.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Every learner deserves the tools, guidance and opportunities
                to build a brighter future.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Expert-led learning experiences",
                "Flexible online education",
                "Practical, career-focused skills"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#a79fff]" size={21} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
