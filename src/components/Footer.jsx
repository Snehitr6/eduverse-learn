
import { Link } from "react-router-dom";

const Icon = ({ name, size = 20 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "shrink-0",
  };

  const paths = {
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L9.06 10.9a16 16 0 0 0 4.04 4.04l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    twitter: <path d="M22 5.9a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 12 12 0 0 1-8.7-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 18.5-10.1v-.6A8.6 8.6 0 0 0 22 5.9Z" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
};

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
  ];

  const quickLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["All Courses", "/courses"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <Link to="/" className="mb-5 inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600">
                <Icon name="book" size={25} />
              </span>
              <span className="text-2xl font-extrabold">
                EDU<span className="text-violet-400">VERSE</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Learn without limits. Build your skills, discover new
              opportunities, and create your future with EDUVERSE.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-violet-600"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {quickLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="transition hover:text-violet-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Popular Categories</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {["Web Development", "UI / UX Design", "Data Science", "Digital Marketing"].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="transition hover:text-violet-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Icon name="mail" />
                <a href="mailto:hello@eduverse.com" className="hover:text-white">
                  hello@eduverse.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" />
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="pin" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
            </ul>

            <Link
              to="/courses"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-400 transition hover:gap-3"
            >
              Explore Courses <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row">
          <p>© {year} EDUVERSE. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
