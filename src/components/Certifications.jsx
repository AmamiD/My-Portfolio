import Container from "./Container";
import { certifications } from "../data/portfolio";
import { FaRobot, FaBrain, FaJava, FaGlobe, FaEye } from "react-icons/fa";

function Underline() {
  return (
    <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500" />
  );
}

function iconFor(name) {
  const cls = "text-2xl text-white";
  if (name === "ai") return <FaBrain className={cls} />;
  if (name === "java") return <FaJava className={cls} />;
  if (name === "web") return <FaGlobe className={cls} />;
  return <FaRobot className={cls} />;
}

function CertCard({ item }) {
  const hasLink = Boolean(item.link);

  return (
    <div className="hover-pop relative min-h-[140px] rounded-2xl border border-white/10 bg-white/5 p-6 pb-14 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Icon box */}
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/5">
          {iconFor(item.icon)}
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p className="text-lg font-extrabold leading-snug text-white">
            {item.title}
          </p>
          <p className="mt-2 text-sm font-semibold text-white/45">
            {item.provider}
          </p>
        </div>
      </div>

      {/* Eye button bottom-right */}
      {hasLink ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View certificate"
          className="hover-pop absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-emerald-400/20 text-emerald-300 hover:bg-emerald-400/30"
        >
          <FaEye />
        </a>
      ) : (
        <div className="hover-pop absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-emerald-400/15 text-emerald-300/60">
          <FaEye />
        </div>
      )}
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-white/10">
      <Container className="py-16 md:py-20">
        <h2 className="text-6xl font-extrabold tracking-tight">
          Professional Certifications
        </h2>
        <Underline />

        {/* Wider/longer cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((c) => (
            <CertCard key={`${c.title}-${c.provider}`} item={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}