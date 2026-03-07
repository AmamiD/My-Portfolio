import Container from "./Container";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Same site background feel */}
      <div className="section-brand-bg" />
      <div className="section-brand-dots" />

      <Container className="relative py-6 text-center">
        <p className="text-sm text-white/65">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">{profile.name}</span>. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}