
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@eduverse.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Bengaluru, Karnataka, India"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday – Saturday, 9 AM – 6 PM"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f6ff] py-20 text-center">
        <div className="container-main">
          <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#635bff]">
            WE ARE HERE TO HELP
          </span>

          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Get In <span className="gradient-text">Touch</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Have questions about our courses or need assistance?
            Our friendly team is always ready to help.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding">
        <div className="container-main grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[3px] text-[#635bff]">
              CONTACT INFORMATION
            </span>

            <h2 className="mt-4 text-3xl font-extrabold">
              Let's Talk
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Our team is happy to answer your questions and
              help you find the perfect course for your goals.
            </p>

            <div className="mt-9 space-y-5">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-purple-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0eeff] text-[#635bff]">
                    <item.icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-extrabold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl sm:p-10"
          >
            <h2 className="text-2xl font-extrabold">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill in your details and send us your enquiry.
            </p>

            {success && (
              <div
                role="status"
                className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700"
              >
                <CheckCircle2 size={21} />
                Your message has been validated successfully!
              </div>
            )}

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none focus:border-[#635bff] focus:ring-4 focus:ring-purple-100 ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none focus:border-[#635bff] focus:ring-4 focus:ring-purple-100 ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-sm font-bold">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none focus:border-[#635bff] focus:ring-4 focus:ring-purple-100 ${
                    errors.subject ? "border-red-400" : "border-gray-200"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-bold">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm outline-none focus:border-[#635bff] focus:ring-4 focus:ring-purple-100 ${
                    errors.message ? "border-red-400" : "border-gray-200"
                  }`}
                />

                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="gradient-bg mt-7 flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-extrabold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 sm:w-auto sm:px-9"
            >
              Send Message <Send size={18} />
            </button>

            <p className="mt-4 text-xs text-gray-400">
              Demo form: connect an email service or backend to deliver messages.
            </p>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20">
        <div className="container-main">
          <h2 className="mb-6 text-center text-2xl font-extrabold">
            Find Us in Bengaluru
          </h2>

          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
            <iframe
              title="EDUVERSE Location"
              src="https://www.google.com/maps?q=Bengaluru,Karnataka,India&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
