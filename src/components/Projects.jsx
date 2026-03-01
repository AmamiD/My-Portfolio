import Container from "./Container";
import { projects } from "../data/portfolio";
import { FaGithub, FaMobileAlt, FaShoppingBag, FaDumbbell, FaHotel } from "react-icons/fa";

function Underline() {
  return (
    <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500" />
  );
}

function iconFor(name) {
  const cls = "text-3xl text-emerald-300";
  if (name === "fitness") return <FaDumbbell className={cls} />;
  if (name === "hotel") return <FaHotel className={cls} />;
  if (name === "mobile") return <FaMobileAlt className={cls} />;
  return <FaShoppingBag className={cls} />;
}

function TechPill({ text }) {
  return (
    <span className="rounded-full bg-emerald-400/15 px-5 py-2 text-sm font-semibold text-emerald-200">
      {text}
    </span>
  );
}

function ProjectCard({ p }) {
  const hasGithub = Boolean(p.github);

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
      {/* Top icon */}
      <div className="mb-6">{iconFor(p.icon)}</div>

      <h3 className="text-2xl font-extrabold text-white">{p.name}</h3>

      <p className="mt-5 text-base leading-8 text-white/60">
        {p.desc}
      </p>

      {/* Tech pills */}
      <div className="mt-8 flex flex-wrap gap-4">
        {p.tech.map((t) => (
          <TechPill key={t} text={t} />
        ))}
      </div>

      {/* Features */}
      <p className="mt-10 text-base leading-8 text-white/60">
        <span className="font-extrabold text-white/70">Features:</span>{" "}
        {p.features}
      </p>

      {/* GitHub icon bottom-right */}
      {hasGithub ? (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
        >
          <FaGithub className="text-2xl" />
        </a>
      ) : (
        <div className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/30">
          <FaGithub className="text-2xl" />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <Container className="py-16 md:py-20">
        <h2 className="text-6xl font-extrabold tracking-tight">Projects</h2>
        <Underline />

        {/* 3-column grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}