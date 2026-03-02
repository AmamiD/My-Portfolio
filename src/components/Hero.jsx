import Container from "./Container";
import { profile } from "../data/portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_20%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(900px_circle_at_70%_40%,rgba(99,102,241,0.12),transparent_60%),linear-gradient(to_bottom,#050914,#050914)]" />
      <div className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20px_20px,rgba(56,189,248,0.35)_2px,transparent_3px)] [background-size:140px_140px]" />

      <Container className="relative py-14 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left */}
          <div>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] md:text-6xl">
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {profile.firstName}
              </span>
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {profile.lastName}
              </span>
            </h1>

            <p className="mt-6 text-xl font-semibold text-emerald-300/90">
              {profile.role}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
              {profile.summary}
            </p>

            {/* Buttons (POP) */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="hover-pop rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 px-8 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-95"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="hover-pop rounded-full border border-emerald-300/60 px-10 py-3 font-bold text-emerald-200 hover:bg-white/5"
              >
                Contact Me
              </button>
            </div>

            {/* Social icons (POP) */}
            <div className="mt-10 flex items-center gap-4">
              <IconCircle href={profile.linkedin} label="LinkedIn">
                <FaLinkedinIn />
              </IconCircle>
              <IconCircle href={profile.github} label="GitHub">
                <FaGithub />
              </IconCircle>
            </div>
          </div>

          {/* Right photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 blur-2xl" />
              <div className="h-[320px] w-[320px] overflow-hidden rounded-full border border-white/20 bg-white/5 shadow-2xl md:h-[380px] md:w-[380px]">
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
      className="hover-pop grid h-12 w-12 place-items-center rounded-full border border-emerald-300/60 text-emerald-200 hover:bg-white/5"
    >
      <span className="text-lg">{children}</span>
    </a>
  );
}