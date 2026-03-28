import { useEffect, useState } from "react";
import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const ids = links.map((l) => l.id);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: 0.35 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <Container className="py-4">
          <nav className="flex items-center">
            {/* Brand */}
            <button
              onClick={() => scrollTo("home")}
              className="text-xl font-extrabold tracking-widest text-white hover:opacity-90"
            >
              AMAMI
            </button>

            {/* Desktop links */}
            <div className="ml-auto hidden items-center gap-10 md:flex">
              {links.map((l) => {
                const isActive = active === l.id;

                return (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className={[
                      "relative text-sm font-semibold transition",
                      isActive
                        ? "text-[#AEEAF2]"
                        : "text-white/80 hover:text-white",
                    ].join(" ")}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#045C68]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="ml-auto text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </nav>

          {/* Mobile dropdown */}
          {open && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:hidden">
              <div className="flex flex-col gap-4">
                {links.map((l) => {
                  const isActive = active === l.id;

                  return (
                    <button
                      key={l.id}
                      onClick={() => scrollTo(l.id)}
                      className={[
                        "text-left text-sm font-semibold transition",
                        isActive
                          ? "text-[#AEEAF2]"
                          : "text-white/80 hover:text-white",
                      ].join(" ")}
                    >
                      {l.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}