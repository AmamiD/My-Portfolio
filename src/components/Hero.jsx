import Container from "./Container";
import { profile } from "../data/portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      <Container className="relative py-14 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] md:text-6xl">
              <span className="block text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)]">
                {profile.firstName}
              </span>
              <span className="block text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)]">
                {profile.lastName}
              </span>
            </h1>

            {/* Typing Role */}
            <p className="mt-6 text-xl font-semibold text-[#AEEAF2] drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]">
              <span className="hero-typing inline-block">{profile.role}</span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/85">
              {profile.summary}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
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
            <div className="mt-10 flex items-center gap-4">
              <IconCircle href={profile.linkedin} label="LinkedIn">
                <FaLinkedinIn />
              </IconCircle>
              <IconCircle href={profile.github} label="GitHub">
                <FaGithub />
              </IconCircle>
            </div>
          </div>

          {/* RIGHT PHOTO (ANIMATED) */}
          <div className="flex justify-center md:justify-end">
            <div className="relative hero-photo-float">
              {/* Pulsing glow */}
              <div className="absolute -inset-8 rounded-full hero-photo-glow blur-3xl" />

              {/* Photo wrapper (hover animation) */}
              <div className="glass hero-photo-hover h-[320px] w-[320px] overflow-hidden rounded-full shadow-2xl md:h-[380px] md:w-[380px]">
                <img
                  src={profile.photoUrl}
                  alt={`${profile.name} photo`}
                  className="h-full w-full object-cover"
                />
              </div>
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
      className="hover-pop glass grid h-12 w-12 place-items-center rounded-full text-white"
    >
      <span className="text-lg">{children}</span>
    </a>
  );
}