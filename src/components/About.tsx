import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-layout">
        <Reveal effect="left" className="about-heading"><p className="eyebrow">04 — Perfil</p><h2>Entender o fluxo antes de alterar o produto.</h2></Reveal>
        <Reveal effect="right" className="about-detail" delayMs={100}><p>Esse cuidado ajuda a integrar novas funcionalidades sem perder de vista as pessoas que usam a plataforma e as equipas que a vão manter.</p><a href="#contact" className="about-link">Falar sobre um projecto <span aria-hidden="true">↗</span></a></Reveal>
      </div>
    </section>
  );
}
