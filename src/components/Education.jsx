import Container from "./Container";
import { education } from "../data/portfolio";

function Underline() {
  return (
    <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500" />
  );
}

function EduCard({ item }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm">
      {/* Year pill */}
      <div className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 px-4 py-2 text-sm font-bold text-slate-950">
        {item.year}
      </div>

      <h3 className="mt-5 text-xl font-extrabold text-white">
        {item.title}
      </h3>

      <p className="mt-3 font-semibold text-emerald-300">
        {item.institute}
      </p>

      <div className="mt-4 space-y-2 text-white/55">
        {(item.lines || []).map((t) => (
          <p key={t} className="leading-7">
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="border-t border-white/10">
      <Container className="py-16 md:py-20">
        {/* Main title */}
        <h2 className="text-6xl font-extrabold tracking-tight">Education</h2>
        <Underline />

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {education.map((e) => (
            <EduCard key={e.title} item={e} />
          ))}
        </div>
      </Container>
    </section>
  );
}