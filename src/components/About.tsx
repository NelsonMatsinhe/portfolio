import Reveal from "./Reveal";
import { siteInfo } from "../data";

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-layout">
        <Reveal effect="left" className="about-heading"><p className="eyebrow">04 — Perfil</p><h2 id="about-title">Entender o fluxo antes de alterar o produto.</h2></Reveal>
        <Reveal effect="right" className="about-detail" delayMs={100}>
          {siteInfo.profile.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a href="#contact" className="about-link">Falar sobre um projeto <span aria-hidden="true">↗</span></a>
        </Reveal>
      </div>
    </section>
  );
}
