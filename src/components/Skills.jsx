import Container from "./Container";
import { skillsShowcase } from "../data/portfolio";
import { FaLayerGroup, FaCode, FaMobileAlt } from "react-icons/fa";

function Underline() {
  return (
    <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500" />
  );
}

function iconFor(name) {
  const cls = "text-3xl text-emerald-300";
  if (name === "code") return <FaCode className={cls} />;
  if (name === "mobile") return <FaMobileAlt className={cls} />;
  return <FaLayerGroup className={cls} />;
}

function Pill({ text }) {
  return (
    <span className="rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white/85">
      {text}
    </span>
  );
}

function SkillCard({ s }) {
  return (
    <div className="hover-pop rounded-3xl border border-white/10 bg-white/5 p-10 shadow-sm">
      <div className="flex items-center gap-4">
        <div>{iconFor(s.icon)}</div>
        <h3 className="text-3xl font-extrabold text-white">{s.title}</h3>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {s.items.map((i) => (
          <Pill key={i} text={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <Container className="py-16 md:py-20">
        <h2 className="text-6xl font-extrabold tracking-tight">
          Technical Expertise
        </h2>
        <Underline />

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {skillsShowcase.map((s) => (
            <SkillCard key={s.title} s={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}