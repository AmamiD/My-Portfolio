import { useMemo, useState } from "react";
import Container from "./Container";
import { contactCards } from "../data/portfolio";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function iconFor(name) {
  const cls = "text-2xl text-white";
  if (name === "linkedin") return <FaLinkedinIn className={cls} />;
  if (name === "github") return <FaGithub className={cls} />;
  return <FaEnvelope className={cls} />;
}

function ContactInfoCard({ c }) {
  return (
    <a
      href={c.link}
      target={c.link?.startsWith("http") ? "_blank" : undefined}
      rel={c.link?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="hover-pop glass block rounded-3xl p-8 hover:bg-white/10"
    >
      <div className="flex items-center gap-6">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-grad">
          {iconFor(c.icon)}
        </div>

        <div className="min-w-0">
          <h4 className="text-2xl font-extrabold text-white">{c.title}</h4>
          <p className="mt-2 break-all text-base text-white/60">{c.value}</p>
          <p className="mt-6 text-sm text-white/45">{c.note}</p>
        </div>
      </div>
    </a>
  );
}

function Input({ placeholder, value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#045C68]/70"
    />
  );
}

function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={6}
      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#045C68]/70"
    />
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const to = "amamidanansuriya@gmail.com";
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;
    return (
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject || "Portfolio Contact")}` +
      `&body=${encodeURIComponent(body)}`
    );
  }, [name, email, subject, message]);

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10"
    >
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        <h2 className="text-6xl font-extrabold tracking-tight text-white">
          Get In Touch
        </h2>
        <Underline />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl font-extrabold text-white">
              Contact Information
            </h3>

            <div className="mt-10 space-y-8">
              {contactCards.map((c) => (
                <ContactInfoCard key={c.title} c={c} />
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-10">
            <h3 className="text-4xl font-extrabold text-white">
              Send Message
            </h3>

            <div className="mt-10 space-y-8">
              <Input placeholder="Your Name" value={name} onChange={setName} />
              <Input
                placeholder="Your Email"
                value={email}
                onChange={setEmail}
                type="email"
              />
              <Input
                placeholder="Subject"
                value={subject}
                onChange={setSubject}
              />
              <TextArea
                placeholder="Your Message"
                value={message}
                onChange={setMessage}
              />

              <a
                href={mailto}
                className="hover-pop inline-flex items-center gap-3 rounded-xl bg-brand-grad px-8 py-4 text-base font-extrabold text-white hover:opacity-95"
              >
                Submit <FaPaperPlane />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}