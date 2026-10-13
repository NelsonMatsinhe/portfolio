import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-shell">
      <Reveal effect="scale" delayMs={60}><p className="eyebrow">05 — Próximo passo</p><h2 id="contact-title">Vamos conversar<span>.</span></h2></Reveal>
      <Reveal effect="up" className="contact-layout" delayMs={100}>
        <p>{siteInfo.contactIntro}</p>
        <div className="contact-links">
          <a className="contact-email" href={"mailto:" + siteInfo.email}>{siteInfo.email}<span aria-hidden="true"> ↗</span></a>
          <a className="contact-phone" href={"tel:" + siteInfo.phone.replace(/\s+/g, "")}>{siteInfo.phone}</a>
          <div className="social-links">
            <a href={siteInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Nelson Matsinhe, abre num novo separador">GitHub <span aria-hidden="true">↗</span></a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Nelson Matsinhe, abre num novo separador">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={siteInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactar Nelson Matsinhe pelo WhatsApp, abre num novo separador">WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
