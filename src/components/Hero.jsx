import Container from "./Container";
import { profile } from "../data/portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10"
    >
      <Container className="relative py-12 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* RIGHT PHOTO FIRST ON MOBILE */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative hero-photo-float">
              {/* Pulsing glow */}
              <div className="absolute -inset-8 rounded-full hero-photo-glow blur-3xl" />

              {/* Photo wrapper */}
              <div className="glass hero-photo-hover h-[240px] w-[240px] overflow-hidden rounded-full shadow-2xl sm:h-[280px] sm:w-[280px] md:h-[380px] md:w-[380px]">
                <img
                  src={profile.photoUrl}
                  alt={`${profile.name} photo`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="order-2 md:order-1">
            <h1 className="mt-2 text-4xl font-extrabold leading-[0.95] sm:text-5xl md:mt-4 md:text-6xl">
              <span className="block text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)]">
                {profile.firstName}
              </span>
              <span className="block text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)]">
                {profile.lastName}
              </span>
            </h1>

            {/* Typing Role */}
            <p className="mt-5 text-base font-semibold text-[#AEEAF2] drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] sm:text-lg md:mt-6 md:text-xl">
              <span className="hero-typing inline-block max-w-full">
                {profile.role}
              </span>
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base md:mt-6">
              {profile.summary}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-10">
              <button
                onClick={() => scrollTo("projects")}
                className="hover-pop rounded-full bg-brand-grad px-8 py-3 font-bold text-white shadow-lg hover:opacity-95"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="hover-pop glass rounded-full px-10 py-3 font-bold text-white"
              >
                Contact Me
              </button>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-4 md:mt-10">
              <IconCircle href={profile.linkedin} label="LinkedIn">
                <FaLinkedinIn />
              </IconCircle>
              <IconCircle href={profile.github} label="GitHub">
                <FaGithub />
              </IconCircle>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IconCircle({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-pop glass grid h-11 w-11 place-items-center rounded-full text-white sm:h-12 sm:w-12"
    >
      <span className="text-base sm:text-lg">{children}</span>
    </a>
  );
}