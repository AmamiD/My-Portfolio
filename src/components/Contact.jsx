import { useState } from "react";
import Container from "./Container";
import { contactCards } from "../data/portfolio";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Underline() {
  return <div className="mt-4 h-1 w-28 rounded-full bg-brand-grad" />;
}

function iconFor(name) {
  const cls = "text-xl sm:text-2xl text-white";
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
      className="hover-pop glass block rounded-3xl p-5 sm:p-6 md:p-8 hover:bg-white/10"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-grad sm:h-14 sm:w-14 md:h-16 md:w-16">
          {iconFor(c.icon)}
        </div>

        <div className="min-w-0">
          <h4 className="text-lg font-extrabold text-white sm:text-xl md:text-2xl">
            {c.title}
          </h4>
          <p className="mt-2 break-all text-sm text-white/60 sm:text-base">
            {c.value}
          </p>
          <p className="mt-4 text-xs text-white/45 sm:mt-6 sm:text-sm">
            {c.note}
          </p>
        </div>
      </div>
    </a>
  );
}

function Input({ placeholder, value, onChange, type = "text", name }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#045C68]/70 sm:px-5 sm:py-4 sm:text-base"
    />
  );
}

function TextArea({ placeholder, value, onChange, name }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={6}
      required
      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#045C68]/70 sm:px-5 sm:py-4 sm:text-base"
    />
  );
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("EmailJS is not configured yet. Please check your .env file.");
      return;
    }

    try {
      setSending(true);
      setStatus("");

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setStatus("Message sent successfully.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10"
    >
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-16 md:py-20">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Get In Touch
        </h2>
        <Underline />

        <div className="mt-10 grid gap-8 sm:mt-12 md:gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Contact Information
            </h3>

            <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6 md:space-y-8">
              {contactCards.map((c) => (
                <ContactInfoCard key={c.title} c={c} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="glass rounded-3xl p-5 sm:p-6 md:p-10">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Send Message
            </h3>

            <form
              onSubmit={sendEmail}
              className="mt-8 space-y-5 sm:mt-10 sm:space-y-6 md:space-y-8"
            >
              <Input
                name="from_name"
                placeholder="Your Name"
                value={name}
                onChange={setName}
              />

              <Input
                name="from_email"
                placeholder="Your Email"
                value={email}
                onChange={setEmail}
                type="email"
              />

              <Input
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={setSubject}
              />

              <TextArea
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={setMessage}
              />

              <button
                type="submit"
                disabled={sending}
                className="hover-pop inline-flex items-center gap-3 rounded-xl bg-brand-grad px-6 py-3 text-sm font-extrabold text-white hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-8 sm:py-4 sm:text-base"
              >
                {sending ? "Sending..." : "Submit"} <FaPaperPlane />
              </button>

              {status && (
                <p className="text-sm text-white/75">{status}</p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}