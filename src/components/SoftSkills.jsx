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

function iconFor(name) {
  const cls = "text-4xl text-emerald-300";
  if (name === "speak") return <FaComments className={cls} />;
  if (name === "manage") return <FaTasks className={cls} />;
  if (name === "self") return <FaUserCog className={cls} />;
  if (name === "team") return <FaUsers className={cls} />;
  if (name === "honest") return <FaHandshake className={cls} />;
  return <FaBrain className={cls} />;
}

function SoftCard({ item }) {
  return (
    <div className="hover-pop rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-sm">
      <div className="mb-6 flex justify-center">
        {iconFor(item.icon)}
      </div>

      <h3 className="text-xl font-extrabold leading-snug text-white">
        {item.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-white/55">
        {item.desc}
      </p>
    </div>
  );
}

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="border-t border-white/10">
      <Container className="py-16 md:py-20">
        <h2 className="text-4xl font-extrabold text-white">
          Soft Skills & Professional Attributes
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {softSkills.map((s) => (
            <SoftCard key={s.title} item={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}