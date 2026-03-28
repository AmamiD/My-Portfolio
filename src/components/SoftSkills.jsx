import Container from "./Container";
import { softSkills } from "../data/portfolio";
import {
  FaComments,
  FaTasks,
  FaUserCog,
  FaUsers,
  FaHandshake,
  FaBrain,
} from "react-icons/fa";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function iconFor(name) {
  const cls = "text-3xl sm:text-4xl text-brand-soft";
  if (name === "speak") return <FaComments className={cls} />;
  if (name === "manage") return <FaTasks className={cls} />;
  if (name === "self") return <FaUserCog className={cls} />;
  if (name === "team") return <FaUsers className={cls} />;
  if (name === "honest") return <FaHandshake className={cls} />;
  return <FaBrain className={cls} />;
}

function SoftCard({ item }) {
  return (
    <div className="hover-pop glass rounded-3xl p-5 text-center sm:p-6 md:p-8">
      <div className="mb-5 flex justify-center sm:mb-6">{iconFor(item.icon)}</div>

      <h3 className="text-lg font-extrabold leading-snug text-white sm:text-xl md:text-2xl">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/60 sm:mt-4 sm:text-base">
        {item.desc}
      </p>
    </div>
  );
}

export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="relative overflow-hidden border-t border-white/10"
    >
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Soft Skills & Professional Attributes
        </h2>
        <Underline />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 md:gap-8 lg:gap-10">
          {softSkills.map((s) => (
            <SoftCard key={s.title} item={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}