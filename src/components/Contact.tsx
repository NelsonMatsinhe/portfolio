import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
      <Reveal effect="scale" delayMs={60}><p className="eyebrow">05 — Próximo passo</p><h2>Vamos conversar<span>.</span></h2></Reveal>
      <Reveal effect="up" className="contact-layout" delayMs={100}>
        <p>Aberto a oportunidades de trabalho, colaboração técnica e projectos de desenvolvimento web.</p>
        <div className="contact-links">
          <a className="contact-email" href={"mailto:" + siteInfo.email}>{siteInfo.email}<span aria-hidden="true"> ↗</span></a>
          <a className="contact-phone" href={"tel:" + siteInfo.phone.replace(/\s+/g, "")}>{siteInfo.phone}</a>
          <div className="social-links">
            <a href={siteInfo.social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={siteInfo.social.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
