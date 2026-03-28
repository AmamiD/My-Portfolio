import Container from "./Container";
import { certifications } from "../data/portfolio";
import { FaRobot, FaBrain, FaJava, FaGlobe, FaEye } from "react-icons/fa";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function iconFor(name) {
  const cls = "text-xl sm:text-2xl text-white";
  if (name === "ai") return <FaBrain className={cls} />;
  if (name === "java") return <FaJava className={cls} />;
  if (name === "web") return <FaGlobe className={cls} />;
  return <FaRobot className={cls} />;
}

function CertCard({ item }) {
  const hasLink = Boolean(item.link);

  return (
    <div className="hover-pop glass relative min-h-[120px] rounded-2xl p-4 pb-12 sm:p-5 sm:pb-14 md:p-6 md:pb-14">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <div className="glass grid h-12 w-12 shrink-0 place-items-center rounded-xl sm:h-14 sm:w-14">
          {iconFor(item.icon)}
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p className="text-sm font-extrabold leading-snug text-white sm:text-base md:text-lg break-words">
            {item.title}
          </p>
          <p className="mt-1 text-xs font-semibold text-white/55 sm:mt-2 sm:text-sm">
            {item.provider}
          </p>
        </div>
      </div>

      {/* Eye button */}
      {hasLink ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View certificate"
          className="hover-pop absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-[#045C68]/25 text-white hover:bg-[#045C68]/40 sm:bottom-5 sm:right-5 sm:h-11 sm:w-11"
        >
          <FaEye className="text-sm sm:text-base" />
        </a>
      ) : (
        <div className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-[#045C68]/15 text-white/50 sm:bottom-5 sm:right-5 sm:h-11 sm:w-11">
          <FaEye className="text-sm sm:text-base" />
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
      {/* Background */}
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        {/* Title */}
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Professional Certifications
        </h2>
        <Underline />

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {certifications.map((c) => (
            <CertCard key={`${c.title}-${c.provider}`} item={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}