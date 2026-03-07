import Container from "./Container";
import { certifications } from "../data/portfolio";
import { FaRobot, FaBrain, FaJava, FaGlobe, FaEye } from "react-icons/fa";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
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
    <div className="hover-pop glass relative min-h-[140px] rounded-2xl p-6 pb-14">
      <div className="flex items-start gap-4">
        <div className="glass grid h-14 w-14 shrink-0 place-items-center rounded-2xl">
          {iconFor(item.icon)}
        </div>

        <div className="min-w-0">
          <p className="text-lg font-extrabold leading-snug text-white">
            {item.title}
          </p>
          <p className="mt-2 text-sm font-semibold text-white/55">
            {item.provider}
          </p>
        </div>
      </div>

      {hasLink ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View certificate"
          className="hover-pop absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-[#045C68]/25 text-white hover:bg-[#045C68]/40"
        >
          <FaEye />
        </a>
      ) : (
        <div className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-[#045C68]/15 text-white/50">
          <FaEye />
        </div>
      )}
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-white/10"
    >
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        <h2 className="text-6xl font-extrabold tracking-tight text-white">
          Professional Certifications
        </h2>
        <Underline />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((c) => (
            <CertCard key={`${c.title}-${c.provider}`} item={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}