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
  const cls = "text-3xl text-brand-soft";
  if (name === "fitness") return <FaDumbbell className={cls} />;
  if (name === "hotel") return <FaHotel className={cls} />;
  if (name === "mobile") return <FaMobileAlt className={cls} />;
  return <FaShoppingBag className={cls} />;
}

function TechPill({ text }) {
  return (
    <span className="rounded-full bg-[#045C68]/20 px-5 py-2 text-sm font-semibold text-white">
      {text}
    </span>
  );
}

function ProjectCard({ p }) {
  const hasGithub = Boolean(p.github);

  return (
    <div className="hover-pop glass relative rounded-3xl p-8">
      <div className="mb-6">{iconFor(p.icon)}</div>

      <h3 className="text-2xl font-extrabold text-white">{p.name}</h3>

      <p className="mt-5 text-base leading-8 text-white/65">{p.desc}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        {p.tech.map((t) => (
          <TechPill key={t} text={t} />
        ))}
      </div>

      <p className="mt-10 text-base leading-8 text-white/65">
        <span className="font-extrabold text-white/80">Features:</span>{" "}
        {p.features}
      </p>

      {hasGithub ? (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="hover-pop absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-xl bg-[#045C68]/20 text-white hover:bg-[#045C68]/35"
        >
          <FaGithub className="text-2xl" />
        </a>
      ) : (
        <div className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-xl bg-[#045C68]/10 text-white/35">
          <FaGithub className="text-2xl" />
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
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        <h2 className="text-6xl font-extrabold tracking-tight text-white">
          Projects
        </h2>
        <Underline />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}