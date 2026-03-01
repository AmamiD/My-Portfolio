import Container from "./Container";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </Container>
    </footer>
  );
}