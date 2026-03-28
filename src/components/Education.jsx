import Container from "./Container";
import { education } from "../data/portfolio";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function EduCard({ item }) {
  return (
    <div className="hover-pop glass rounded-3xl p-5 sm:p-6 md:p-7">
      {/* Year pill */}
      <div className="inline-flex items-center rounded-full bg-brand-grad px-4 py-2 text-xs font-bold text-white sm:text-sm">
        {item.year}
      </div>

      <h3 className="mt-4 text-lg font-extrabold text-white sm:text-xl">
        {item.title}
      </h3>

      <p className="mt-2 font-semibold text-brand-soft text-sm sm:text-base">
        {item.institute}
      </p>

      <div className="mt-4 space-y-2 text-sm text-white/60 sm:text-base">
        {(item.lines || []).map((t) => (
          <p key={t} className="leading-6 sm:leading-7">
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Background */}
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        {/* Title */}
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Education
        </h2>
        <Underline />

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3 md:gap-8">
          {education.map((e) => (
            <EduCard key={e.title} item={e} />
          ))}
        </div>
      </Container>
    </section>
  );
}