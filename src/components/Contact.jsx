import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/portfolio";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Demo form. Connect EmailJS or Formspree to send real messages.");
  };

  return (
    <section id="contact" className="border-t border-white/10">
      <Container className="py-14">
        <SectionTitle title="Contact" subtitle="Let’s connect." />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-bold">Reach me</h3>

            <p className="mt-3 text-slate-300">
              Email:{" "}
              <a className="text-cyan-300 hover:text-cyan-200" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>

            <p className="mt-2 text-slate-300">
              GitHub:{" "}
              <a className="text-cyan-300 hover:text-cyan-200" href={profile.github} target="_blank" rel="noopener">
                {profile.github}
              </a>
            </p>

            <p className="mt-2 text-slate-300">
              LinkedIn:{" "}
              <a className="text-cyan-300 hover:text-cyan-200" href={profile.linkedin} target="_blank" rel="noopener">
                {profile.linkedin}
              </a>
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <label className="block text-sm text-slate-300">
              Name
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 p-3 outline-none focus:ring-2 focus:ring-cyan-300/40"
                required
              />
            </label>

            <label className="mt-4 block text-sm text-slate-300">
              Email
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 p-3 outline-none focus:ring-2 focus:ring-cyan-300/40"
                required
              />
            </label>

            <label className="mt-4 block text-sm text-slate-300">
              Message
              <textarea
                rows="5"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 p-3 outline-none focus:ring-2 focus:ring-cyan-300/40"
                required
              />
            </label>

            <button className="mt-5 w-full rounded-xl bg-cyan-300 py-3 font-semibold text-slate-900 hover:bg-cyan-200">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}