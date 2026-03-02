import Container from "./Container";
import { aboutText, quickStats, aboutHighlights, profile } from "../data/portfolio";
import { FaGraduationCap, FaLaptopCode, FaBrain, FaBullseye } from "react-icons/fa";

function Underline() {
  return (
    <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500" />
  );
}

function StatRow({ value, label }) {
  return (
    <div className="py-4">
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="mt-2 text-base text-white/55">{label}</div>
    </div>
  );
}

function iconFor(name) {
  const cls = "text-3xl text-emerald-300";
  if (name === "graduation") return <FaGraduationCap className={cls} />;
  if (name === "code") return <FaLaptopCode className={cls} />;
  if (name === "brain") return <FaBrain className={cls} />;
  return <FaBullseye className={cls} />;
}

function HighlightCard({ title, desc, icon }) {
  return (
    <div className="hover-pop rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm">
      <div className="mb-5">{iconFor(icon)}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-white/65">{desc}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <Container className="py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-[1.25fr_0.75fr]">
          {/* LEFT */}
          <div>
            <h2 className="text-6xl font-extrabold tracking-tight">About Me</h2>
            <Underline />

            <div className="mt-10 space-y-8 text-lg leading-9 text-white/80">
              <p>{aboutText.p1}</p>
              <p>{aboutText.p2}</p>
            </div>

            {/* Cards 2x2 */}
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {aboutHighlights.map((c) => (
                <HighlightCard key={c.title} {...c} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="pt-6">
            <h3 className="text-4xl font-extrabold">Quick Stats</h3>

            <div className="mt-8 divide-y divide-white/10">
              {quickStats.map((s) => (
                <StatRow key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            {/* Resume button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener"
              className="hover-pop mt-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-10 py-4 text-base font-extrabold text-slate-950 shadow-lg shadow-cyan-500/15 hover:opacity-95"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}