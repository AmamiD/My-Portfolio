import Container from "./Container";
import {
  aboutText,
  quickStats,
  aboutHighlights,
  profile,
} from "../data/portfolio";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaBullseye,
} from "react-icons/fa";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function StatRow({ value, label }) {
  return (
    <div className="py-4">
      <div className="text-2xl font-extrabold text-white sm:text-3xl">
        {value}
      </div>
      <div className="mt-2 text-sm text-white/55 sm:text-base">{label}</div>
    </div>
  );
}

function iconFor(name) {
  const cls = "text-3xl text-brand-soft";
  if (name === "graduation") return <FaGraduationCap className={cls} />;
  if (name === "code") return <FaLaptopCode className={cls} />;
  if (name === "brain") return <FaBrain className={cls} />;
  return <FaBullseye className={cls} />;
}

function HighlightCard({ title, desc, icon }) {
  return (
    <div className="hover-pop glass rounded-3xl p-5 sm:p-6 md:p-7">
      <div className="mb-5">{iconFor(icon)}</div>
      <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
        {desc}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10"
    >
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-14">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Me
            </h2>
            <Underline />

            <div className="mt-8 space-y-6 text-base leading-8 text-white/80 sm:mt-10 sm:space-y-8 sm:text-lg sm:leading-9">
              <p>{aboutText.p1}</p>
              <p>{aboutText.p2}</p>
            </div>

            {/* Cards */}
            <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
              {aboutHighlights.map((c) => (
                <HighlightCard key={c.title} {...c} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="pt-2 md:pt-6">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Quick Stats
            </h3>

            <div className="mt-6 divide-y divide-white/10 sm:mt-8">
              {quickStats.map((s) => (
                <StatRow key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            {/* Resume button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-pop mt-10 inline-flex items-center justify-center rounded-full bg-brand-grad px-8 py-3 text-sm font-extrabold text-white shadow-lg hover:opacity-95 sm:mt-12 sm:px-10 sm:py-4 sm:text-base"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}