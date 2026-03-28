import Container from "./Container";
import { projects } from "../data/portfolio";
import {
  FaGithub,
  FaMobileAlt,
  FaShoppingBag,
  FaDumbbell,
  FaHotel,
} from "react-icons/fa";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function iconFor(name) {
  const cls = "text-2xl sm:text-3xl text-brand-soft";
  if (name === "fitness") return <FaDumbbell className={cls} />;
  if (name === "hotel") return <FaHotel className={cls} />;
  if (name === "mobile") return <FaMobileAlt className={cls} />;
  return <FaShoppingBag className={cls} />;
}

function TechPill({ text }) {
  return (
    <span className="rounded-full bg-[#045C68]/20 px-3 py-1.5 text-xs font-semibold text-white sm:px-5 sm:py-2 sm:text-sm">
      {text}
    </span>
  );
}

function ProjectCard({ p }) {
  const hasGithub = Boolean(p.github);

  return (
    <div className="hover-pop glass relative rounded-3xl p-5 sm:p-6 md:p-8">
      {/* Icon */}
      <div className="mb-4 sm:mb-6">{iconFor(p.icon)}</div>

      {/* Title */}
      <h3 className="text-lg font-extrabold text-white sm:text-xl md:text-2xl">
        {p.name}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
        {p.desc}
      </p>

      {/* Tech stack */}
      <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-4">
        {p.tech.map((t) => (
          <TechPill key={t} text={t} />
        ))}
      </div>

      {/* Features */}
      <p className="mt-6 text-sm leading-7 text-white/65 sm:mt-8 sm:text-base sm:leading-8">
        <span className="font-extrabold text-white/80">Features:</span>{" "}
        {p.features}
      </p>

      {/* GitHub button */}
      {hasGithub ? (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="hover-pop absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-lg bg-[#045C68]/20 text-white hover:bg-[#045C68]/35 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        >
          <FaGithub className="text-lg sm:text-2xl" />
        </a>
      ) : (
        <div className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-lg bg-[#045C68]/10 text-white/35 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
          <FaGithub className="text-lg sm:text-2xl" />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Background */}
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        {/* Title */}
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Projects
        </h2>
        <Underline />

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}