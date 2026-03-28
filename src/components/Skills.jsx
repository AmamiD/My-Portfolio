import Container from "./Container";
import { skillsShowcase } from "../data/portfolio";
import {
  FaLayerGroup,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function iconFor(name) {
  const cls = "text-2xl sm:text-3xl text-brand-soft";
  if (name === "code") return <FaCode className={cls} />;
  if (name === "mobile") return <FaMobileAlt className={cls} />;
  if (name === "db") return <FaDatabase className={cls} />;
  if (name === "tools") return <FaTools className={cls} />;
  return <FaLayerGroup className={cls} />;
}

function Pill({ text }) {
  return (
    <span className="rounded-full bg-white/8 px-4 py-2 text-xs font-semibold text-white/90 sm:px-5 sm:py-3 sm:text-sm">
      {text}
    </span>
  );
}

function SkillCard({ s }) {
  return (
    <div className="hover-pop glass rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10">
      <div className="flex items-center gap-3 sm:gap-4">
        <div>{iconFor(s.icon)}</div>
        <h3 className="text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">
          {s.title}
        </h3>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3 md:mt-10 md:gap-4">
        {s.items.map((i) => (
          <Pill key={i} text={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10"
    >
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Technical Expertise
        </h2>
        <Underline />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3 md:gap-8 lg:gap-10">
          {skillsShowcase.map((s) => (
            <SkillCard key={s.title} s={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}