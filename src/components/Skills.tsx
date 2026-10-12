import { primaryTechnologyGroups, secondaryTechnologyGroups } from "../data";
import Reveal from "./Reveal";
import { m, useReducedMotion } from "motion/react";
import { motionEase, motionTime } from "../motionSystem";

export default function Skills() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="stack" className="skills-section">
      <div className="skills-shell">
      <div className="skills-heading">
        <Reveal effect="left"><p className="eyebrow">03 — Caixa de ferramentas</p></Reveal>
        <Reveal effect="left" delayMs={60}><h2>Tecnologias com que trabalho.</h2><p>As ferramentas que utilizo para desenvolver, integrar e manter aplicações.</p></Reveal>
      </div>
      <Reveal className="primary-stack" effect="right" delayMs={100}>
        <div className="primary-stack-groups">
          {primaryTechnologyGroups.map((group) => (
            <div className="primary-stack-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>{group.items.map((technology) => <m.li key={technology} whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.97 }} transition={{ duration: motionTime.quick, ease: motionEase }}>{technology}</m.li>)}</ul>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="secondary-stack" effect="right" delayMs={140}>
        <details>
          <summary>Ver outras tecnologias</summary>
          <div className="secondary-stack-groups">
            {secondaryTechnologyGroups.map((group) => (
              <div key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </details>
      </Reveal>
      </div>
    </section>
  );
}
