import Container from "./Container";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <Container className="py-4">
          <nav className="flex items-center">
            {/* Brand (left) */}
            <button
              onClick={() => scrollTo("home")}
              className="text-xl font-extrabold tracking-widest"
            >
              AMAMI
            </button>

            {/* Links (right aligned) */}
            <div className="ml-auto hidden items-center gap-10 md:flex">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-sm font-semibold text-white/80 hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}